<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Stok Sayım Fişleri
                <button type="button" @click="newRecord" v-show="hasViewAuth('OfferOrderReceipt', 1)"
                  class="sc-button sc-button-small uk-margin-small-left">
                  <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                  Yeni
                </button>
              </ScCardTitle>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <DataTable :value="visualData" responsiveLayout="scroll" @row-select="onRowSelect" columnResizeMode="fit"
            dataKey="id" :paginator="true" showGridlines :rows="20" :filters.sync="filterGeneral" selectionMode="single"
            filterDisplay="row" sortField="stocktakingNo" :sortOrder="-1"
            :globalFilterFields="['stocktakingDate', 'stocktakingNo', 'explanation', 'warehouseName', 'username']">
            <template #header>
              <div class="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined"
                  @click="clearGeneralFilter()" />
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
                </span>
              </div>
            </template>
            <template #empty>
              Hiç sayım fişi yok.
            </template>
            <template #loading>
              Yükleniyor. Lütfen bekleyiniz.
            </template>
            <Column field="stocktakingDate" header="Tarih" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="stocktakingNo" header="Sayım No" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ (slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="explanation" header="Açıklama" sortable :style="{ width: '20%' }" :headerStyle="{ width: '20%' }">
              <template #body="slotProps">
                {{ (slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="warehouseName" header="Depo Adı" sortable :style="{ width: '10%' }"
              :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ (slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
            <Column field="username" header="Kullanıcı" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
              <template #body="slotProps">
                {{ (slotProps.data[slotProps.column.field]) }}
              </template>
            </Column>
          </DataTable>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { dateToStr } from '~/composable/useHelpers';
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import { useUserSession } from "~/composable/userSession";

export default {
  name: 'PurchaseItemReceiptList',
  components: {
    PrettyCheck,
    Select2: process.client ? () => import('~/components/Select2') : null,
  },
  data: () => {
    return {
      visualData: [],
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        // id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        // receiptDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        // lastUpdateDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //receiptNo: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //firmName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //userName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //isContractedText: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //projectName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //explanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        //receiptStatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    }
  },
  async mounted() {
    const api = useApi();
    const rawData = (await api.get('Warehouse/Stocktaking')).data;
    const userData = (await api.get("User")).data;

    this.visualData = rawData.map((d) => {
      return {
        ...d,
        //receiptDate: dateToStr(d.receiptDate),
        username: d.sysUserId != null ? userData.find(x => x.id == d.sysUserId).userName : "",
      };
    });

  },
  methods: {
    clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
    convertDateToStr(prm) {
      return dateToStr(prm)
    },
    onRowSelect(event) {
      this.$router.push(
        "/warehouse/stocktaking?id=" + event.data.id
      );
    },
    hasViewAuth(sectionKey, authCode) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey, authCode);
      }
      return false;
    },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw('page');
    },
    clickDetail: function (e, dt, type, indexes) {
      this.$router.push('/warehouse/stocktaking?id=' + this.visualData[indexes[0]].id);
    },
    newRecord() {
      this.$router.push('/warehouse/stocktaking');
    }
  }
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';
</style>
<style type="text/css">
.bg-warning {
  background-color: #ebd810;
}
</style>