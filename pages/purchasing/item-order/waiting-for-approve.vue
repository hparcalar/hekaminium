<template>
    <div id="sc-page-wrapper">
        <div id="sc-page-content">
            <ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								Onay Bekleyen Siparişler
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
					<div class="uk-grid">
						<div class="uk-width-3-5@m">
							<div class="uk-flex-left uk-grid">
								<div class="uk-button-group sc-padding-remove-left uk-width-expand uk-margin-medium" style="height:34px;">
									<button @click="approveDetails" type="button" class="sc-button sc-button-default sc-button-small uk-width-1-3" style="height:34px;">
										<span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
										Onayla
									</button>
									<button @click="denyDetails" type="button" class="sc-button sc-button-default sc-button-small uk-width-1-3" style="height:34px;">
										<span data-uk-icon="icon: ban" class="uk-margin-small-right uk-icon"></span>
										Reddet
									</button>
								</div>
							</div>
							<client-only>
								<Datatable
									id="sc-dt-purchase-orders-waiting-for-approve-table"
									ref="buttonsTable"
									:data="visualData"
									:options="dtDOptions"
									:customColumns="dtColumns"
									:buttons="true"
									:customEvents="[{ name: 'select', function: clickOrderRow }, { name: 'deselect', function: deselectOrderRow }]"
									@initComplete="dtButtonsInitialized"
								></Datatable>
							</client-only>
						</div>
						<div class="uk-width-2-5@m">
							<h3>
								Talep Detayları
							</h3>
							
                            <!-- GROUPED DEMAND DETAILS DEPEND ON SELECTED ORDER DETAIL -->
                            <div v-if="selectedOrderRow && selectedOrderRow.id > 0" class="uk-overflow-auto" style="max-height:250px;">
                                <div v-for="(demand, demandIndex) in selectedOrderRow.demandConsumes" 
                                :key="demandIndex" style="border:1px solid #888; border-radius:5px;margin:5px;padding:5px;"
                                class="uk-grid">
                                    <div class="uk-width-4-5@m">
                                        <p class="uk-padding-remove uk-margin-remove"><b>Stok:</b> {{ demand.itemName }}</p>
                                        <p class="uk-padding-remove uk-margin-remove"><b>Açıklama:</b> {{ demand.itemExplanation }}</p>
                                        <p class="uk-padding-remove uk-margin-remove"><b>Parça No:</b> {{ demand.partNo }}, <b>Boyut:</b> {{ demand.partDimensions }}, <b>Miktar:</b> {{ demand.demandQuantity }}</p>
                                    </div>
                                    <div class="uk-width-1-5@m">
                                        
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
                    
				</ScCardBody>
			</ScCard>
        </div>
    </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { dateToStr } from '~/composable/useHelpers';
import ScInput from '~/components/Input'

export default {
    name: 'PurchaseOrdersWaitingForApproveList',
    components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		PrettyCheck,
		ScInput,
    },
    data: () => {
		return {
			visualData: [],
			dtColumns: [
                { data: "receiptDate", title: "Tarih", visible: true, type:'date' },
                { data: "receiptNo", title: "Sipariş No", visible: true, },
                { data: "itemName", title: "Stok Adı", visible: true, render: function(data, ev, row) { return data && data.length > 0 ? data : row.itemExplanation; } },
                { data: "quantity", title: "Miktar", visible: true, },
			],
			dtDHeaders: [],
			dtDOptions: {
				select: true,
				"stateSave": false,
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
			},
            selectedOrderRow: { id:0, itemOrderId: 0 },
            selectedOrderIndexes: [],
		}
	},
    computed: {

    },
    async mounted (){
        await this.bindList();
    },
    methods: {
        async bindList(){
            const api = useApi();
            const rawData = (await api.get('ItemOrder/Purchase/WaitingForApprove')).data;

            this.visualData = rawData.map((d) => {
				return {
					...d,
					receiptDate: dateToStr(d.receiptDate),
				}
			});
        },
        dtButtonsInitialized () {
			// append buttons to custom container
			this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
		},
		toggleCol (e, col) {
			var column = this.$refs.buttonsTable.$dt.column(col);
			column.visible(e).draw('page');
		},
        clickOrderRow: function (e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedOrderIndexes.push(selIndex);
            this.selectedOrderRow = this.visualData[selIndex];
        },
		deselectOrderRow: function(e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedOrderIndexes = this.selectedOrderIndexes.filter(d => d != selIndex);
			if (this.selectedOrderIndexes.length > 0){
				this.selectedOrderRow = this.visualData[this.selectedOrderIndexes[0]];
			}
			else
				this.selectedOrderRow = { id:0, itemOrderId: 0 };
		},
        async approveDetails(){
			const self = this;

			UIkit.modal.confirm('Seçilen siparişleri onaylamak istediğinizden emin misiniz?').then(
				async function () {
					const api = useApi();
					try {
						const orderIdList = [];
						for (let i = 0; i < self.selectedOrderIndexes.length; i++) {
							const ordIndex = self.selectedOrderIndexes[i];
							const ordObj = self.visualData[ordIndex];
							orderIdList.push(ordObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemOrder/Purchase/ApproveDetails', orderIdList)).data;
						if (postResult.result){
                            self.selectedOrderIndexes = [];
                            self.selectedOrderRow = { id:0, itemOrderId: 0 };
							self.showNotification('Onay işlemi başarılı.', false, 'success');
							await self.bindList();
						}
						else
							self.showNotification(postResult.errorMessage, false, 'error');
					} catch (error) {
						self.showNotification('Bir hata oluştu.', false, 'error');
					}
			});
		},
		async denyDetails(){
			const self = this;

			UIkit.modal.confirm('Seçilen siparişleri reddetmek istediğinizden emin misiniz?').then(
				async function () {
					const api = useApi();
					try {
						const orderIdList = [];
						for (let i = 0; i < self.selectedOrderIndexes.length; i++) {
							const dmnIndex = self.selectedOrderIndexes[i];
							const dmnObj = self.visualData[dmnIndex];
							orderIdList.push(dmnObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemOrder/Purchase/DenyDetails', orderIdList)).data;
						if (postResult.result){
                            self.selectedOrderIndexes = [];
                            self.selectedOrderRow = { id:0, itemOrderId: 0 };
							self.showNotification('Red işlemi başarılı.', false, 'success');
							await self.bindList();
						}
						else
							self.showNotification(postResult.errorMessage, false, 'error');
					} catch (error) {
						self.showNotification('Bir hata oluştu.', false, 'error');
					}
			});
		},
        showNotification (text, pos, status, persistent) {
			var config = {};
			config.timeout = persistent ? !persistent : 3000;
			if(status) {
				config.status = status;
			}
			if(pos) {
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