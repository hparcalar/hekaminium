<template>
  <div class="uk-flex-center uk-grid" data-uk-grid>
    <div class="uk-width-3-3@l">
      <div class="uk-margin-medium uk-margin-remove-left">
        <table class="uk-table uk-table-striped uk-table-responsive uk-table-small" style="width:100%">
          <thead>
            <tr>
              <th class="uk-text-nowrap">
                #
              </th>
              <th class="uk-text-nowrap">
                Tarih
              </th>
              <th class="uk-text-nowrap">
                Termin
              </th>
              <th class="uk-text-nowrap">
                İrsaliye No
              </th>
              <th class="uk-text-nowrap">
                Tedarikçi
              </th>
              <th class="uk-text-nowrap">
                Stok / Açıklama
              </th>
              <th class="uk-text-nowrap">
                Miktar
              </th>
            </tr>
          </thead>

          <tr v-for="item in details" :key="item.id">
            <td>
              <!-- <PrettyCheck name="isSelected"
                  v-model="item.isSelected" class="p-icon" size="xl">
                  <i slot="extra" class="icon mdi mdi-check"></i>
              </PrettyCheck> -->
              <button type="button" @click="expandReceiptDetail(item)"
                class="sc-button sc-button-default sc-button-small uk-margin-small-right">
                <span :data-uk-icon="'icon:' + (item.expanded ? 'minus' : 'plus')" class="uk-icon"></span>
              </button>
              <hr>
              <button type="button" @click="selectReceipt(item)"
                class="sc-button sc-button-default sc-button-small uk-margin-small-right">
                <span> {{ item.isSelected ? "Çıkar" : "Ekle" }} </span>
              </button>
            </td>
            <td v-if="item.expanded" colspan="6">
              <h6>{{ item.receiptNo }} : {{ item.firmName }}</h6>
              <table class="uk-table uk-table-striped uk-table-responsive uk-table-small" style="width:100%">
                <thead>
                  <tr>
                    <!-- <th class="uk-text-nowrap">
                      SEÇ
                    </th> -->
                    <th class="uk-text-nowrap">
                      Stok Adı
                    </th>
                    <th class="uk-text-nowrap">
                      Parça Kodu
                    </th>
                    <th class="uk-text-nowrap">
                      Boyutlar
                    </th>
                    <th class="uk-text-nowrap">
                      Açıklama
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="item.id" :class="{'selected-detail': item.isSelected}">
                      <!-- <td>
                          <PrettyCheck name="isSelected"
                              v-model="item.isSelected" class="p-icon">
                              <i slot="extra" class="icon mdi mdi-check"></i>
                          </PrettyCheck>
                      </td> -->
                      <td>{{ item.itemName }}</td>
                      <td>{{ item.partNo }}</td>
                      <td>{{ item.partDimensions }}</td>
                      <td>{{ item.itemExplanation }}</td>
                  </tr>
              </tbody>
              </table>
            </td>
            <td v-if="!item.expanded">{{ fDateToStr(item.receiptDate) }}</td>
            <td v-if="!item.expanded">{{ fDateToStr(item.deadlineDate) }}</td>
            <td v-if="!item.expanded">{{ item.receiptNo }}</td>
            <td v-if="!item.expanded">{{ item.firmName }}</td>
            <td v-if="!item.expanded">{{ item.itemName }}</td>
            <td v-if="!item.expanded">{{ item.quantity }}</td>
          </tr>
        </table>
      </div>
      <div v-show="isDialog == true" class="uk-margin-large-top">
        <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
          <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
          Aktar
        </button>
        <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
          <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
          Kapat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import PrettyCheck from 'pretty-checkbox-vue/check';
import ItemDemandDetail from './ItemDemandDetail.vue';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { dateToStr } from '~/composable/useHelpers';

if (process.client) {
  require('~/plugins/inputmask');
}

export default {
  name: 'OpenReceiptList',
  emits: ['onReceiptsSelected', 'onCancel'],
  props: {
    isDialog: {
      type: Boolean,
      default: false,
    },
    firmId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    Select2: process.client ? () => import('~/components/Select2') : null,
    ScInput,
    ScTextarea,
    PrettyRadio,
    PrettyCheck
  },
  data: () => ({
    details: [],
    selectedReceiptIndexes: [],
    dtOptions: {
      select: true,
      searching: true,
      paging: true,
    },
    dtDetailCols: [
      { data: "receiptDate", title: "Tarih", visible: true, type: 'date', render: function (data, ev, row) { return dateToStr(row.receiptDate); } },
      { data: "deadlineDate", title: "Termin", visible: true, type: 'date', render: function (data, ev, row) { return dateToStr(row.deadlineDate); } },
      { data: "receiptNo", title: "Sipariş No", visible: true, },
      { data: "firmName", title: "Tedarikçi", visible: true, },
      { data: "itemName", title: "Stok Adı", visible: true, },
      { data: "itemExplanation", title: "Açıklama", visible: true, },
      { data: "partNo", title: "Parça Kodu", visible: true, },
      { data: "partDimensions", title: "Boyutlar", visible: true, },
      { data: "quantity", title: "Miktar", visible: true, },
    ],
  }),
  computed: {
  },
  async mounted() {
    await this.bindModel();
  },
  methods: {
    async bindModel() {
      const api = useApi();
      try {
        const prmFirmId = this.firmId;
        this.details = (await api.get('Invoice/OpenDetails')).data
          .filter(d => d.firmId == prmFirmId) 
          .map((d) => {
            return {
              ...d,
              expanded: false,
              /* demandConsumes: d.demandConsumes.map(m => {
                  return {
                      ...m,
                      isSelected: false,
                  }
              }) */
            };
          });
      } catch (error) {

      }
    },
    fDateToStr(dateObj) {
      return dateToStr(dateObj);
    },
    onSubmit() {
      const submittedDetails = [];

      for (let i = 0; i < this.details.length; i++) {
        const receiptDetail = this.details[i];
        if (receiptDetail && receiptDetail.isSelected == true) {
          const selectedDetails = receiptDetail;
          
            const consuming = selectedDetails;
            submittedDetails.push({
              ...consuming,
            });
          
        }
      }

      if (submittedDetails.length == 0) {
        this.showNotification('Aktarmak için detay(lar) seçmelisiniz.', false, 'warning');
        return;
      }

      this.$emit('onReceiptsSelected', submittedDetails);
    },
    onCancel() {
      if (this.isDialog)
        this.$emit('onCancel');
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
    clickReceiptRow: function (e, dt, type, indexes) {
      const selIndex = indexes[0];
      this.selectedReceiptIndexes.push(selIndex);
    },
    deselectReceiptRow: function (e, dt, type, indexes) {
      const selIndex = indexes[0];
      this.selectedReceiptIndexes = this.selectedReceiptIndexes.filter(d => d != selIndex);
    },
    expandReceiptDetail(item) {
      if (!item.expanded){
        item.expanded = true;
      }
      else{
        item.expanded = !item.expanded;
      }
    },
    selectReceipt(item){
      if (item.isSelected) {
        item.isSelected = false;
        item.expanded = !item.expanded;
        item.expanded = !item.expanded;
      }
      else {
        item.isSelected = true;
        item.expanded = !item.expanded;
        item.expanded = !item.expanded;
      }
    }
  },
  watch: {
    firmId: {
      handler: async function (o, n) {
        await this.bindModel();
      }
    }
  }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
@import "~scss/plugins/datatables";
</style>
<style type="text/csss">
.selected-detail {
  background-color: rgba(17, 191, 72, 0.5) !important;
}
</style>
