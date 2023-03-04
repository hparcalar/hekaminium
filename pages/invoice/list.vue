<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Faturalar
                <button
                  type="button"
                  @click="newRecord"
                  class="sc-button sc-button-small uk-margin-small-left"
                  v-show="hasViewAuth('Demand',1)"
                >
                  <span
                    data-uk-icon="icon: plus"
                    class="uk-margin-small-right uk-icon"
                  ></span>
                  Yeni
                </button>
              </ScCardTitle>
            </div>
            <div class="uk-width-auto@s">
              <div id="sc-dt-buttons"></div>
            </div>
            <div class="uk-width-auto@s">
              <!-- <button class="sc-button sc-button-primary sc-button-flex" type="button">
								Sütun Seç <i class="mdi mdi-chevron-down uk-margin-small-left"></i>
							</button> -->
              <div
                class="uk-dropdown uk-width-small"
                data-uk-drop="mode: click"
              >
                <div class="sc-padding-small">
                  <div
                    v-for="(checkbox, index) in dtDHeaders"
                    :key="index"
                    class="uk-margin-small"
                  >
                    <PrettyCheck
                      class="p-icon"
                      :value="index"
                      :checked="checkbox.checked"
                      :disabled="checkbox.disabled"
                      @change="toggleCol($event, index)"
                    >
                      <i slot="extra" class="icon mdi mdi-check"></i>
                      {{ checkbox.name }}
                    </PrettyCheck>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScCardHeader>
        <ScCardBody>
          <DataTable :value="visualData" responsiveLayout="scroll"
              @row-select="onRowSelect"
              columnResizeMode="fit"
              dataKey="id"
              :paginator="true" showGridlines :rows="13" :filters.sync="filterGeneral"
              selectionMode="single" filterDisplay="row"
              sortField="receiptNo" :sortOrder="-1"
              :globalFilterFields="['receiptDate','lastUpdateDate','receiptNo','projectName','explanation','userName', 'statusText']"
              >
              <template #header>
                <div class="flex justify-content-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined" @click="clearGeneralFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
                    </span>
                </div>
            </template>
            <template #empty>
                Hiç fatura kaydı yok.
            </template>
            <template #loading>
                Yükleniyor. Lütfen bekleyiniz.
            </template>
              <Column field="receiptNo" header="Fatura No" sortable :style="{width:'10%'}" :headerStyle="{width: '10%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <!-- <Column field="receiptType" header="Fatura Türü" sortable :style="{width:'15%'}" :headerStyle="{width: '15%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column> -->
              <Column field="receiptDate" header="Tarih" sortable :style="{width:'10%'}" :headerStyle="{width: '10%'}">
                <template #body="slotProps">
                    {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
                </template>
              </Column>
              <Column field="firmName" header="Firma" sortable :style="{width:'15%'}" :headerStyle="{width: '15%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="explanation" header="Açıklama" sortable :style="{width:'20%'}" :headerStyle="{width: '20%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="eInvoiceStatus" header="Fatura Durumu" sortable :style="{width:'10%'}" :headerStyle="{width: '10%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="invoiceTypeText" header="Fatura Türü" sortable :style="{width:'15%'}" :headerStyle="{width: '15%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
          </DataTable>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import PrettyCheck from "pretty-checkbox-vue/check";
import { useApi } from "~/composable/useApi";
import { dateToStr } from "~/composable/useHelpers";
import {FilterMatchMode,FilterOperator} from 'primevue/api/';
import moment from '~/plugins/moment'
import { useUserSession } from "~/composable/userSession";

export default {
  name: "InvoiceList",
  components: {
    Datatable: process.client
      ? () => import("~/components/datatables/Datatables")
      : null,
    PrettyCheck,
    Select2: process.client ? () => import('~/components/Select2') : null,
  },
  data: () => {
    return {
      visualData: [],
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        receiptNo: { value: null, matchMode: FilterMatchMode.CONTAINS },
        receiptType: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firmName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        explanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        eInvoiceStatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
        invoiceTypeText: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  async mounted() {
    const api = useApi();
    const rawData = (await api.get("Invoice/List/1")).data;
		if(rawData){
      this.visualData = rawData;
    }
  },
  methods: {
    clearGeneralFilter(){
      this.filterGeneral.global.value = null;
    },
    hasViewAuth(sectionKey,authCode){
			if (process.client){
				const session = useUserSession();
				if (session && session.checkAuthSection)
					return session.checkAuthSection(sectionKey, authCode);
			}
			return false;
		},
    convertDateToStr(prm){
            return dateToStr(prm)
        },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw("page");
    },
    onRowSelect(event){
      this.$router.push(
        "/invoice?id=" + event.data.id
      );
    },
    newRecord() {
      this.$router.push("/invoice");
    },
  },
};
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import "~scss/vue/_pretty_checkboxes";
</style>
<style type="text/css">
.bg-warning {
  background-color: #ebd810;
}
.demand-badge{padding:5px; border-radius:3px; border:1px solid #afafaf; font-weight: bold;}
.status-0{ background-color:white; }
.status-1{ background-color: lightblue; }
.status-2{ background-color:lightblue; }
.status-3{ background-color: greenyellow; }
.status-4{ background-color: red; }
.status-7{ background-color: green; }
.status-6{ background-color: orange; }
</style>
