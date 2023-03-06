<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
        <span class="uk-margin-right md-color-gray-600 mdi mdi-sitemap"></span>
        <h4 class="md-color-gray-600 uk-margin-remove uk-width-5-6">
          Stok Çıkışı
        </h4>
        <div class="uk-width-1-6">
          <button type="button" @click="onSubmit" v-show="hasViewAuth('StockOut',1)"
            class="sc-button sc-button-primary sc-button-small uk-margin-medium uk-margin-remove-top uk-width-1-1@m">
            <span data-uk-icon="icon: check" class="uk-icon"></span>
            <span>Kaydet</span>
          </button>
        </div>
      </div>
      <form>
        <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
          <div class="uk-child-width-2-3@m uk-grid" data-uk-grid>
            <div class="uk-width-2-3@m uk-child-width-1-2@m uk-grid">
              <client-only>
                <Select2 v-model="formData.projectId" :options="projects"
                  :settings="{ 'width': '100%', 'placeholder': 'Proje', 'allowClear': true }"></Select2>
              </client-only>
              <client-only>
                <Select2 v-model="formData.inWarehouseId" :options="warehouses" @change="warehouseSelected"
                  :settings="{ 'width': '100%', 'placeholder': 'Depo', 'allowClear': true }"></Select2>
              </client-only>
            </div>
            <div class="uk-width-1-2">
              <ScInput v-model="formData.consumptionDate" :config="{ wrap: true, dateFormat: 'Y.m.d' }" v-flatpickr
                mode="outline">
                <label>Tarih</label>
              </ScInput>
            </div>
          </div>
          <br>
          <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
            <div class="uk-grid">
              <div class="uk-width-1-5@l">
                <div class="uk-button-group sc-padding-remove-left" style="height:34px;">
                  <button type="button" @click="showNewConsumptionDetail"
                    class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                    <span data-uk-icon="icon: plus" class="uk-icon"></span>
                  </button>
                  <button v-show="selectedConsumptionDetail && selectedConsumptionDetail.id > 0" type="button"
                    @click="removeConsumptionDetail" class="sc-button sc-button-danger sc-button-small uk-width-expand"
                    style="height:34px;">
                    <span data-uk-icon="icon: trash" class="uk-icon"></span>
                  </button>
                </div>
              </div>
              <div class="uk-width-4-5@l">
                <ConsumptionDetail :detail-object="selectedConsumptionDetail" :total-detail-count="details.length"
                  :is-dialog="false" @onDetailSubmit="onDetailSaved" :warehouse-id="formData.inWarehouseId" />
              </div>
            </div>
          </fieldset>
          <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
            <client-only>
              <Datatable id="sc-dt-details-table" ref="consumptionDetailsTable" :data="details" :options="dtOptions"
                :customColumns="dtDetailCols" :buttons="true"
                :customEvents="[{ name: 'select', function: clickDetail }, { name: 'deselect', function: deselectDetail }]">
              </Datatable>
            </client-only>
          </fieldset>
        </fieldset>
        <div class="uk-margin-large-top">
          <button type="button" @click="onSubmit" v-show="hasViewAuth('StockOut',1)"
            class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: check" class="uk-icon"></span>
          </button>
          <button type="button" @click="onCancel"
            class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
          </button>
          <button type="button" @click="onDelete" v-show="hasViewAuth('StockOut',2)"
            class="sc-button sc-button-danger sc-button-medium">
            <span data-uk-icon="icon: trash" class="uk-icon"></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import ScInput from '~/components/Input'
import ConsumptionDetail from '../../logical_components/ConsumptionDetail.vue'
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
}

if (process.client) {
  require('~/plugins/flatpickr');
}

export default {
  name: 'StockConsumption',
  components: {
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    Select2: process.client ? () => import('~/components/Select2') : null,
    PrettyCheck,
    ScInput,
    ConsumptionDetail,
  },
  data: () => ({
    formData: {
      id: 0,
      receiptNo: '0001',
      projectId: null,
      plantId: null,
      consumptionDate: '',
      receiptType: 107,
      receiptStatus: 0,
      inWarehouseId: 0,
    },
    isMounting: false,
    details: [],
    projects: [],
    warehouses: [],
    itemList: [],
    dtOptions: {
      select: {
        style: 'single'
      },
      searching: false,
      paging: false,
    },
    dtDetailCols: [
      { data: "lineNumber", title: "Satır No", visible: true, },
      { data: "itemName", title: "Stok Adı", visible: true, render: function (data, ev, row) { return row.itemId && row.itemId > 0 ? row.itemName : row.itemExplanation; } },
      { data: "quantity", title: "Miktar", visible: true, },
    ],
    selectedConsumptionDetail: {
      id: 0,
    },
    bindComplete: false
  }),
  async mounted() {
    this.isMounting = true;
    await this.bindModel();
    this.isMounting = false;
  },
  methods: {
    async bindModel() {
      const api = useApi();
      try {
        const projData = (await api.get('Project/Demandable')).data;
        if (projData)
          this.projects = projData.map((d) => {
            return {
              ...d,
              text: d.projectName,
            };
          })
        const warehouseData = (await api.get('Warehouse')).data;
        if (warehouseData){
          this.warehouses = warehouseData.map((d) => {
            return {
              ...d,
              text: d.warehouseName,
            };
          })
        }
      this.formData.consumptionDate = this.$moment().format('YYYY-MM-DD');
      } catch (error) {

      }
    },
    warehouseSelected(event) {
      this.formData.inWarehouseId = event;
    },
    onDetailSaved(detailParam) {
      const detailRow = detailParam.data;
      if (detailParam.action == 'save') {
        if (detailRow.id == 0) {
          detailRow.newRecord = true;
          detailRow.id = detailRow.lineNumber;
          this.details.push(detailRow);
          this.showNewConsumptionDetail();
        }
        else {
          const existingDetail = this.details.find(d => d.id == detailRow.id);
          if (existingDetail) {
            // detailRow.newDetail = false;

            existingDetail.lineNumber = detailRow.lineNumber;
            existingDetail.itemId = detailRow.itemId;
            existingDetail.itemName = detailRow.itemName;
            existingDetail.quantity = detailRow.quantity;
            // existingDetail.newDetail = detailRow.newDetail;
          }
        }
      }

      this.bindComplete = true
    },
    async onSubmit() {
      this.bindComplete = false

      if (this.formData.projectId == null) {
        this.showNotification('Lütfen proje seçiniz', false, 'error');
        return;
      }
      if (!this.formData.inWarehouseId > 0) {
        this.showNotification('Lütfen depo seçiniz', false, 'error');
        return;
      }

      try {
        this.formData.details = this.details.map((d) => {
          return {
            ...d,
            id: d.newRecord == true ? 0 : d.id,
            quantity: d.quantity,
            itemId: d.itemId,
            itemName: d.itemName,
            projectId: this.formData.projectId
          }
        });

        if(this.formData.details.length <= 0){
          this.showNotification('Lütfen en az bir adet malzeme ekleyiniz', false, 'error');
          return;
        }

        const session = useUserSession();
        this.formData.plantId = session.user.plantId;
        const api = useApi();
        const postResult = (await api.post('ItemReceipt', this.formData)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          this.$router.push('/warehouse/live');
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
      }
    },
    onCancel() {
      if (this.isDialog)
        this.$emit('onCancel'); //UIkit.modal(document.getElementById(this.dialogContainer)).hide();
      else
        this.$router.push('/warehouse/live');
    },
    async onDelete() {
      const self = this;
      this.details = [];
    },
    hasViewAuth(sectionKey,authCode){
            if (process.client){
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey, authCode);
            }
            return false;
        },
    removeConsumptionDetail() {
      if (this.selectedConsumptionDetail) {
        const consumptionIndex = this.details.indexOf(this.selectedConsumptionDetail);
        if (consumptionIndex > -1) {
          this.details.splice(consumptionIndex, 1);

          let lineNumber = 1;
          for (let i = 0; i < this.details.length; i++) {
            const row = this.details[i];
            row.lineNumber = lineNumber;
            lineNumber++;
          }

          this.showNewConsumptionDetail();
        }
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
    showNewConsumptionDetail() {
      this.selectedConsumptionDetail = { id: 0 };
    },
    clickDetail: function (e, dt, type, indexes) {
      try {
        this.selectedConsumptionDetail = this.details[indexes[0]];
      } catch (error) {

      }
    },
    deselectDetail: function () {
      this.selectedConsumptionDetail = { id: 0 };
    }
  },
  watch: {
    recordId: async function (newVal, oldVal) {
      // if (!this.isMounting){
      //     this.formData.id = this.recordId;
      //     await this.bindModel();
      // }

      this.formData.id = this.recordId;
      await this.bindModel();
    },
    projectId: function (newVal, oldVal) {
      if (this.formData)
        this.formData.projectId = newVal;
    },
    details: {
      handler: function (newVal, oldVal) {
        if (this.bindComplete) {
          this.$emit('onChange');
        }
      },
      deep: true
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