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
					<DataTable :value="visualData" responsiveLayout="scroll"
						v-on:filter="onFilter"
						ref="dtable"
						@row-select="clickDetail"
						columnResizeMode="fit"
						dataKey="id"
						:paginator="true" showGridlines :rows="13" :filters.sync="filterGeneral"
						selectionMode="single" filterDisplay="row"
						sortField="projectCode" :sortOrder="-1"
						:globalFilterFields="['projectCode','projectName','projectCategoryName','firmName','quantity','forexName', 'totalCost','totalForexCost','profitRate','offerPrice','offerForexPrice','projectStatusText']"
						>
						<template #header>
							<div style="float:right;text-align:right;">
								<Button icon="pi pi-external-link" label="Dışarı Aktar" @click="exportToCsv($event)" />
							</div>
							<div class="flex justify-content-between">
								<Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined" @click="clearGeneralFilter()" />
								<span class="p-input-icon-left">
									<i class="pi pi-search" />
									<InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
								</span>
							</div>
						</template>
						<template #empty>
							Hiç proje yok.
						</template>
						<template #loading>
							Yükleniyor. Lütfen bekleyiniz.
						</template>
						<Column field="projectCode" header="Proje Kodu" sortable>
							<template #filter="{filterModel, filterCallback}">
								<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="projectName" header="Proje Adı" sortable :style="{width: '20%'}" :headerStyle="{width: '20%'}">
							<template #filter="{filterModel, filterCallback}">
								<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="projectCategoryName" header="Kategori" sortable>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="firmName" header="Müşteri" sortable :style="{width: '10%'}" :headerStyle="{width: '10%'}">
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="quantity" header="Proje Adedi" sortable>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="forexName" header="Döviz" sortable>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="totalCost" header="Maliyet (TL)" sortable>
							<template #body="slotProps">
								{{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
							</template>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="totalForexCost" header="Maliyet (Dvz)" sortable>
							<template #body="slotProps">
								{{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
							</template>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="profitRate" header="Kar Marjı (%)" sortable>
							<template #body="slotProps">
								{{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
							</template>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="offerPrice" header="Bedel (TL)" sortable>
							<template #body="slotProps">
								{{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
							</template>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column v-if="hasViewAuth('ProjectBudgetView')" field="offerForexPrice" header="Bedel (Dvz)" sortable>
							<template #body="slotProps">
								{{ convertNumberToStr(slotProps.data[slotProps.column.field]) }}
							</template>
							<template #filter="{filterModel, filterCallback}">
							<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="projectStatus" header="Durum" sortable>
							<template #body="{data}">
								<span :class="'project-badge status-' + data.projectStatus">{{data.projectStatusText}}</span>
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
						<ColumnGroup type="footer" v-if="hasViewAuth('ProjectBudgetView')">
							<Row>
								<Column footer="Toplam: " :colspan="6" :footerStyle="{'text-align': 'right'}"></Column>
								<Column :footer="sumTotalCost" />
								<Column :footer="sumForexTotalCost" />
								<Column footer="" />
								<Column :footer="sumOfferPrice" />
								<Column :footer="sumOfferForexPrice" />
								<Column footer="" />
							</Row>
						</ColumnGroup>
					</DataTable>
					<!-- <client-only>
						<Datatable id="sc-dt-buttons-table" ref="buttonsTable" :data="visualData" :options="dtDOptions"
							:customColumns="dtColumns" :buttons="true" :customEvents="[{ name: 'select', function: clickDetail }]"
							@initComplete="dtButtonsInitialized"
							:show-summary="true" :summary-items="['totalCost', 'offerPrice', 'offerForexPrice', 'totalForexCost']"
							></Datatable>
					</client-only> -->
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { numberToStr } from '~/composable/useHelpers';
import {FilterMatchMode,FilterOperator} from 'primevue/api/';

export default {
	name: 'ProjectList',
	components: {
		// Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		PrettyCheck,
		Select2: process.client ? () => import('~/components/Select2') : null,
	},
	data: () => {
		return {
			filteredData: [],
			visualData: [],
			sumTotalCost: 0,
			sumForexTotalCost: 0,
			sumOfferPrice: 0,
			sumOfferForexPrice: 0,
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
				{ data: "offerPrice", title: "Bedeli (TL)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.offerPrice * row.quantity); } },
				{ data: "offerForexPrice", title: "Bedeli (Döviz)", visible: false, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.offerForexPrice * row.quantity); } },
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
			},
			filterGeneral: {
				global: { value: null, matchMode: FilterMatchMode.CONTAINS },
				projectCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
				projectName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				projectCategoryName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				firmName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				quantity: { value: null, matchMode: FilterMatchMode.CONTAINS },
				forexName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				totalCost: { value: null, matchMode: FilterMatchMode.CONTAINS },
				totalForexCost: { value: null, matchMode: FilterMatchMode.CONTAINS },
				profitRate: { value: null, matchMode: FilterMatchMode.CONTAINS },
				offerPrice: { value: null, matchMode: FilterMatchMode.CONTAINS },
				offerForexPrice: { value: null, matchMode: FilterMatchMode.CONTAINS },
				projectStatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
			},
			statusList: [
				{ id:0, text:'Oluşturuldu' },
				{ id:1, text:'Teklif verilecek' },
				{ id:2, text:'Teklif verildi' },
				{ id:3, text:'Onaylandı' },
				{ id:4, text:'Tamamlandı' },
				{ id:5, text:'İptal edildi' }
			]
		}
	},
	computed: {
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
				offerForexPrice: d.offerForexPrice,
				offerPrice: d.offerPrice,
			}
		});

		this.visualData = rawData;
	},
	methods: {
		onFilter(event){
			this.filteredData = event.filteredValue;

			// calculate summaries
			let sum = 0;
			if (this.filteredData && this.filteredData.length > 0){
				sum = this.filteredData.map((d) => d.totalCost).reduce((a,b) => a + b);
			}
			else
				sum = 0;
			this.sumTotalCost = this.convertNumberToStr(sum);

			sum = 0;
			if (this.filteredData && this.filteredData.length > 0){
				sum = this.filteredData.map((d) => d.totalForexCost).reduce((a,b) => a + b);
			}
			else
				sum = 0;
			this.sumForexTotalCost = this.convertNumberToStr(sum);

			sum = 0;
			if (this.filteredData && this.filteredData.length > 0){
				sum = this.filteredData.map((d) => d.offerPrice).reduce((a,b) => a + b);
			}
			else
				sum = 0;
			this.sumOfferPrice = this.convertNumberToStr(sum);

			sum = 0;
			if (this.filteredData && this.filteredData.length > 0){
				sum = this.filteredData.map((d) => d.offerForexPrice).reduce((a,b) => a + b);
			}
			else
				sum = 0;
			this.sumOfferForexPrice = this.convertNumberToStr(sum);
		},
		exportToCsv(){
			console.log(this.$refs.dtable);
			// this.$refs.dtable.exportCSV();
		},
		convertNumberToStr(number){
			return numberToStr(number);
		},
		toggleCol(e, col) {
			var column = this.$refs.buttonsTable.$dt.column(col);
			column.visible(e).draw('page');
		},
		clickDetail: function (event) {
			this.$router.push('/project?id=' + event.data.id);
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
	}
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';

.project-badge{padding:5px; border-radius:3px; border:1px solid #afafaf; font-weight: bold; }
.status-0{ background-color:white; }
.status-1{ background-color: orange; }
.status-2{ background-color:lightblue; }
.status-3{ background-color: rgb(84, 167, 240); }
.status-4{ background-color: greenyellow; }
.status-5{ background-color: red; }
</style>