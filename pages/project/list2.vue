<template>
  <div id="sc-page-wrapper">
    <div id="sc-page-content">
      <ScCard class="uk-margin-top">
        <ScCardHeader separator>
          <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
            <div class="uk-flex-1">
              <ScCardTitle>
                Projeler
                <button type="button" @click="newRecord" v-show="this.hasViewAuth('ProjectManagement')"
                  class="sc-button sc-button-small uk-margin-small-left">
                  <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
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
              <div class="uk-dropdown uk-width-small" data-uk-drop="mode: click">
                <div class="sc-padding-small">
                  <div v-for="(checkbox, index) in dtDHeaders" :key="index" class="uk-margin-small">
                    <PrettyCheck class="p-icon" :value="index" :checked="checkbox.checked" :disabled="checkbox.disabled"
                      @change="toggleCol($event, index)">
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
          <client-only>
            <h2>Dynamic</h2>
            <DataTable :value="projects" showGridlines responsiveLayout="scroll">
              <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>Paging</h2>
            <DataTable :value="projects" :paginator="true" :rows="5" responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 50]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
              <Column field='projectCode' header='Proje Kodu' sortable></Column>
              <Column field='projectName' header='Proje Adı'></Column>
              <Column field='projectCategoryName' header='Kategorisi'></Column>
              <Column field='firmName' header='Müşteri'></Column>
              <Column field='quantity' header='Proje Adedi'></Column>
              <Column field='forexName' header='Döviz Cinsi'></Column>
              <Column field='totalCost' header='Maliyet (TL)'></Column>
              <Column field='totalForexCost' header='Maliyet (Döviz)'></Column>
              <Column field='profitRate' header='Kar Marjı (%)'></Column>
              <Column field='offerPrice' header='Bedeli (TL)'></Column>
              <Column field='offerForexPrice' header='Bedeli (Döviz)'></Column>
              <Column field='projectStatusText' header='Durum'></Column>
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
              </template>
              <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
              </template>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>Select</h2>
            <DataTable :value="projects" :paginator="true" :rows="5" responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 50]" :selection.sync="selectedProject" dataKey="id"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" @row-select="onRowSelect"
              @row-unselect="onRowUnselect">
              <Column selectionMode="single" :headerStyle="{ 'width': '3em' }"></Column>
              <Column field='projectCode' header='Proje Kodu' sortable></Column>
              <Column field='projectName' header='Proje Adı'></Column>
              <Column field='projectCategoryName' header='Kategorisi'></Column>
              <Column field='firmName' header='Müşteri'></Column>
              <Column field='quantity' header='Proje Adedi'></Column>
              <Column field='forexName' header='Döviz Cinsi'></Column>
              <Column field='totalCost' header='Maliyet (TL)'></Column>
              <Column field='totalForexCost' header='Maliyet (Döviz)'></Column>
              <Column field='profitRate' header='Kar Marjı (%)'></Column>
              <Column field='offerPrice' header='Bedeli (TL)'></Column>
              <Column field='offerForexPrice' header='Bedeli (Döviz)'></Column>
              <Column field='projectStatusText' header='Durum'></Column>
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
              </template>
              <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
              </template>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>Row edit</h2>
            <DataTable :value="projects" :paginator="true" :rows="5" responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 50]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
              editMode="row" :editingRows.sync="editingRows" @row-edit-save="onRowEditSave">
              <Column field='projectCode' header='Proje Kodu' sortable>
                <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
              </Column>
              <Column field='projectName' header='Proje Adı'>
                <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" />
                </template>
              </Column>
              <Column field='projectCategoryName' header='Kategorisi'></Column>
              <Column field='firmName' header='Müşteri'></Column>
              <Column field='quantity' header='Proje Adedi'></Column>
              <Column field='forexName' header='Döviz Cinsi'></Column>
              <Column field='totalCost' header='Maliyet (TL)'></Column>
              <Column field='totalForexCost' header='Maliyet (Döviz)'></Column>
              <Column field='profitRate' header='Kar Marjı (%)'></Column>
              <Column field='offerPrice' header='Bedeli (TL)'></Column>
              <Column field='offerForexPrice' header='Bedeli (Döviz)'></Column>
              <Column field='projectStatusText' header='Durum'></Column>
              <Column :rowEditor="true" :styles="{ width: '10%', 'min-width': '8rem' }"
                :bodyStyle="{ 'text-align': 'center' }"></Column>
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
              </template>
              <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
              </template>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>Cell Edit</h2>
            <DataTable :value="projects" editMode="cell" @cell-edit-complete="onCellEditComplete"
              class="editable-cells-table" responsiveLayout="scroll">
              <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"
                :styles="{ width: '25%' }">
                <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
              </Column>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>Cell Edit 2</h2>
            <h5>Only Project Code And Project Name Editable</h5>
            <DataTable :value="projects" :paginator="true" :rows="5" responsiveLayout="scroll"
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 50]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
              editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table">
              <Column field='projectCode' header='Proje Kodu' sortable>
                <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
              </Column>
              <Column field='projectName' header='Proje Adı'>
                <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" />
                </template>
              </Column>
              <Column field='projectCategoryName' header='Kategorisi'></Column>
              <Column field='firmName' header='Müşteri'></Column>
              <Column field='quantity' header='Proje Adedi'></Column>
              <Column field='forexName' header='Döviz Cinsi'></Column>
              <Column field='totalCost' header='Maliyet (TL)'></Column>
              <Column field='totalForexCost' header='Maliyet (Döviz)'></Column>
              <Column field='profitRate' header='Kar Marjı (%)'></Column>
              <Column field='offerPrice' header='Bedeli (TL)'></Column>
              <Column field='offerForexPrice' header='Bedeli (Döviz)'></Column>
              <Column field='projectStatusText' header='Durum'></Column>
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
              </template>
              <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
              </template>
            </DataTable>

            <br>
            <hr>
            <br>

            <h2>New - Delete - Export Options</h2>

            <div class="card">
              <Toolbar class="mb-4">
                <template #start>
                  <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                  <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected"
                    :disabled="selectedProject == null" />
                </template>

                <template #end>
                  <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import"
                    class="mr-2 inline-block" />
                  <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)" />
                </template>
              </Toolbar>

              <DataTable ref="dt" :value="projects" :selection.sync="selectedProject" dataKey="id" :paginator="true"
                :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                responsiveLayout="scroll">
                <Column selectionMode="single" :styless="{ width: '3rem' }" :exportable="false"></Column>
                <Column field="projectCode" header="Proje Kodu" :sortable="true">
                  <template #editor="slotProps">
                    <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
                  </template>
                </Column>
                <Column field='projectName' header='Proje Adı'>
                  <template #editor="slotProps">
                    <InputText v-model="slotProps.data[slotProps.column.field]" />
                  </template>
                </Column>
                <Column :exportable="false" :styles="{ 'min-width': '8rem' }">
                  <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2"
                      @click="editProduct(slotProps.data)" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"
                      @click="confirmDeleteProduct(slotProps.data)" />
                  </template>
                </Column>
              </DataTable>
            </div>
          </client-only>
        </ScCardBody>
      </ScCard>
    </div>
  </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';

export default {
  name: 'ProjectList',
  components: {
    //Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
    PrettyCheck,
  },
  data: () => {
    return {
      projects: null,
      columns: null,
      selectedProject: null,
      selectedProjects: null,
      editingRows: [],
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      project: {},
      submitted: false,

      visualData: [],
      dtColumns: [
        { data: "projectCode", title: "Proje Kodu", visible: true, },
        { data: "projectName", title: "Proje Adı", width: "40%", visible: true, },
        { data: "projectCategoryName", title: "Kategorisi", width: "18%", visible: true, },
        { data: "firmName", title: "Müşteri", width: "22%", visible: true, },
        { data: "quantity", title: "Proje Adedi", visible: true, },
        { data: "forexName", title: "Döviz Cinsi", visible: false, },
        { data: "totalCost", title: "Maliyet (TL)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.totalCost); } },
        { data: "totalForexCost", title: "Maliyet (Döviz)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.totalForexCost); } },
        { data: "profitRate", title: "Kar Marjı %", visible: false, },
        { data: "offerPrice", title: "Bedeli (TL)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.offerPrice); } },
        { data: "offerForexPrice", title: "Bedeli (Döviz)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.offerForexPrice); } },
        { data: "projectStatusText", title: "Durum", visible: true, },
      ],
      dtDHeaders: [],
      dtDOptions: {
        autoWidth: false,
        "order": [[0, 'desc']],
        pageLength: 25,
        select: true,
        "stateSave": false,
        // stateSaveCallback (settings, data) {
        // 	localStorage.setItem( 'projectListTableView', JSON.stringify(data) )
        // },
        // stateLoadCallback (settings) {
        // 	const dtState = JSON.parse( localStorage.getItem( 'projectListTableView' ) );
        // 	return dtState;
        // },
        buttons: [
          // {
          // 	extend: "copyHtml5",
          // 	className: "sc-button",
          // 	text: 'Kopyala'
          // },
          // {
          // 	extend: "csvHtml5",
          // 	className: "sc-button",
          // 	text: 'CSV '
          // },
          {
            extend: "excelHtml5",
            className: "sc-button",
            text: 'Excel '
          },
          {
            extend: "pdfHtml5",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-file-pdf md-color-red-800"></i>'
          },
          {
            extend: "print",
            className: "sc-button sc-button-icon",
            text: '<i class="mdi mdi-printer"></i>',
            title: 'Yazdır',
            autoPrint: true
          }
        ]
      }
    }
  },
  beforeMount() {
    const costCol = this.dtColumns.find(d => d.data == 'forexName');
    if (costCol) {
      costCol.visible = this.hasViewAuth('ProjectBudgetView');
    }

    const budgetCol = this.dtColumns.find(d => d.data == 'offerForexPrice');
    if (budgetCol) {
      budgetCol.visible = this.hasViewAuth('ProjectBudgetView');
    }

    const budgetColLocal = this.dtColumns.find(d => d.data == 'offerPrice');
    if (budgetColLocal) {
      budgetColLocal.visible = this.hasViewAuth('ProjectBudgetView');
    }

    const profitCol = this.dtColumns.find(d => d.data == 'profitRate');
    if (profitCol) {
      profitCol.visible = this.hasViewAuth('ProjectBudgetView');
    }

    const totalCostCol = this.dtColumns.find(d => d.data == 'totalForexCost');
    if (totalCostCol) {
      totalCostCol.visible = this.hasViewAuth('ProjectBudgetView');
    }

    const totalCostColLocal = this.dtColumns.find(d => d.data == 'totalCost');
    if (totalCostColLocal) {
      totalCostColLocal.visible = this.hasViewAuth('ProjectBudgetView');
    }
  },
  async mounted() {
    let targetUri = 'Project';
    if (!this.hasViewAuth('ProjectManagement'))
      targetUri = 'Project/AfterCreated';

    const api = useApi();
    const rawData = (await api.get(targetUri)).data.map((d) => {
      return {
        ...d,
        totalCost: d.totalCost * d.quantity,
        totalForexCost: d.totalForexCost * d.quantity,
        offerForexPrice: d.offerForexPrice * d.quantity,
        offerPrice: d.offerPrice * d.quantity,
      }
    });

    this.visualData = rawData;
    this.projects = rawData;
  },
  created() {
    this.columns = [
      { field: 'projectCode', header: 'Proje Kodu' },
      { field: 'projectName', header: 'Proje Adı' },
      { field: 'projectCategoryName', header: 'Kategorisi' },
      { field: 'firmName', header: 'Müşteri' },
      { field: 'quantity', header: 'Proje Adedi' },
      { field: 'forexName', header: 'Döviz Cinsi' },
      { field: 'totalCost', header: 'Maliyet (TL)' },
      { field: 'totalForexCost', header: 'Maliyet (Döviz)' },
      { field: 'profitRate', header: 'Kar Marjı (%)' },
      { field: 'offerPrice', header: 'Bedeli (TL)' },
      { field: 'offerForexPrice', header: 'Bedeli (Döviz)' },
      { field: 'projectStatusText', header: 'Durum' }
    ];
    
  },
  methods: {
    dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));

      // const ls = JSON.parse( localStorage.getItem( 'projectListTableView' ) );
      // this.$refs.buttonsTable.headers.forEach( (value, i) => {
      // 	this.dtDHeaders.push({
      // 		'name': value,
      // 		checked: ls.columns[i].visible,
      // 		disabled: i === 0
      // 	})
      // });
    },
    toggleCol(e, col) {
      var column = this.$refs.buttonsTable.$dt.column(col);
      column.visible(e).draw('page');
    },
    clickDetail: function (e, dt, type, indexes) {
      this.$router.push('/project?id=' + this.visualData[indexes[0]].id);
    },
    newRecord() {
      this.$router.push('/project');
    },
    hasViewAuth(sectionKey) {
      if (process.client) {
        const session = useUserSession();
        if (session && session.checkAuthSection)
          return session.checkAuthSection(sectionKey);
      }

      return false;
    },
    onRowSelect(event) {
      this.showNotification('Seçilen Proje: ' + this.selectedProject.projectName, 'bottom-right', 'success', true);
    },
    onRowUnselect(event) {
      this.showNotification('Seçim Kaldırıldı', 'bottom-right', 'success', true);
    },
    onRowEditSave(event) {
      let { newData, index } = event;

      this.projects[index] = newData;
    },
    onCellEditComplete(event) {
      let { data, newValue, field } = event;
      if (newValue.trim().length > 0)
        data[field] = newValue;
      else
        event.preventDefault();
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