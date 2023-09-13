<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle> Araç Bilgileri </ScCardTitle>
            </div>
            <div>
              <button type="button" @click="addMileage(1)"
                class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: plus" class="uk-icon">Kilometre Güncelle </span>
              </button>
              <button type="button" @click="onCancel"
                class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
              </button>
              <button type="button" @click="onSubmit" v-show="hasViewAuth('CarService', 1)"
                class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: check" class="uk-icon"></span>
              </button>
              <button type="button" @click="onDelete" v-show="hasViewAuth('CarService', 2)"
                class="sc-button sc-button-danger sc-button-medium uk-margin-small-right">
                <span data-uk-icon="icon: trash" class="uk-icon"></span>
              </button>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <div class="uk-grid">
            <div class="uk-width-1-3">
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
                  <div @click="addMileage(1)">
                    <ScInput v-model="formData.currentMileage" read-only>
                      <label>Güncel Kilometre</label>
                    </ScInput>
                  </div>
                  <div style="margin-top: 35px;">
                    <ScInput v-model="formData.inspectionDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
                      mode="outline">
                      <label>Muayene Tarihi</label>
                    </ScInput>
                  </div>
                  <div @click="addMileage(2)">
                    <ScInput v-model="formData.maintenanceMileage" read-only>
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
              </fieldset>
            </div>
            <div class="uk-width-2-3">
              <h3>
                Maliyetler
              </h3>
              <DataTable :value="details" responsiveLayout="scroll" columnResizeMode="fit" dataKey="id" :paginator="true"
                showGridlines :rows="20" :filters.sync="filterGeneral" selectionMode="single" filterDisplay="row"
                sortField="stocktakingNo" :sortOrder="-1"
                :globalFilterFields="['stocktakingDate', 'stocktakingNo', 'explanation', 'warehouseName', 'username']">
                <template #header>
                  <div style="display: flex; flex-direction: row;">
                    <div class="flex justify-content-between">
                      <Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined"
                        @click="clearGeneralFilter()" />
                      <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
                      </span>
                    </div>
                    <div style="margin-left: auto;">
                      <Button type="button" icon="pi pi-plus" label="Maliyet Ekle" class="p-button-outlined"
                        @click="addCost()" />
                    </div>
                  </div>
                </template>
                <template #empty>
                  Maliyet bilgisi bulunamadı.
                </template>
                <template #loading>
                  Yükleniyor. Lütfen bekleyiniz.
                </template>
                <Column field="detailDate" header="Tarih" sortable :style="{ width: '10%' }"
                  :headerStyle="{ width: '10%' }">
                  <template #body="slotProps">
                    {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
                  </template>
                </Column>
                <Column field="detailCodeText" header="Maliyet Türü" sortable :style="{ width: '10%' }"
                  :headerStyle="{ width: '10%' }">
                  <template #body="slotProps">
                    {{ (slotProps.data[slotProps.column.field]) }}
                  </template>
                </Column>
                <Column field="costExplanation" header="Açıklama" sortable :style="{ width: '20%' }"
                  :headerStyle="{ width: '20%' }">
                  <template #body="slotProps">
                    {{ (slotProps.data[slotProps.column.field]) }}
                  </template>
                </Column>
                <Column field="value" header="Bedel" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
                  <template #body="slotProps">
                    {{ (slotProps.data[slotProps.column.field]) }} ₺
                  </template>
                </Column>
              </DataTable>
            </div>
          </div>
        </ScCardBody>
      </ScCard>
    </div>
    <Dialog header="Maliyet Ekle" :visible="this.refreshCostForm" :close-on-escape="true" :dismissable-mask="true"
      :modal="true" @update:visible="hideHandlerCost" :style="{ width: '45vw', 'z-index': '5000 !important' }">
      <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
        <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
          <div>
            <Select2 v-model="selectedCostType" :options="costTypeList" @change="onCostTypeChanged"
              :settings="{ 'width': '100%', 'allowClear': false }">
              <label>Maliyet Türü</label>
            </Select2>
          </div>
          <div>
            <ScInput v-model="costPrice">
              <label>Maliyet Tutarı</label>
            </ScInput>
          </div>
          <div style="margin-top: 30px;">
            <ScTextarea v-model="costExplanation" :autosize="false" :rows="3">
              <label>Maliyet Açıklaması</label>
            </ScTextarea>
          </div>
          <div style="margin-top: 45px;">
            <ScInput v-model="detailDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr mode="outline">
              <label>Maliyet Tarihi</label>
            </ScInput>
          </div>
        </div>
      </fieldset>
      <div style="margin-top: 35px; right: 0;" class="uk-flex uk-flex-right">
        <button type="button" @click="hideHandlerCost(false)"
          class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
          <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
        </button>
        <button type="button" @click="submitCost" v-show="hasViewAuth('CarService', 1)"
          class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
          <span data-uk-icon="icon: check" class="uk-icon"></span>
        </button>
      </div>
    </Dialog>

    <Dialog header="Kilometre Güncelle" :visible="refreshMileageForm" :close-on-escape="true" :dismissable-mask="true"
      :modal="true" @update:visible="hideHandlerMileage" :style="{ width: '45vw', 'z-index': '5000 !important' }">
      <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
        <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
          <div>
            <Select2 v-model="selectedMileageType" :options="mileageTypeList" @change="onMileageTypeChanged"
              :settings="{ 'width': '100%', 'allowClear': false }">
              <label>Kilometre Türü</label>
            </Select2>
          </div>
          <div>
            <ScInput v-model="mileage">
              <label>Kilometre</label>
            </ScInput>
          </div>
          <div style="margin-top: 45px;">
            <ScInput v-model="detailDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr mode="outline">
              <label>Güncelleme Tarihi</label>
            </ScInput>
          </div>
        </div>
      </fieldset>
      <div style="margin-top: 35px; right: 0;" class="uk-flex uk-flex-right">
        <button type="button" @click="hideHandlerMileage(false)"
          class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
          <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
        </button>
        <button type="button" @click="submitMileage" v-show="hasViewAuth('CarService', 1)"
          class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
          <span data-uk-icon="icon: check" class="uk-icon"></span>
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { getQS } from '~/composable/useHelpers';
import { useUserSession } from '~/composable/userSession';
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import { dateToStr } from "~/composable/useHelpers";
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
  require('~/plugins/flatpickr');
}

export default {
  name: 'FirmForm',
  components: {
    Select2: process.client ? () => import('~/components/Select2') : null,
    ScInput,
    ScTextarea,
    PrettyRadio,
    PrettyCheck
  },
  data: () => ({
    formData: {
      id: 0,
      plateNo: null,
      model: null,
      modelYear: null,
    },
    mileageTypeList: [
      { id: 1, text: "Güncel Kilometre" },
      { id: 2, text: "Bakım Kilometresi" },
    ],
    costTypeList: [
      { id: 4, text: "Yakıt Maliyeti" },
      { id: 5, text: "Bakım Maliyeti" },
      { id: 6, text: "Vergi Maliyeti" },
      { id: 7, text: "Ceza Maliyeti" },
      { id: 8, text: "Diğer Maliyetler" },
    ],
    details: null,
    refreshCostForm: false,
    refreshMileageForm: false,
    selectedCostType: 4,
    selectedMileageType: 0,
    mileage: null,
    costPrice: null,
    costExplanation: null,
    detailDate: null,
    filterGeneral: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    }
  }),

  async mounted() {
    const qsId = getQS('id');
    if (qsId) this.formData.id = parseInt(qsId);
    else this.formData.id = 0;

    await this.bindModel();
  },
  methods: {
    async bindModel() {
      this.detailDate = this.$moment().format('YYYY-MM-DD');
      const api = useApi();
      try {
        const getData = (await api.get('Car/' + this.formData.id)).data;
        if (getData && getData.id > 0) {
          this.formData = getData;
          this.details = getData.details;
        }
      } catch (error) {

      }
    },
    async onSubmit() {
      try {
        var postData= {
          id: this.formData.id,
          plateNo: this.formData.plateNo,
          model: this.formData.model,
          modelYear: this.formData.modelYear,
          insuranceDate: this.formData.insuranceDate,
          inspectionDate: this.formData.inspectionDate
        };
        const api = useApi();
        const postResult = (await api.post('Car/EditCar', postData)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          location.reload()
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
    },
    onCancel() {
      this.$router.push('/car/list');
    },
    async onDelete() {
      const self = this;
      UIkit.modal.confirm('Bu araç kaydını silmek istediğinizden emin misiniz?').then(
        async function () {
          try {
            const api = useApi();
            const delResult = (await api.delete('Car/' + self.formData.id)).data;
            if (delResult.result) {
              self.showNotification('Silme işlemi başarılı', false, 'success');

              self.$router.go(-1);
            }
            else
              self.showNotification(delResult.errorMessage, false, 'error');
          } catch (error) {

          }
        });
    },
    addCost() {
      this.refreshCostForm = true
    },
    addMileage(type) {
      if (type > 0) {
        this.selectedMileageType = type
      }
      else {
        this.selectedMileageType = 1
      }
      this.refreshMileageForm = true
    },
    async submitCost() {
      try {
        const api = useApi();
        var postData = {
            id: 0,
            carId: this.formData.id,
            detailCode: this.selectedCostType,
            costExplanation: this.costExplanation,
            value: this.costPrice,
            detailDate: this.detailDate
        }
        const postResult = (await api.post('Car/Add', postData)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          this.hideHandlerCost(false);
          location.reload()
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
    },
    async submitMileage() {
      try {
        const api = useApi();
        var postData = {
            id: 0,
            carId: this.formData.id,
            detailCode: this.selectedMileageType,
            costExplanation: "",
            value: this.mileage,
            detailDate: this.detailDate
        };
        const postResult = (await api.post('Car/Add', postData)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          this.hideHandlerCost(false);
          location.reload()
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
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
    onMileageTypeChanged() {

    },
    onCostTypeChanged() {

    },
    hideHandlerCost(event) {
      this.refreshCostForm = event;
    },
    hideHandlerMileage(event) {
      this.refreshMileageForm = event;
    },
    clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
    convertDateToStr(prm) {
      return dateToStr(prm)
    },
  }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
</style>
