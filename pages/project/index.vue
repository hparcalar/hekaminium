<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-2-3@l">
					<div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                         sc-round sc-border md-bg-grey-100
                    ">
						<span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
						<h4 class="md-color-gray-600 uk-margin-remove">
							Proje Tanımı
						</h4>
					</div>
					<div>
							<ul data-uk-tab>
								<li class="uk-active">
									<a href="javascript:void(0)">
										Genel Bilgiler
									</a>
								</li>
								<li>
									<a href="javascript:void(0)">
										Malzeme Yönetimi
									</a>
								</li>
								<li>
									<a href="javascript:void(0)">
										Notlar
									</a>
								</li>
								<li>
									<a href="javascript:void(0)">
										Proje Takvimi
									</a>
								</li>
								<!-- <li class="uk-disabled">
									<a>Disabled</a>
								</li> -->
							</ul>
							<ul class="uk-switcher">
								<li class="uk-active">
									<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
										<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
											<div>
												<ScInput v-model="formData.projectCode">
													<label>Proje Kodu</label>
												</ScInput>
											</div>
											<div>
												<ScInput v-model="formData.projectName">
													<label>Proje Adı</label>
												</ScInput>
											</div>
											
											<div>
												<client-only>
													<Select2
														v-model="formData.projectCategoryId"
														:options="categories"
														:settings="{ 'width': '100%', 'placeholder': 'Kategori', 'allowClear': true }"
													></Select2>
												</client-only>
											</div>
											
											<div>
												<client-only>
													<Select2
														v-model="formData.firmId"
														:options="firms"
														:settings="{ 'width': '100%', 'placeholder': 'Müşteri', 'allowClear': true }"
													></Select2>
												</client-only>
											</div>
											<div>
												<ScInput v-model="formData.startDate" :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr placeholder="Başlama Tarihi" mode="outline"></ScInput>
											</div>
											<div>
												<ScInput v-model="formData.deadlineDate" :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr placeholder="Termin Tarihi" mode="outline"></ScInput>
											</div>
											<div>
												<ScInput v-model="formData.responsiblePerson">
													<label>Firma Yetkilisi</label>
												</ScInput>
											</div>
											<div>
												<client-only>
													<Select2
														v-model="formData.projectStatus"
														:options="statusList"
														:settings="{ 'width': '100%', 'placeholder': 'Proje Durumu', 'allowClear': true }"
													></Select2>
												</client-only>
											</div>
											<div v-if="hasViewAuth('ProjectBudgetView')">
												<ScInput v-model="formData.budget" type="number">
													<label>Proje Bedeli</label>
												</ScInput>
											</div>
										</div>
									</fieldset>
								</li>
								<li>
									<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
										<div class="uk-grid" data-uk-grid>
											<div class="uk-width-1-4">
												<ul class="uk-tab-left" data-uk-tab="connect: .sc-switcher-left">
													<li class="uk-active">
														<a href="javascript:void(0)">
															Malzeme Listesi
														</a>
													</li>
													<li>
														<a href="javascript:void(0)">
															Talepler
														</a>
													</li>
													<li>
														<a href="javascript:void(0)">
															Siparişler
														</a>
													</li>
													<li>
														<a href="javascript:void(0)">
															Satın Alınanlar
														</a>
													</li>
													<li>
														<a href="javascript:void(0)">
															Tüketim Durumu
														</a>
													</li>
												</ul>
											</div>
											<div class="uk-width-3-4"> 
												<ul class="uk-switcher sc-switcher-left">
													<!-- COST ITEM LIST CONTENT -->
													<li class="uk-active">
														<div class="sc-padding-medium sc-padding-remove-top">
															<div class="uk-flex-left uk-grid">
																<button type="button" @click="showNewCostItem" class="sc-button sc-button-success sc-button-small uk-margin-small-right">
																	<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
																	Yeni Kalem
																</button>
																<hr class="uk-divider-vertical" style="height:35px;" />
																<div v-if="selectedCostItemRow && selectedCostItemRow.id > 0" class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
																	<button type="button" @click="showCostItem" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
																		Düzenle
																	</button>
																	<button v-show="selectedCostItemIndexes.length > 0" type="button" class="sc-button sc-button-danger sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
																		Sil
																	</button>
																</div>
																
															</div>
															<div class="uk-margin-medium uk-margin-remove-left">
																<client-only>
																	<Datatable
																		id="sc-dt-cost-items-table"
																		ref="costItemsTable"
																		:data="formData.costItems"
																		:options="dtOptions"
																		:customColumns="dtCostItemCols"
																		:buttons="true"
																		:customEvents="[{ name: 'select', function: clickCostItemRow }, { name: 'deselect', function: deselectCostItemRow }]"
																	></Datatable>
																</client-only>
															</div>
														</div>
													</li>
													<!-- DEMAND LIST CONTENT -->
													<li>
														<div class="sc-padding-medium sc-padding-remove-top">
															<div class="uk-flex-left uk-grid">
																<button type="button" @click="showNewDemand" class="sc-button sc-button-success sc-button-small uk-margin-small-right">
																	<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
																	Yeni Talep
																</button>
																<hr class="uk-divider-vertical" style="height:35px;" />
																<div v-if="hasViewAuth('ItemDemandApproval') && selectedDemandRow && selectedDemandRow.id > 0" class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
																	<button type="button" @click="showDemand" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
																		Düzenle
																	</button>
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
															<div class="uk-margin-medium uk-margin-remove-left">
																<client-only>
																	<Datatable
																		id="sc-dt-buttons-table"
																		ref="buttonsTable"
																		:data="demandList"
																		:options="dtOptions"
																		:customColumns="dtDemandCols"
																		:buttons="true"
																		:customEvents="[{ name: 'select', function: clickDemandRow }, { name: 'deselect', function: deselectDemandRow }]"
																	></Datatable>
																</client-only>
															</div>
														</div>
													</li>
													<li>Sipariş içerik</li>
													<li>İrsaliye içerik</li>
													<li>Tüketim içerik</li>
												</ul>
											</div>
										</div>
									</fieldset>
								</li>
								<li>
									<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
										<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
											<div>
												<ScTextarea v-model="formData.explanation" placeholder="Genel Açıklama"></ScTextarea>
											</div>
											<div>
												<ScTextarea v-model="formData.meetingExplanation" placeholder="Görüşme Sonuçları"></ScTextarea>
											</div>
											<div>
												<ScTextarea v-model="formData.criticalExplanation" placeholder="Kritik Açıklamalar"></ScTextarea>
											</div>
										</div>
									</fieldset>
								</li>
								<li>Proje Takvimi</li>
							</ul>
						</div>
					<form>	
						<div class="uk-margin-large-top">
							<button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
								<span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
								Kaydet
							</button>
							<button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
								<span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
								Vazgeç
							</button>
                            <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-large">
								<span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
								Sil
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<div id="dlgDemand" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ItemDemand v-show="refreshDemandForm == true"
						:record-id="selectedDemandRow.itemDemandId"
						:project-id="formData.id"
						:is-dialog="true"
						:dialog-container="'dlgDemand'"
						@onDemandSaved="bindDemands"
						@onCancel="closeDemandDialog"
					/>
				</div>
			</div>
		</div>

		<div id="dlgCostItem" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					
				</div>
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
import { useApi } from '~/composable/useApi';
import { getQS, dateToStr } from '~/composable/useHelpers';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import moment from '~/plugins/moment'
import { useUserSession } from '~/composable/userSession';

if(process.client) {
	require('~/plugins/inputmask');	
}

if(process.client) {
	require('~/plugins/flatpickr');
}

export default {
	name: 'ProjectForm',
	components: {
		Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
		ItemDemand: process.client ? () => import('~/logical_components/ItemDemand') : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			projectCode: '',
			projectName: '',
            explanation:'',
			responsiblePerson: '',
			meetingExplanation: '',
			criticalExplanation: '',
			startDate: null,
			deadlineDate: null,
			budget: 0,
            plantId: null,
			isActive: true,
            projectCategoryId: '',
            firmId: '',
            projectStatus: '0',
			costItems: [],
		},
		selectedDemandRow: { id:0, itemDemandId: 0 },
		selectedCostItemRow: { id:0 },
		refreshDemandForm: false,
		refreshCostItemForm: false,
        categories: [],
		demandList: [],
		selectedDemandIndexes: [],
		selectedCostItemIndexes: [],
        firms: [],
		statusList: [
			{ id:'0', text: 'Teklif verilecek' },
			{ id:'1', text: 'Teklif verildi' },
			{ id:'2', text: 'Onaylandı' },
			{ id:'3', text: 'Tamamlandı' },
			{ id:'4', text: 'İptal edildi' },
		],
		dtOptions: {
			select: true,
			searching: true,
			paging: true,
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
		dtDemandCols: [
			{ data: "demandDate", title: "Tarih", visible: true, type:'date' },
			{ data: "itemDemandNo", title: "Talep No", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		],
		dtCostItemCols: [
			{ data: "createdDate", title: "Tarih", visible: true, type:'date' },
			{ data: "lineNumber", title: "Sıra No", visible: true, },
			{ data: "costTypeText", title: "Türü", visible: true, },
			{ data: "costName", title: "Açıklama", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "overallTotal", title: "Tutar", visible: true, },
			{ data: "costStatusText", title: "Durum", visible: true, },
		]
	}),
	computed: {
		demandsAreReadyForApprove(){
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if(result){
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.demandList[dmnIndex];
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
					const dmnObj = this.demandList[dmnIndex];
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
					const dmnObj = this.demandList[dmnIndex];
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
	beforeDestroy(){
		UIkit.modal('.uk-modal').$destroy(true);
	},
	async mounted () {
        const qsId = getQS('id');
        if (qsId) this.formData.id = parseInt(qsId);
        else this.formData.id = 0;

		await this.bindModel();
	},
	methods: {
        async bindModel(){
			const self = this;
            const api = useApi();
            try {
                const catData = (await api.get('Project/Category')).data;
                if (catData)
                    this.categories = catData.map((d) => {
                        return {
                            
							id: d.id.toString(),
                            text: d.projectCategoryName,
                        };
                    })

                const firmData = (await api.get('Firm')).data;
                if (firmData)
                    this.firms = firmData.map((d) => {
                        return {
                            
							id: d.id.toString(),
                            text: d.firmName,
                        };
                    });

                const getData = (await api.get('Project/' + this.formData.id)).data;
                if (getData && getData.id > 0){
					if (getData.startDate && getData.startDate.length > 0){
						getData.startDate = self.$moment(getData.startDate).format('YYYY-MM-DD');
					}
					if (getData.deadlineDate && getData.deadlineDate.length > 0){
						getData.deadlineDate = self.$moment(getData.deadlineDate).format('YYYY-MM-DD');
					}

					getData.firmId = getData.firmId == null ? '' : getData.firmId.toString();
					getData.projectStatus = getData.projectStatus == null ? '0' : getData.projectStatus.toString();
					getData.projectCategoryId = getData.projectCategoryId == null ? '' : getData.projectCategoryId.toString();

                    this.formData = getData;
                }
				else{
					this.formData = {
						id: 0,
						projectCode: '',
						projectName: '',
						explanation:'',
						responsiblePerson: '',
						startDate: null,
						deadlineDate: null,
						budget: 0,
						plantId: null,
						isActive: true,
						projectCategoryId: '',
						firmId: '',
						projectStatus: '0',
						costItems: [],
					};
				}

				await this.bindDemands();
            } catch (error) {
                console.log(error);
            }
        },
		async bindDemands(){
			const api = useApi();
			try {
				const rawData = (await api.get('ItemDemand/OfProject/' + this.formData.id)).data;
				if (rawData){
					for (let i = 0; i < rawData.length; i++) {
						const row = rawData[i];
						row.demandDate = dateToStr(row.demandDate);
					}
					this.demandList = rawData;
				}
				else
					this.demandList = [];
			} catch (error) {
				
			}
		},
		async onSubmit(){
            try {
				const postData = this.formData;
				postData.firmId = postData.firmId.length == 0 ? null : parseInt(postData.firmId);
				postData.projectStatus = postData.projectStatus.length == 0 ? 0 : parseInt(postData.projectStatus);
				postData.projectCategoryId = postData.projectCategoryId.length == 0 ? null : parseInt(postData.projectCategoryId);

                const api = useApi();
                const postResult = (await api.post('Project', postData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;

					this.$router.go(-1);
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        onCancel(){
            this.$router.push('/project/list');
        },
        async onDelete(){

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
		showNewDemand(){
			this.selectedDemandRow = { id:0, itemDemandId: 0 };
			this.showDemand();
		},
		showDemand(){
			this.refreshDemandForm = false;
			setTimeout(() => { this.refreshDemandForm = true; }, 100);

			const modalElement = document.getElementById('dlgDemand');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		showNewCostItem(){
			this.selectedCostItemRow = { id:0 };
			this.showCostItem();
		},
		showCostItem(){
			this.refreshCostItemForm = false;
			setTimeout(() => { this.refreshCostItemForm = true; }, 100);

			const modalElement = document.getElementById('dlgCostItem');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		closeDemandDialog(){
			const modalElement = document.getElementById('dlgDemand');
			UIkit.modal(modalElement).hide();
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
							const dmnObj = self.demandList[dmnIndex];
							demandIdList.push(dmnObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemDemand/ApproveDetails', demandIdList)).data;
						if (postResult.result){
							self.showNotification('Onay işlemi başarılı.', false, 'success');
							await self.bindDemands();
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
							const dmnObj = self.demandList[dmnIndex];
							demandIdList.push(dmnObj.id);
						}

						const api = useApi();
						const postResult = (await api.post('ItemDemand/DenyDetails', demandIdList)).data;
						if (postResult.result){
							self.showNotification('Red işlemi başarılı.', false, 'success');
							await self.bindDemands();
						}
						else
							self.showNotification(postResult.errorMessage, false, 'error');
					} catch (error) {
						self.showNotification('Bir hata oluştu.', false, 'error');
					}
			});
		},
		hasViewAuth(sectionKey){
			const session = useUserSession();
			return session.checkAuthSection(sectionKey);
		},
		clickDemandRow: function (e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedDemandIndexes.push(selIndex);
            this.selectedDemandRow = this.demandList[selIndex];
        },
		deselectDemandRow: function(e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedDemandIndexes = this.selectedDemandIndexes.filter(d => d != selIndex);
			if (this.selectedDemandIndexes.length > 0){
				this.selectedDemandRow = this.demandList[this.selectedDemandIndexes[0]];
			}
			else
				this.selectedDemandRow = { id:0, itemDemandId: 0 };
		},
		clickCostItemRow: function (e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedCostItemIndexes.push(selIndex);
            this.selectedCostItemRow = this.formData.costItems[selIndex];
        },
		deselectCostItemRow: function(e, dt, type, indexes){
			const selIndex = indexes[0];
			this.selectedCostItemIndexes = this.selectedCostItemIndexes.filter(d => d != selIndex);
			if (this.selectedCostItemIndexes.length > 0){
				this.selectedCostItemRow = this.formData.costItems[this.selectedCostItemIndexes[0]];
			}
			else
				this.selectedCostItemRow = { id:0 };
		}
	},
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
	@import "~scss/plugins/datatables";
</style>
