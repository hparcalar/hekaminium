<template>
    <div id="sc-page-wrapper">
        <div id="sc-page-content">
            <ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								Onay Bekleyen Talepler
							</ScCardTitle>
						</div>
						<div class="uk-width-auto@s">
							<div id="sc-dt-buttons"></div>
						</div>
                        <div class="uk-width-auto@s">
							<button class="sc-button sc-button-primary sc-button-flex" type="button">
								Sütun Seç <i class="mdi mdi-chevron-down uk-margin-small-left"></i>
							</button>
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
                    <div class="uk-flex-left uk-grid">
                        <div class="uk-button-group sc-padding-remove-left uk-width-expand uk-margin-medium" style="height:34px;">
                            <button v-show="demandsAreReadyForApprove" @click="approveDetails" type="button" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
                                <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                                Onayla
                            </button>
                            <button v-show="demandsAreReadyForDeny" @click="denyDetails" type="button" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
                                <span data-uk-icon="icon: ban" class="uk-margin-small-right uk-icon"></span>
                                Reddet
                            </button>
                            <button v-show="demandsAreReadyForDelete" type="button" class="sc-button sc-button-danger sc-button-small uk-width-1-4" style="height:34px;">
                                <span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
                                Sil
                            </button>
                        </div>
                    </div>
					<client-only>
						<Datatable
							id="sc-dt-demands-waiting-for-approve-table"
							ref="buttonsTable"
							:data="visualData"
							:options="dtDOptions"
                            :customColumns="dtColumns"
							:buttons="true"
                            :customEvents="[{ name: 'select', function: clickDemandRow }, { name: 'deselect', function: deselectDemandRow }]"
							@initComplete="dtButtonsInitialized"
						></Datatable>
					</client-only>
				</ScCardBody>
			</ScCard>
        </div>
    </div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';

export default {
    name: 'DemandsWaitingForApproveList',
    components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		PrettyCheck
    },
    data: () => {
		return {
			visualData: [],
			dtColumns: [
                { data: "demandDate", title: "Tarih", visible: true, type:'date' },
                { data: "itemDemandNo", title: "Talep No", visible: true, },
                { data: "projectName", title: "Proje Adı", visible: true, },
                { data: "itemName", title: "Stok Adı", visible: true, },
                { data: "quantity", title: "Miktar", visible: true, },
                { data: "statusText", title: "Durum", visible: true, },
			],
			dtDHeaders: [],
			dtDOptions: {
				select: true,
				"stateSave": true,
				stateSaveCallback (settings, data) {
					localStorage.setItem( 'demandForApprovalListTableView', JSON.stringify(data) )
				},
				stateLoadCallback (settings) {
					const dtState = JSON.parse( localStorage.getItem( 'demandForApprovalListTableView' ) );
					return dtState;
				},
				buttons: [
					{
						extend: "copyHtml5",
						className: "sc-button",
						text: 'Kopyala'
					},
					{
						extend: "csvHtml5",
						className: "sc-button",
						text: 'CSV '
					},
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
            selectedDemandRow: { id:0, itemDemandId: 0 },
            selectedDemandIndexes: [],
		}
	},
    computed: {
        demandsAreReadyForApprove(){
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if(result){
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.visualData[dmnIndex];
					if (dmnObj.demandStatus != 0 && dmnObj.demandStatus != 4)
					{
						result = false;
						break;
					}
				}
			}

			return result;
		},
		demandsAreReadyForDeny(){
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if(result){
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.visualData[dmnIndex];
					if (dmnObj.demandStatus >= 2)
					{
						result = false;
						break;
					}
				}
			}

			return result;
		},
		demandsAreReadyForDelete(){
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if(result){
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.visualData[dmnIndex];
					if (dmnObj.demandStatus >= 2 && dmnObj.demandStatus != 4)
					{
						result = false;
						break;
					}
				}
			}

			return result;
		},
    },
    async mounted (){
        await this.bindList();
    },
    methods: {
        async bindList(){
            const api = useApi();
            const rawData = (await api.get('ItemDemand/WaitingForApprove')).data;

            this.visualData = rawData;
        },
        dtButtonsInitialized () {
			// append buttons to custom container
			this.$refs.buttonsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));

            const ls = JSON.parse( localStorage.getItem( 'demandForApprovalListTableView' ) );
			this.$refs.buttonsTable.headers.forEach( (value, i) => {
				this.dtDHeaders.push({
					'name': value,
					checked: ls.columns[i].visible,
					disabled: i === 0
				})
			});
		},
		toggleCol (e, col) {
			var column = this.$refs.buttonsTable.$dt.column(col);
			column.visible(e).draw('page');
		},
        clickDemandRow: function (e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedDemandIndexes.push(selIndex);
            this.selectedDemandRow = this.visualData[selIndex];
        },
		deselectDemandRow: function(e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedDemandIndexes = this.selectedDemandIndexes.filter(d => d != selIndex);
			if (this.selectedDemandIndexes.length > 0){
				this.selectedDemandRow = this.visualData[this.selectedDemandIndexes[0]];
			}
			else
				this.selectedDemandRow = { id:0, itemDemandId: 0 };
		},
        async approveDetails(){
			const self = this;

			UIkit.modal.confirm('Seçilen talepleri onaylamak istediğinizden emin misiniz?').then(
				async function () {
					const api = useApi();
					try {
						const demandIdList = [];
						for (let i = 0; i < self.selectedDemandIndexes.length; i++) {
							const dmnIndex = self.selectedDemandIndexes[i];
							const dmnObj = self.visualData[dmnIndex];
							demandIdList.push(dmnObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemDemand/ApproveDetails', demandIdList)).data;
						if (postResult.result){
                            self.selectedDemandIndexes = [];
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

			UIkit.modal.confirm('Seçilen talepleri reddetmek istediğinizden emin misiniz?').then(
				async function () {
					const api = useApi();
					try {
						const demandIdList = [];
						for (let i = 0; i < self.selectedDemandIndexes.length; i++) {
							const dmnIndex = self.selectedDemandIndexes[i];
							const dmnObj = self.visualData[dmnIndex];
							demandIdList.push(dmnObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemDemand/DenyDetails', demandIdList)).data;
						if (postResult.result){
                            self.selectedDemandIndexes = [];
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