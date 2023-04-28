<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
          sc-round sc-border md-bg-grey-100">
        <span class="uk-margin-right md-color-gray-600 mdi mdi-sitemap"></span>
        <h4 class="md-color-gray-600 uk-margin-remove uk-width-5-6">
          Stok Sayım
        </h4>
        <div class="uk-width-1-6">
          <button type="button" @click="onSubmit" v-show="hasViewAuth('StockOut', 1)"
            class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: check" class="uk-icon"></span>
          </button>
          <button type="button" @click="onCancel"
            class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
            <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
          </button>
          <!-- <button type="button" @click="onDelete" v-show="hasViewAuth('StockOut', 2)"
            class="sc-button sc-button-danger sc-button-medium">
            <span data-uk-icon="icon: trash" class="uk-icon"></span>
          </button> -->
        </div>
      </div>
      <form>
        <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
          <div class="uk-width-2-3@m uk-child-width-1-2@m uk-grid" data-uk-grid>
            <div style="margin-top: -10px;">
              <client-only>
                <Select2 v-model="formData.inWarehouseId" :options="warehouses" @change="warehouseSelected"
                  :settings="{ 'width': '100%', 'placeholder': 'Depo', 'allowClear': true }"></Select2>
              </client-only>
            </div>
            <div>
              <ScInput v-model="formData.stocktakingDate" :config="{ wrap: true, dateFormat: 'Y.m.d' }" v-flatpickr
                mode="outline">
                <label>Tarih</label>
              </ScInput>
            </div>
          </div>
          <div class="uk-width-2-3@m uk-child-width-1-2@m uk-grid" data-uk-grid style="margin-left: 0px;">
            <ScTextarea v-model="formData.explanation">
              <label>Açıklama</label>
            </ScTextarea>
          </div>
          <br>
          <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
            <div class="uk-grid">
              <div class="uk-width-1-5@l">
                <div class="uk-button-group sc-padding-remove-left" style="height:34px;">
                  <button type="button" @click="showNewStocktakingDetail"
                    class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                    <span data-uk-icon="icon: plus" class="uk-icon"></span>
                  </button>
                  <button v-show="selectedStocktakingDetail && selectedStocktakingDetail.id > 0" type="button"
                    @click="removeStocktakingDetail" class="sc-button sc-button-danger sc-button-small uk-width-expand"
                    style="height:34px;">
                    <span data-uk-icon="icon: trash" class="uk-icon"></span>
                  </button>
                </div>
              </div>
              <div class="uk-width-4-5@l">
                <StocktakingDetail :detail-object="selectedStocktakingDetail" :total-detail-count="details.length"
                  :is-dialog="false" @onDetailSubmit="onDetailSaved" :warehouse-id="formData.inWarehouseId" />
              </div>
            </div>
          </fieldset>
          <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
            <DataTable :value="details" responsiveLayout="scroll" editMode="cell"
              :selection.sync="selectedStocktakingDetail" @row-select="clickDetail" selectionMode="single"
              sortField="lineNumber" :sortOrder="1" class="editable-cells-table" @cell-edit-complete="onCellEditComplete">
              <template #empty>
                <div style="text-align: center;">Hiç kayıt yok.</div>
              </template>
              <Column field="lineNumber" header="#" sortable :style="{ width: '5%', 'max-width': '5%' }"
                :headerStyle="{ width: '5%', 'max-width': '5%' }"></Column>
              <Column field="itemId" header="Stok" :style="{ width: '15%', 'max-width': '15%' }"
                :headerStyle="{ width: '15%', 'max-width': '15%' }">
                <template #editor="slotProps">
                  <client-only>
                    <Select2 v-model="slotProps.data[slotProps.column.field]" :options="itemList"
                      :settings="{ 'width': '100%', 'placeholder': 'Stok', 'allowClear': true }">
                    </Select2>
                  </client-only>
                </template>
                <template #body="slotProps">
                  {{
                    slotProps.data[slotProps.column.field] ? itemList.find(m => m.id ==
                      slotProps.data[slotProps.column.field]).text : ''
                  }}
                </template>
              </Column>
              <Column field="quantity" header="Miktar" :style="{ width: '10%', 'max-width': '10%' }"
                :headerStyle="{ width: '10%', 'max-width': '10%' }">
                <template #editor="slotProps">
                  <InputNumber v-model="slotProps.data[slotProps.column.field]" mode="decimal" :minFractionDigits="2"
                    :maxFracionDigits="2" />
                </template>
              </Column>
            </DataTable>
          </fieldset>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import StocktakingDetail from '~/logical_components/StocktakingDetail.vue'
import { getQS } from '~/composable/useHelpers';
import moment from '~/plugins/moment'

if (process.client) {
  require('~/plugins/inputmask');
}

if (process.client) {
  require('~/plugins/flatpickr');
}

export default {
  name: 'Stocktaking',
  components: {
    Select2: process.client ? () => import('~/components/Select2') : null,
    PrettyCheck,
    ScInput,
    ScTextarea,
    StocktakingDetail,
  },
  data: () => ({
    formData: {
      id: 0,
      stocktakingNo: '0001',
      receiptNo: '0001',
      receiptType: '1000',
      stocktakingType: '1000',
      plantId: null,
      receiptDate: '',
      stocktakingDate: '',
      stocktakingStatus: 0,
      inWarehouseId: "1",
      explanation: "",
      sysUserId: 0
    },
    inItems : [],
    outItems: [],
    isMounting: false,
    details: [],
    warehouses: [],
    itemList: [],
    selectedStocktakingDetail: {
      id: 0,
    },
    bindComplete: false
  }),
  async mounted() {
    this.isMounting = true;
    const qsId = getQS('id');
        if (qsId) this.formData.id = parseInt(qsId);
        else this.formData.id = 0;
    await this.bindModel();
    this.isMounting = false;
  },
  methods: {
    async bindModel() {
      const self = this;
      const api = useApi();
      try {
        const itemData = (await api.get('Item')).data
        const itemStock = (await api.get('Warehouse/ItemStocks')).data

        this.itemList = this.mergeArrays(itemData,itemStock,['id'])
        this.itemList = this.itemList.map((d) => { 
          return { 
            ...d,
            text: d.itemName + " - Aktif Stok: " + (d.totalQuantity >= 0 ? d.totalQuantity : 0),
            itemName: d.itemName,
            quantity: d.totalQuantity >= 0 ? d.totalQuantity : 0
          } 
        })

        const warehouseData = (await api.get('Warehouse')).data;
        if (warehouseData) {
          this.warehouses = warehouseData.map((d) => {
            return {
              ...d,
              text: d.warehouseName,
            };
          })
        }
        this.formData.receiptDate = this.$moment().format('YYYY-MM-DD');
        this.formData.stocktakingDate = this.$moment().format('YYYY-MM-DD');

        const getData = (await api.get('Warehouse/Stocktaking/' + this.formData.id)).data;
          if (getData && getData.id > 0) {
              this.formData = getData;
              this.details = this.formData.details.map((d) => {
                  return {
                      ...d,
                      newRecord: false,
                      item: self.itemList.find(m => m.id == d.itemId),
                  };
              });
              this.formData.stocktakingDate = this.$moment().format('YYYY-MM-DD');
          }
          else {
              this.formData.receiptNo = getData.receiptNo;
              this.details.splice(0, this.details.length);
          }
      } catch (error) {
        console.error(error)
      }
    },
    mergeArrays (...arrays) {
      const keys = arrays.pop();
      const result = {};

      arrays.forEach(array =>
        array.forEach(item => {
          const key = keys.map(i => item[i]).join('-');
          result[key] = item;
        })
      );

      return Object.values(result);
    },
    warehouseSelected(event) {
      this.formData.inWarehouseId = event;
    },
    onCellEditComplete(event) {
      let { data, newValue, field } = event;
      data[field] = newValue;
    },
    onDetailSaved(detailParam) {
      const detailRow = detailParam.data;
      if(this.details.find(d => d.itemId == detailRow.itemId) == null){
        if (detailParam.action == 'save') {
          if (detailRow.id == 0) {
            detailRow.newRecord = true;
            detailRow.id = detailRow.lineNumber;
            this.details.push(detailRow);
            this.showNewStocktakingDetail();
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
      }
      else{
        this.showNotification('Aynı stok birden fazla kez eklenemez', false, 'error');
      }

      this.bindComplete = true
    },
    async onSubmit() {
      var self = this
      this.bindComplete = false
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
          }
        });

        this.formData.details.forEach(element => {
          if(element.status == 0){
            this.outItems.push(element)
          }
          else{
            this.inItems.push(element)
          }
        });
        this.formData.inItems = this.inItems.map((d) => {
          return {
            ...d,
            id: d.newRecord == true ? 0 : d.id,
            stocktakingId: d.newRecord == true ? 0 : d.stocktakingId,
            quantity: d.quantity - d.oldQ,
          }
        });
        this.formData.outItems = this.outItems.map((d) => {
          return {
            ...d,
            id: d.newRecord == true ? 0 : d.id,
            stocktakingId: d.newRecord == true ? 0 : d.stocktakingId,
            quantity: d.oldQ - d.quantity
          }
        });

        if (this.formData.details.length <= 0) {
          this.showNotification('Lütfen en az bir adet malzeme ekleyiniz', false, 'error');
          return;
        }

        const session = useUserSession();
        this.formData.plantId = session.user.plantId;
        const api = useApi();
        const postResult = (await api.post('Warehouse/Stocktaking', this.formData)).data;
        if (postResult.result) {
          this.showNotification('Kayıt başarılı', false, 'success');
          this.formData.id = postResult.recordId;

          this.$router.push('/warehouse/stocktaking/list');
        }
        else
          this.showNotification(postResult.errorMessage, false, 'error');
      } catch (error) {
        this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
        console.error(error)
      }
    },
    onCancel() {
        this.$router.push('/warehouse/stocktaking/list');
    },
    async onDelete() {
      const self = this;
      this.details = [];
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
    },
    removeStocktakingDetail() {
      if (this.selectedStocktakingDetail) {
        const stocktakingIndex = this.details.indexOf(this.selectedStocktakingDetail);
        if (stocktakingIndex > -1) {
          this.details.splice(stocktakingIndex, 1);

          let lineNumber = 1;
          for (let i = 0; i < this.details.length; i++) {
            const row = this.details[i];
            row.lineNumber = lineNumber;
            lineNumber++;
          }

          this.showNewStocktakingDetail();
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
    showNewStocktakingDetail() {
      this.selectedStocktakingDetail = { id: 0 };
    },
    clickDetail: function (e, dt, type, indexes) {
      try {
        this.selectedStocktakingDetail = this.details[indexes[0]];
      } catch (error) {

      }
    },
    deselectDetail: function () {
      this.selectedStocktakingDetail = { id: 0 };
    },
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