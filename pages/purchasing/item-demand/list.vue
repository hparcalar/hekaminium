<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Satın Alma Talepleri
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
              sortField="receiptDate" :sortOrder="-1"
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
                Hiç talep yok.
            </template>
            <template #loading>
                Yükleniyor. Lütfen bekleyiniz.
            </template>
              <Column field="receiptDate" header="Tarih" sortable >
                <template #body="slotProps">
                    {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
                </template>
              </Column>
              <Column field="lastUpdateDate" header="G. Tarihi" sortable >
                <template #body="slotProps">
                    {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
                </template>
              </Column>
              <Column field="receiptNo" header="Talep No" sortable :style="{width:'5%'}" :headerStyle="{width: '5%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="projectName" header="Proje" sortable :style="{width:'20%'}" :headerStyle="{width: '20%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="explanation" header="Açıklama" sortable :style="{width:'20%'}" :headerStyle="{width: '20%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="userName" header="Oluşturan" sortable :style="{width:'10%'}" :headerStyle="{width: '10%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="isContractedText" header="Türü" sortable :style="{width:'5%'}" :headerStyle="{width: '5%'}">
                <template #filter="{filterModel, filterCallback}">
                  <InputText v-model="filterModel.value" @input="filterCallback()" />
                </template>
              </Column>
              <Column field="demandStatus" header="Durum" sortable>
                <template #body="{data}">
                    <span :class="'demand-badge status-' + data.demandStatus">{{data.statusText}}</span>
                </template>
                <template #filter="{filterModel, filterCallback}">
                    <client-only>
                        <Select2
                            v-model="filterModel.value"
                            @change="filterCallback"
                            :options="statusList"
                            :settings="{ 'width': '100%', 'placeholder': 'Durum', 'allowClear': true }"
                        ></Select2>
                    </client-only>
                </template>
              </Column>
          </DataTable>

          <!-- <client-only>
            <Datatable
              id="sc-dt-demands-list-table"
              ref="buttonsTable"
              :data="visualData"
              :options="dtDOptions"
              :customColumns="dtColumns"
              :buttons="true"
              :customEvents="[{ name: 'select', function: clickDetail }]"
              @initComplete="dtButtonsInitialized"
            ></Datatable>
          </client-only> -->
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
  name: "DemandList",
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
      lastUpdateDate: null,
      filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        // id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        // receiptDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        // lastUpdateDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        receiptNo: { value: null, matchMode: FilterMatchMode.CONTAINS },
        userName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        isContractedText: { value: null, matchMode: FilterMatchMode.CONTAINS },
        projectName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        explanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        demandStatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      dtColumns: [
        { data: "receiptDate", title: "Tarih", type: "date", visible: true },
        { data: "lastUpdateDate", title: "Son Güncellenme Tarihi", type: "date", visible: true, width: "10%"},
        { data: "receiptNo", title: "Talep No", visible: true },
        { data: "projectName", title: "Proje", visible: true },
        { data: "explanation", title: "Açıklama", visible: true },
        { data: "userName", title: "Oluşturan", visible: true },
        {
          data: "isContracted",
          title: "Türü",
          visible: true,
          render: function (data, ev, row) {
            return row && row.isContracted ? "Fason" : "-";
          },
        },
        { data: "statusText", title: "Durum", visible: true },
      ],
      statusList: [
        { text: 'Onay bekliyor', id: 0 },
        { text: 'Onaylandı', id: 1 },
        { text: 'Sipariş oluşturuldu', id: 2 },
        { text: 'Sipariş teslim alındı', id: 3 },
        { text: 'İptal edildi', id: 4 },
        { text: 'Teklif bekleniyor', id: 5 },
        { text: 'Sipariş iletildi', id: 6 },
        { text: 'Kısmi teslim alındı', id: 7 },
      ],
      dtDHeaders: [],
      dtDOptions: {
        select: true,
        stateSave: false,
        rowCallback: function (row, data, index) {
          if (data.isContracted == true) {
            $("td", row).addClass("bg-warning");
          }
        },
        pageLength: 50,
        order: [[2, "dsc"]],
        buttons: [
          {
            extend: "excelHtml5",
            className: "sc-button",
            text: "Excel ",
          },
          {
            extend: "pdfHtml5",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>',
          },
          {
            extend: "print",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-printer"></i>',
            title: "Yazdır",
            autoPrint: true,
          },
        ],
      },
    };
  },
  async mounted() {
    const api = useApi();
    const self = this;
    const rawData = (await api.get("ItemDemand")).data;
		const tmpList = rawData.map((d) => {
      return {
        ...d,
        isContractedText: d.isContracted ? 'Fason' : '-',
        // receiptDate: dateToStr(d.receiptDate),
        // lastUpdateDate: d.lastUpdateDate!=null ? self.$moment(d.lastUpdateDate).format('DD.MM.YYYY'): "-",
      };
    });

    this.visualData = tmpList.filter(d => d.projectName !== null && d.projectName !== "");

    if (this.$refs.buttonsTable) {
      // this.$refs.buttonsTable.$dt.state().clear()
      // console.log(this.$refs.buttonsTable);
      // console.log(this.$refs.buttonsTable.$dt.state().clear());
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
    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt
        .buttons()
        .container()
        .appendTo(document.getElementById("sc-dt-buttons"));

      // const ls = JSON.parse( localStorage.getItem( 'demandListTableView' ) );
      // this.$refs.buttonsTable.headers.forEach( (value, i) => {
      // 	this.dtDHeaders.push({
      // 		'name': value,
      // 		checked: ls.columns[i].visible,
      // 		disabled: i === 0
      // 	})
      // });
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
        "/purchasing/item-demand?id=" + event.data.id
      );
    },
    clickDetail: function (e, dt, type, indexes) {
      this.$router.push(
        "/purchasing/item-demand?id=" + this.visualData[indexes[0]].id
      );
    },
    newRecord() {
      this.$router.push("/purchasing/item-demand");
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
