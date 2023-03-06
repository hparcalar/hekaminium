<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								Satın Alma Teklifleri
								<button type="button" @click="newRecord" v-show="hasViewAuth('OfferOrderReceipt',1)"
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
					<!-- <client-only>
						<Datatable
							id="sc-dt-purchase-offers-list-table"
							ref="buttonsTable"
							:data="visualData"
							:options="dtDOptions"
                            :customColumns="dtColumns"
							:buttons="true"
                            :customEvents="[{ name: 'select', function: clickDetail }]"
							@initComplete="dtButtonsInitialized"
						></Datatable>
					</client-only> -->
					<DataTable :value="visualData" responsiveLayout="scroll" @row-select="onRowSelect" columnResizeMode="fit"
						dataKey="id" :paginator="true" showGridlines :rows="13" :filters.sync="filterGeneral" selectionMode="single"
						filterDisplay="row" sortField="receiptDate" :sortOrder="-1"
						:globalFilterFields="['receiptDate', 'lastUpdateDate', 'receiptNo', 'projectName', 'explanation', 'userName', 'offerStatus']">
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
							Hiç teklif yok.
						</template>
						<template #loading>
							Yükleniyor. Lütfen bekleyiniz.
						</template>
						<Column field="receiptDate" header="Tarih" sortable :style="{ width: '7%' }" :headerStyle="{ width: '7%' }">
							<template #body="slotProps">
								{{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
							</template>
						</Column>
						<Column field="receiptNo" header="Teklif No" sortable :style="{ width: '7%' }" :headerStyle="{ width: '7%' }">
							<template #body="slotProps">
								{{ (slotProps.data[slotProps.column.field]) }}
							</template>
						</Column>
						<Column field="firmName" header="Firma" sortable :style="{ width: '20%' }" :headerStyle="{ width: '20%' }">
							<template #filter="{ filterModel, filterCallback }">
								<InputText v-model="filterModel.value" @input="filterCallback()" />
							</template>
						</Column>
						<Column field="explanation" header="Açıklama" sortable :style="{ width: '20%' }" :headerStyle="{ width: '20%' }">
							<template #body="slotProps">
								{{ (slotProps.data[slotProps.column.field]) }}
							</template>
						</Column>
						<Column field="offerStatus" header="Durum" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
							<template #body="{ data }">
								<span :class="'demand-badge status-' + data.offerStatus">{{ data.statusText }}</span>
							</template>
							<template #filter="{ filterModel, filterCallback }">
								<client-only>
									<Select2 v-model="filterModel.value" @change="filterCallback" :options="statusList"
										:settings="{ 'width': '100%', 'placeholder': 'Durum', 'allowClear': true }"></Select2>
								</client-only>
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
import { useUserSession } from "~/composable/userSession";
import { FilterMatchMode, FilterOperator } from 'primevue/api/';

export default {
	name: 'PurchaseOffersList',
	components: {
		Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
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
				// receiptNo: { value: null, matchMode: FilterMatchMode.CONTAINS },
				firmName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				// projectName: { value: null, matchMode: FilterMatchMode.CONTAINS },
				// explanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
				offerStatus: { value: null, matchMode: FilterMatchMode.CONTAINS },
			},
			dtColumns: [
				{ data: "receiptDate", title: "Tarih", type: 'date', visible: true, },
				{ data: "receiptNo", title: "Teklif No", visible: true, },
				{ data: "firmName", title: "Firma", visible: true, },
				{ data: "explanation", title: "Açıklama", visible: true, },
				{ data: "statusText", title: "Durum", visible: true, },
			],
			statusList: [
				{ text: 'Teklif oluşturuldu', id: 0 },
				{ text: 'Sipariş verildi', id: 3 },
			],
			dtDHeaders: [],
			dtDOptions: {
				select: true,
				"stateSave": false,
				rowCallback: function (row, data, index) {
					if (data.isContracted == true) {
						$('td', row).addClass("bg-warning");
					}
				},
				pageLength: 50,
				order: [[1, 'dsc']],
				buttons: [
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
	async mounted() {
		const api = useApi();
		const rawData = (await api.get('ItemOffer/List/1')).data;

		this.visualData = rawData.map((d) => {
			return {
				...d,
				//receiptDate: dateToStr(d.receiptDate),
			};
		});

	},
	methods: {
		clearGeneralFilter() {
			this.filterGeneral.global.value = null;
		},
		dtButtonsInitialized() {
			// append buttons to custom container
			this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));

			// const ls = JSON.parse( localStorage.getItem( 'offerListTableView' ) );
			// this.$refs.buttonsTable.headers.forEach( (value, i) => {
			// 	this.dtDHeaders.push({
			// 		'name': value,
			// 		checked: ls.columns[i].visible,
			// 		disabled: i === 0
			// 	})
			// });
		},
		convertDateToStr(prm) {
			return dateToStr(prm)
		},
		onRowSelect(event) {
			const routeData = this.$router.resolve("/purchasing/item-offer?id=" + event.data.id);
      		window.open(routeData.href, '_blank');
		},
		hasViewAuth(sectionKey,authCode){
				if (process.client){
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
			this.$router.push('/purchasing/item-offer?id=' + this.visualData[indexes[0]].id);
		},
		newRecord() {
			this.$router.push('/purchasing/item-offer');
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