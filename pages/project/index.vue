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
												<ScTextarea v-model="formData.explanation" placeholder="Genel Açıklama"></ScTextarea>
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
													<li>
														<a href="javascript:void(0)">
															Mevcut Malzemeler
														</a>
													</li>
												</ul>
											</div>
											<div class="uk-width-3-4"> 
												<ul class="uk-switcher sc-switcher-left">
													<!-- DEMAND LIST CONTENT -->
													<li class="uk-active">
														<div class="sc-padding-medium sc-padding-remove-top">
															<div class="uk-flex-left uk-grid">
																<button type="button" @click="showDemand" class="sc-button sc-button-success sc-button-small uk-margin-small-right">
																	<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
																	Yeni Talep
																</button>
																<hr class="uk-divider-vertical" style="height:35px;" />
																<div class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
																	<button type="button" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
																		Düzenle
																	</button>
																	<button type="button" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
																		Onayla
																	</button>
																	<button type="button" class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																		<span data-uk-icon="icon: ban" class="uk-margin-small-right uk-icon"></span>
																		Reddet
																	</button>
																	<button type="button" class="sc-button sc-button-danger sc-button-small uk-width-1-4" style="height:34px;">
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


																	></Datatable>
																</client-only>
															</div>
														</div>
														
													</li>
													<li>Sipariş içerik</li>
													<li>İrsaliye içerik</li>
													<li>Tüketim içerik</li>
													<li>Mevcut malzemeler içerik</li>
												</ul>
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

		<div id="dlgDemand" class="uk-modal" data-uk-modal>
			<div class="uk-modal-dialog uk-modal-body uk-width-2-3">
				<ItemDemand 
					:record-id="selectedDemandRow.id"
					:project-id="formData.id"
					:is-dialog="true"
					:dialog-container="'dlgDemand'"
				/>
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
import { getQS } from '~/composable/useHelpers';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import moment from '~/plugins/moment'

if(process.client) {
	require('~/plugins/inputmask');	
}

if(process.client) {
	require('~/plugins/flatpickr');
}

export default {
	name: 'FirmForm',
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
			startDate: null,
			deadlineDate: null,
            plantId: null,
			isActive: true,
            projectCategoryId: '',
            firmId: '',
            projectStatus: '0',
		},
		selectedDemandRow: { id:0 },
        categories: [],
		demandList: [],
        firms: [],
		statusList: [
			{ id:'0', text: 'Bekleniyor' },
			{ id:'1', text: 'Çalışılıyor' },
			{ id:'2', text: 'Tamamlandı' },
			{ id:'3', text: 'İptal edildi' },
		],
		dtOptions: {
			select: true,
			searching: false,
			paging: false,
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
			{ data: "demandDate", title: "Tarih", visible: true, },
			{ data: "itemName", title: "Stok Adı", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		]
	}),
	computed: {
		
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

				await bindDemands();
            } catch (error) {
                
            }
        },
		async bindDemands(){
			const api = useApi();
			try {
				const rawData = (await api.get('ItemDemand/OfProject/' + this.formData.id)).data;
				if (rawData){
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
		showDemand(){
			const modalElement = document.getElementById('dlgDemand');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		}
	},
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
	@import "~scss/plugins/datatables";
</style>
