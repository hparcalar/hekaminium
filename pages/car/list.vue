<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Araçlar
                <button type="button" @click="newRecord" v-show="hasViewAuth('CarService', 1)"
                  class="sc-button sc-button-small uk-margin-small-left">
                  <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                  Yeni
                </button>
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody class="uk-child-width-1-3 uk grid" data-uk-grid style="justify-content: center;">
          <div v-if="bindComplete" v-for="car in this.formData" @click="clickDetail(car.id)">
            <ScCard class="sc-widget" style="border-radius: 20px; padding-bottom: 15px;">
              <div class="sc-widget-content">
                <div class="uk-flex uk-flex-middle">
                  <div class="uk-flex-1 uk-width-2-3">
                    <ScCardTitle>
                      {{car.plateNo}} / {{car.model}}
                    </ScCardTitle>
                  </div>
                  <div class="uk-width-1-3">
                    <span class="sc-widget-addon md-color-red-600" style="font-size: medium;">
                      {{ car.currentMileage > car.maintenanceMileage ? "Bakım Zamanı" : ""}}
                      {{ car.inspectionDate < $moment().format("YYYY-MM-DD") ? "Muayene Zamanı" : "" }}
                      {{ car.insuranceDate < $moment().format("YYYY-MM-DD") ? "Sigorta Zamanı" : "" }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="uk-margin-medium-left uk-child-width-1-2@s uk-grid" data-uk-grid>
                <label for="1" style="margin-top: 15px; font-weight: 700;">Muayene Geçerlilik Tarihi:</label>
                <label for="1-1" style="margin-top: 15px;">{{car.inspectionDate}}</label>
                <label for="2" style="font-weight: 700;">Sigorta Geçerlilik Tarihi:</label>
                <label for="2-1">{{car.insuranceDate}}</label>
                <label for="3" style="font-weight: 700;">Güncel Km:</label>
                <label for="3-1">{{car.currentMileage}} km</label>
                <label for="4" style="font-weight: 700;">Bakım Km:</label>
                <label for="4-1">{{car.maintenanceMileage}} km</label>
                <label for="5" style="font-weight: 700;">Aylık Yakıt Masrafı:</label>
                <label for="5-1">{{car.monthlyFuelCost.reduce((a, b) => a + parseInt(b), 0)}} ₺</label>
                <label for="6" style="font-weight: 700;">Aylık Kilometre:</label>
                <label for="6-1">{{ car.monthlyMileage.length > 0 ? (((car.monthlyMileage[car.monthlyMileage.length -1] ?? 0) - (car.monthlyMileage[0] ?? 0)) ?? 0) : 0}} km</label>
              </div>
            </ScCard>
          </div>
        </ScCardBody>
      </ScCard>
    </div>
    <Dialog header="Araç Ekle" :visible="refreshCarForm" :close-on-escape="true" :dismissable-mask="true" :modal="true"
      @update:visible="hideHandler" :style="{ width: '45vw', 'z-index': '5000 !important' }">
      <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
        <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
          <div>
            <ScInput v-model="formData.plateNo">
              <label>Plaka</label>
            </ScInput>
          </div>
          <div>
            <ScInput v-model="formData.model">
              <label>Model</label>
            </ScInput>
          </div>
          <div>
            <ScInput v-model="formData.modelYear">
              <label>Model Yılı</label>
            </ScInput>
          </div>
          <div>
            <ScInput v-model="formData.currentMileage">
              <label>Güncel Kilometre</label>
            </ScInput>
          </div>
          <div style="margin-top: 35px;">
            <ScInput v-model="formData.inspectionDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
              mode="outline">
              <label>Muayene Tarihi</label>
            </ScInput>
          </div>
          <div>
            <ScInput v-model="formData.maintenanceMileage">
              <label>Bakım Kilometresi</label>
            </ScInput>
          </div>
          <div style="margin-top: 35px;">
            <ScInput v-model="formData.insuranceDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
              mode="outline">
              <label>Sigorta Tarihi</label>
            </ScInput>
          </div>
        </div>
        <div style="margin-top: 35px; right: 0;" class="uk-flex uk-flex-right">
          <button type="button" @click="onCancel"
            class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
          </button>
          <button type="button" @click="onSubmit" v-show="hasViewAuth('CarService', 1)"
            class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: check" class="uk-icon"></span>
          </button>
        </div>
      </fieldset>
    </Dialog>
  </div>
</template>
<script>
import { useApi } from '~/composable/useApi';
import { useUserSession } from "~/composable/userSession";
import ScInput from '~/components/Input'
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
  require('~/plugins/flatpickr');
}

export default {
  name: 'CarList',
  components: {
    ScInput,
  },
  data: () => ({
    refreshCarForm: false,
    formData: {
      id: 0,
      plateNo: null,
      model: null,
      modelYear: null,
      currentMileage: null,
      inspectionDate: null,
      maintenanceMileage: null,
      insuranceDate: null,
    },
    bindComplete: false,
  }),
  async mounted() {
    await this.bindData()
  },
  methods: {
    async bindData() {
      const api = useApi();
      const rawData = (await api.get('Car')).data;
      this.formData = rawData;
      this.bindComplete = true
    },
    clickDetail(carId) {
      this.$router.push('/car?id=' + carId);
    },
    async onSubmit() {
      try {
        const api = useApi();
        var postModel = {
          id:0,
          plateNo: this.formData.plateNo.toString(),
          model: this.formData.model.toString(),
          modelYear: this.formData.modelYear.toString(),
          currentMileage: this.formData.currentMileage.toString(),
          inspectionDate: this.formData.inspectionDate.toString(),
          maintenanceMileage: this.formData.maintenanceMileage.toString(),
          insuranceDate: this.formData.insuranceDate.toString()
        }

        const postResult = (await api.post('Car', postModel)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          this.hideHandler(false)
          this.bindData()
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
    },
    newRecord() {
      this.hideHandler(true)
    },
    hideHandler(event) {
      this.refreshCarForm = event;
    },
    onCancel() {
      this.hideHandler(false)
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
  }
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';
</style>