<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
          <div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
            sc-round sc-border md-bg-grey-100">
            <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
            <h4 class="md-color-gray-600 uk-margin-remove">
              Proje Bilgileri
            </h4>
          </div>
          <form>
            <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
              <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                <div>
                  <ScInput v-model="formData.projectCode" read-only>
                    <label>Proje Kodu</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.projectName" read-only>
                    <label>Proje Adı</label>
                  </ScInput>
                </div>
                <div>
                  <client-only>
                    <Select2 v-model="formData.projectCategoryId" :options="categories" disabled
                      :settings="{ 'width': '100%', 'placeholder': 'Kategori', 'allowClear': true }"></Select2>
                  </client-only>
                </div>
                <div>
                  <client-only>
                    <Select2 v-model="formData.firmId" :options="firms" disabled
                      :settings="{ 'width': '100%', 'placeholder': 'Müşteri', 'allowClear': true }"></Select2>
                  </client-only>
                </div>
                <div>
                  <ScInput v-model="formData.forexName" read-only>
                    <label>Döviz Cinsi</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.forexRate" read-only>
                    <label>Döviz Kuru</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.offerPrice" read-only>
                    <label>Proje Bedeli(TL)</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.offerForexPrice" read-only>
                    <label>Proje Bedeli(Döviz)</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.expiryStartDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
                    mode="outline">
                    <label>Vade Başlangıç Tarihi</label>
                  </ScInput>
                </div>
                <div>
                  <ScInput v-model="formData.expiryEndDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
                    mode="outline">
                    <label>Vade Bitiş Tarihi Tarihi</label>
                  </ScInput>
                </div>
                <div>
                  <ScTextarea v-model="formData.expiryExplanation">
                    <label>Açıklama</label>
                  </ScTextarea>
                </div>   
                <div>
                  <div style="margin-bottom: 25px;">
                    <ScInput v-model="formData.expiryTime" :type="'number'">
                      <label>Vade Süresi(Gün)</label>
                    </ScInput>
                  </div>             
                  <div v-show="hasViewAuth('ProjectBudgetView', 0)">
                    <ToggleButton v-model="formData.isInvoiced" onLabel="Faturalandırıldı" offLabel="Faturalandırılmadı" />
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="uk-margin-large-top">
              <button type="button" @click="onSubmit" v-show="hasViewAuth('ProjectBudgetView', 0)"
                class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: check" class="uk-icon"></span>
              </button>
              <button type="button" @click="onCancel"
                class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScInput from '~/components/Input'
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { getQS, dateToStr } from '~/composable/useHelpers';
import ScTextarea from '~/components/Textarea'
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
  require('~/plugins/flatpickr');
}

export default {
  name: 'Invoice-track',
  components: {
		Select2: process.client ? () => import("~/components/Select2") : null,
    ScInput,
    ScTextarea,
  },
  data: () => ({
    formData: {
      id: 0,
			projectCode: '',
			projectName: '',
			projectCategoryId: '1',
			firmId: '',
			forexId: null,
			offerPrice: null,
			forexRate: null,
			offerForexPrice: null,
			isInvoiced: false,
      expiryExplanation: '',
      expiryStartDate: null,
      expiryEndDate: null,
      expiryTime: 0
    },
    firms: [],
    categories: [],
  }),
  async mounted() {
    const qsId = getQS('id');
    if (qsId) this.formData.id = parseInt(qsId);
    else this.formData.id = 0;

    await this.bindModel();
  },
  methods: {
    async bindModel() {
      const self = this;
      const api = useApi();
      try {
        const catData = (await api.get('Project/Category')).data;
				if (catData)
					this.categories = catData.map((d) => {
						return {

							id: d.id.toString(),
							text: d.projectCategoryName,
						};
					})
				const firmData = (await api.get('Firm')).data;
				if (firmData)
					this.firms = firmData.map((d) => {
						return {
							...d,
							id: d.id.toString(),
							text: d.firmName,
							code: d.firmCode,
						};
					});
        const getData = (await api.get('Project/' + this.formData.id)).data;
        if (getData && getData.id > 0) {
          if (getData.expiryStartDate && getData.expiryStartDate.length > 0) {
            getData.expiryStartDate = self.$moment(getData.expiryStartDate).format('YYYY-MM-DD');
          }
          if (getData.expiryEndDate && getData.expiryEndDate.length > 0) {
            getData.expiryEndDate = self.$moment(getData.expiryEndDate).format('YYYY-MM-DD');
          }

          getData.firmId = getData.firmId == null ? '' : getData.firmId.toString();
          getData.projectCategoryId = getData.projectCategoryId == null ? '' : getData.projectCategoryId.toString();
          getData.forexId = getData.forexId == null ? '' : getData.forexId.toString();
          getData.offerPrice = getData.offerPrice == null ? '' : getData.offerPrice.toFixed(2);
          getData.offerForexPrice = getData.offerPrice == null ? '' : getData.forexId == 0 ? '' : getData.offerForexPrice.toFixed(2);
          getData.forexRate = getData.forexRate == null ? '' : getData.forexRate.toFixed(2);

          this.formData = getData;
        }
      } catch (error) {

      }
    },
    async onSubmit() {
      if (this.isSaving)
        return;
      this.isSaving = true;
      try {
        const api = useApi();
        const postData = {
          id: this.formData.id,
          isInvoiced: this.formData.isInvoiced,
          expiryTime: this.formData.expiryTime,
          expiryExplanation: this.formData.expiryExplanation,
          expiryStartDate: this.formData.expiryStartDate ? this.$moment(this.formData.expiryStartDate).format('YYYY-MM-DD') : null,
          expiryEndDate: this.formData.expiryEndDate ? this.$moment(this.formData.expiryEndDate).format('YYYY-MM-DD') : null,
        };
        const result = await api.post('Project/ExpiryEdit', postData);
        if (result.data.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = result.recordId;
        }
        else
          this.showNotification(result.data.errorMessage, false, 'error');
      } catch (error) {
        console.error(error)
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
      this.isSaving = false;
    },
    onCancel() {
      this.$router.push('/project/invoice-track/list');
    },
    showNotification(text, pos, status, persistent) {
      var config = {};
      config.timeout = persistent ? !persistent : 3000;
      if (status) {
        config.status = status;
      }
      if (pos) {
        config.pos = pos;
      }
      UIkit.notification(text, config);
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
    },
  },
  watch: {
    recordId: async function (newVal, oldVal) {
      this.formData.id = this.recordId;
      await this.bindModel();
    },
  }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
@import "~scss/plugins/datatables";
</style>
<style type="text/css">
.bg-success {
  background-color: #11bf48;
}
</style>