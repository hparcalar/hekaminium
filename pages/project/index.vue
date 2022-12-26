<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-3-3@l">
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
									Servis
								</a>
							</li>
							<li>
								<a href="javascript:void(0)">
									Dosyalar
								</a>
							</li>
							<li v-if="hasViewAuth('ProjectManagement')">
								<a href="javascript:void(0)">
									Teklif Dökümanı
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
												<Select2 v-model="formData.projectCategoryId" :options="categories"
													:settings="{ 'width': '100%', 'placeholder': 'Kategori', 'allowClear': true }"></Select2>
											</client-only>
										</div>

										<div>
											<client-only>
												<Select2 v-model="formData.firmId" :options="firms"
													:settings="{ 'width': '100%', 'placeholder': 'Müşteri', 'allowClear': true }"></Select2>
											</client-only>
										</div>
										<div>
											<ScInput v-model="formData.startDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
												mode="outline">
												<label>Başlama Tarihi</label>
											</ScInput>
										</div>
										<div>
											<ScInput v-model="formData.deadlineDate" :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr
												mode="outline">
												<label>Termin Tarihi</label>
											</ScInput>
										</div>
										<div>
											<ScInput v-model="formData.responsiblePerson">
												<label>Firma Yetkilisi</label>
											</ScInput>
										</div>
										<div>
											<ScInput v-model="formData.quantity" type="number">
												<label>Proje Adedi</label>
											</ScInput>
										</div>
										<div v-show="hasViewAuth('ProjectManagement')">
											<client-only v-if="!formData.cloudDocId || formData.cloudDocId.length <= 0">
												<Select2 v-model="formData.offerType" :options="offerTypeList"
													:settings="{ 'width': '100%', 'placeholder': 'Teklif Türü', 'allowClear': true }">
												</Select2>
											</client-only>
											<span v-else>Teklif Türü: {{ formData.offerType == '1' ? 'Heka' : 'Butan' }}</span>
										</div>
									</div>
								</fieldset>
							</li>
							<li>
								<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
									<div class="uk-grid" data-uk-grid>
										<div class="uk-width-1-4@l">
											<ul class="uk-tab-left" data-uk-tab="connect: .sc-switcher-left">
												<li class="uk-active">
													<a href="javascript:void(0)">
														İhtiyaç Listesi
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
														Teslim Alınanlar
													</a>
												</li>
												<li>
													<a href="javascript:void(0)">
														Tüketim Durumu
													</a>
												</li>
											</ul>
										</div>
										<div class="uk-width-3-4@l">
											<ul class="uk-switcher sc-switcher-left">
												<!-- COST ITEM LIST CONTENT -->
												<li class="uk-active">
													<div class="sc-padding-medium sc-padding-remove-top">
														<div class="uk-flex-left uk-grid">
															<button type="button" @click="showNewCostItem"
																class="sc-button sc-button-success sc-button-small uk-margin-small-right">
																<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
																Yeni Kalem
															</button>
															<hr class="uk-divider-vertical" style="height:35px;" />
															<div v-show="selectedCostItemRow && selectedCostItemRow.id > 0"
																class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
																<button type="button" @click="showCostItem"
																	class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																	<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
																	Düzenle
																</button>
																<button v-show="selectedCostItemIndexes.length > 0" @click="deleteCostItem"
																	type="button" class="sc-button sc-button-danger sc-button-small uk-width-1-4"
																	style="height:34px;">
																	<span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
																	Sil
																</button>
															</div>

														</div>
														<div class="uk-margin-medium uk-margin-remove-left">
															<div class="uk-width-auto@s" style="position: relative; float:right;">
																<div id="sc-dt-buttons"></div>
															</div>
															<client-only>
																<Datatable id="sc-dt-cost-items-table" ref="costItemsTable" :data="formData.costItems"
																	:options="dtOptions" :customColumns="dtCostItemCols" :buttons="true"
																	@initComplete="dtButtonsInitialized"
																	:customEvents="[{ name: 'select', function: clickCostItemRow }, { name: 'deselect', function: deselectCostItemRow }]">
																</Datatable>
															</client-only>
														</div>
														<div class="uk-grid">
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="fTotalForexCost" :read-only="true">
																	<label>Toplam Maliyet (Döviz)</label>
																</ScInput>
															</div>
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="fTotalCost" :read-only="true">
																	<label>Toplam Maliyet (TL)</label>
																</ScInput>
															</div>
															<div class="uk-width-2-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="formData.profitRate" @change="calculateTotal" type="number">
																	<label>Kar Marjı(%)</label>
																</ScInput>
															</div>
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<client-only>
																	<Select2 v-model="formData.forexId" :options="forexList" @change="updateLiveForexRate"
																		:settings="{ 'width': '100%', 'placeholder': 'Döviz Cinsi', 'allowClear': true }">
																		<label>Döviz Cinsi</label></Select2>
																</client-only>
															</div>
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="formData.forexRate" @change="calculateForexTotal" type="number">
																	<label>Döviz Kuru</label>
																</ScInput>
															</div>
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="fOfferForexPrice" @change="calculateLocalTotal">
																	<label>Döviz Bedeli</label>
																</ScInput>
															</div>
															<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																<ScInput v-model="fOfferPrice" @change="calculateForexTotal">
																	<label>TL Bedeli</label>
																</ScInput>
															</div>
														</div>
														<!-- <div class="uk-margin-small uk-margin-remove-left uk-align-right">
																<span v-show="hasViewAuth('ProjectBudgetView')" class="uk-label uk-text-bold">Toplam Tutar: {{ totalOfCostItems }}</span>
															</div> -->
													</div>
												</li>
												<!-- DEMAND LIST CONTENT -->
												<li>
													<div class="sc-padding-medium sc-padding-remove-top">
														<div class="uk-flex-left uk-grid">
															<button v-show="formData.projectStatus == 3" type="button" @click="showNewDemand"
																class="sc-button sc-button-success sc-button-small uk-margin-small-right">
																<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
																Yeni Talep
															</button>
															<hr class="uk-divider-vertical" style="height:35px;" />
															<div
																v-show="hasViewAuth('ItemDemandApproval') && selectedDemandRow && selectedDemandRow.id > 0"
																class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
																<button type="button" @click="showDemand"
																	class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																	<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
																	Düzenle
																</button>
																<button v-show="demandsAreReadyForApprove" @click="approveDetails" type="button"
																	class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																	<span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
																	Onayla
																</button>
																<button v-show="demandsAreReadyForDeny" @click="denyDetails" type="button"
																	class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
																	<span data-uk-icon="icon: ban" class="uk-margin-small-right uk-icon"></span>
																	Reddet
																</button>
																<button v-show="demandsAreReadyForDelete" type="button"
																	class="sc-button sc-button-danger sc-button-small uk-width-1-4" style="height:34px;">
																	<span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
																	Sil
																</button>
															</div>

														</div>
														<div class="uk-margin-medium uk-margin-remove-left">
															<div class="uk-width-auto@s" style="position: relative; float:right;">
																<div id="sc-dt-buttonsDemand"></div>
															</div>
															<client-only>
																<Datatable id="sc-dt-buttons-table" ref="demandListTable" :data="demandList"
																	:options="dtOptions" :customColumns="dtDemandCols" :buttons="true"
																	@initComplete="dtButtonsInitialize"
																	:customEvents="[{ name: 'select', function: clickDemandRow }, { name: 'deselect', function: deselectDemandRow }]">
																</Datatable>
															</client-only>
														</div>
													</div>
												</li>
												<!-- ORDER LIST CONTENT -->
												<li>
													<div class="sc-padding-medium sc-padding-remove-top">
														<div class="uk-margin-medium uk-margin-remove-left">
															<div class="uk-width-auto@s" style="position: relative; float:right;">
																<div id="sc-dt-buttonsOrder"></div>
															</div>
															<client-only>
																<Datatable id="sc-dt-orders-table" ref="orderListTable" :data="orderList"
																	:options="dtOptions" :customColumns="dtOrderCols" :buttons="true"
																	@initComplete="dtButtonsInitializeOrder"
																	:show-summary="true" :summary-items="['overallTotal', 'forexOverallTotal']"
																	:customEvents="[{ name: 'select', function: clickOrderRow }]">
																</Datatable>
															</client-only>
														</div>
													</div>
												</li>
												<!-- RECEIPT LIST CONTENT -->
												<li>
													<div class="sc-padding-medium sc-padding-remove-top">
														<div class="uk-margin-medium uk-margin-remove-left">
															<div class="uk-width-auto@s" style="position: relative; float:right;">
																<div id="sc-dt-buttonsReceipt"></div>
															</div>
															<!-- :show-summary="true" :summary-items="['overallTotal', 'forexOverallTotal']" -->
															<client-only>
																<Datatable id="sc-dt-receipts-table" ref="receiptsListTable" :data="receiptList"
																	:options="dtOptionsReceipt" :customColumns="dtReceiptCols" :buttons="true"
																	@initComplete="dtButtonsReceiptInitialize"
																	:customEvents="[{ name: 'select', function: clickReceiptRow }]">
																</Datatable>
															</client-only>
															<div class="uk-grid">
																<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																	<ScInput v-model="totalReceiptsLocal" :read-only="true">
																		<label>Toplam Tutar (TL)</label>
																	</ScInput>
																</div>
																<div class="uk-width-1-2" v-show="hasViewAuth('ProjectBudgetView')">
																	<ScInput v-model="totalReceiptsForex" :read-only="true">
																		<label>Toplam Tutar (Döviz)</label>
																	</ScInput>
																</div>
															</div>
														</div>
													</div>
												</li>
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
											<ScTextarea v-model="formData.explanation">
												<label>Genel Açıklama</label>
											</ScTextarea>
										</div>
										<div>
											<ScTextarea v-model="formData.meetingExplanation">
												<label>Görüşme Sonuçları</label>
											</ScTextarea>
										</div>
										<div>
											<ScTextarea v-model="formData.criticalExplanation">
												<label>Kritik Açıklamalar</label>
											</ScTextarea>
										</div>
									</div>
								</fieldset>
							</li>
							<li>
								<!-- SERVICE LIST CONTENT -->
								<div class="sc-padding-medium sc-padding-remove-top">
									<div class="uk-flex-left uk-grid">
										<div v-show="selectedServiceRow && selectedServiceRow.id > 0"
											class="uk-button-group sc-padding-remove-left uk-width-expand" style="height:34px;">
											<button type="button" @click="showService"
												class="sc-button sc-button-default sc-button-small uk-width-1-4" style="height:34px;">
												<span data-uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
												Görüntüle
											</button>
											<button v-show="selectedServiceIndexes.length > 0" @click="deleteService" type="button"
												class="sc-button sc-button-danger sc-button-small uk-width-1-4" style="height:34px;">
												<span data-uk-icon="icon: trash" class="uk-margin-small-right uk-icon"></span>
												Sil
											</button>
										</div>
									</div>
									<div class="uk-margin-medium uk-margin-remove-left">
										<client-only>
											<Datatable id="sc-dt-services-table" ref="serviceTable" :data="serviceList" :options="dtOptions"
												:customColumns="dtServiceCols" :buttons="true"
												:customEvents="[{ name: 'select', function: clickServiceRow }, { name: 'deselect', function: deselectServiceRow }]">
											</Datatable>
										</client-only>
									</div>

								</div>
							</li>
							<li>
								<!-- ATTACHMENTS LIST -->
								<div class="sc-padding-medium sc-padding-remove-top">
									<div class="uk-flex-left uk-grid">
										<button type="button" @click="showNewAttachment"
											class="sc-button sc-button-success sc-button-small uk-margin-small-right uk-margin-medium-left">
											<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
											Dosya Ekle
										</button>
									</div>
									<div class="uk-margin-medium uk-margin-remove-left">
										<client-only>
											<Datatable id="sc-dt-attachments-table" ref="attachmentsTable" :data="attachmentList" :options="dtAttachmentOptions"
												:customColumns="dtAttachmentCols" :buttons="true"
												:customEvents="[{ name: 'select', function: clickAttachmentRow }]">
											</Datatable>
										</client-only>
									</div>

								</div>
							</li>
							<li v-show="hasViewAuth('ProjectManagement')">
								<!-- OFFERS DOCS -->
								<div class="sc-padding-medium sc-padding-remove-top">
									<div class="uk-flex-left uk-grid">
										<button type="button" @click="showNewOfferDoc"
											class="sc-button sc-button-success sc-button-small uk-margin-small-right uk-margin-medium-left">
											<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
											Teklif Dosyası Ekle
										</button>
									</div>
									<div class="uk-margin-medium uk-margin-remove-left">
										<client-only>
											<Datatable id="sc-dt-offerdocs-table" ref="offerDocsTable" :data="offerDocList" :options="dtAttachmentOptions"
												:customColumns="dtAttachmentCols" :buttons="true"
												:customEvents="[{ name: 'select', function: clickOfferDocRow }]">
											</Datatable>
										</client-only>
									</div>

								</div>

								<!-- CLOUD OFFER FRAME -->
								<iframe v-if="formData.cloudDocId && formData.cloudDocId.length > 0"
									style="border: 3px solid #afafaf;border-radius:5px;"
									 width="100%" height="600" :src="'https://docs.google.com/spreadsheets/d/'+ formData.cloudDocId +'/edit?usp=sharing#gid='+ formData.cloudSheetId +'?widget=true&amp;headers=false;gid=' + formData.cloudSheetId"></iframe>
							</li>
						</ul>
					</div>
					<form>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-6@m" v-show="hasViewAuth('ProjectManagement')" style="margin-top:3px;">
								<client-only>
									<Select2 v-model="formData.projectStatus" :options="statusList"
										:settings="{ 'width': '100%', 'placeholder': 'Proje Durumu', 'allowClear': true }"><label>Proje
											Durumu</label></Select2>
								</client-only>
							</div>
							<div class="uk-margin-medium-top uk-width-expand@m">
								<button type="button" @click="onSubmit"
									class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
									<span data-uk-icon="icon: check" class="uk-icon"></span>
								</button>
								<button type="button" @click="onCancel"
									class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
									<span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
								</button>
								<button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
									<span data-uk-icon="icon: trash" class="uk-icon"></span>
								</button>
							</div>
						</div>

					</form>
				</div>
			</div>
		</div>

		<div id="dlgDemand" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ItemDemand v-if="refreshDemandForm == true" :record-id="selectedDemandRow.itemDemandId"
						:project-id="formData.id" :is-dialog="true" :dialog-container="'dlgDemand'" @onDemandSaved="bindDemands"
						@onCancel="closeDemandDialog" />
				</div>
			</div>
		</div>

		<div id="dlgCostItem" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ProjectCostItem v-if="refreshCostItemForm == true" :detail-object="selectedCostItemRow"
						:total-detail-count="formData.costItems.length" :is-dialog="true" :dialog-container="'dlgCostItem'"
						@onCostItemSubmit="onCostItemSubmit" @onCancel="closeCostItemDialog" />
				</div>
			</div>
		</div>

		<div id="dlgService" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ProjectFieldService v-if="refreshServiceForm == true" :record-id="selectedServiceRow.id"
						:total-detail-count="serviceList.length" :is-dialog="true" :dialog-container="'dlgService'"
						@onCancel="closeServiceDialog" />
				</div>
			</div>
		</div>

		<div id="dlgAttachment" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<AttachmentForm v-if="refreshAttachmentForm == true" :record-object="selectedAttachmentRow"
						:is-dialog="true" :dialog-container="'dlgAttachment'"
						@onCancel="closeAttachmentDialog" @onSubmit="onSubmitAttachment" />
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
import moment from '~/plugins/moment';
import axios, { AxiosInstance } from 'axios'
import { useUserSession } from '~/composable/userSession';
import ProjectFieldService from '~/logical_components/ProjectFieldService.vue';

if (process.client) {
	require('~/plugins/inputmask');
}

if (process.client) {
	require('~/plugins/flatpickr');
}

export default {
	name: 'ProjectForm',
	components: {
		Datatable: process.client ? () => import("~/components/datatables/Datatables") : null,
		Select2: process.client ? () => import("~/components/Select2") : null,
		ItemDemand: process.client ? () => import("~/logical_components/ItemDemand") : null,
		ProjectCostItem: process.client ? () => import("~/logical_components/ProjectCostItem") : null,
		AttachmentForm: process.client ? () => import("~/logical_components/AttachmentForm") : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
		PrettyCheck,
		ProjectFieldService
	},
	data: () => ({
		formData: {
			id: 0,
			projectCode: '',
			projectName: '',
			explanation: '',
			responsiblePerson: '',
			meetingExplanation: '',
			criticalExplanation: '',
			startDate: null,
			deadlineDate: null,
			budget: null,
			plantId: null,
			isActive: true,
			projectCategoryId: '',
			firmId: '',
			projectStatus: '0',
			quantity: 1,
			forexId: null,
			profitRate: null,
			offerPrice: null,
			forexRate: null,
			offerForexPrice: null,
			totalCost: null,
			totalForexCost: null,
			costItems: [],
			attachments: [],
			cloudDocId: '',
			offerType: '1',
		},
		selectedDemandRow: { id: 0, itemDemandId: 0 },
		selectedServiceRow: { id: 0 },
		selectedCostItemRow: { id: 0 },
		selectedAttachmentRow: { id:0, recordType: 1, recordId: 0 },
		refreshDemandForm: false,
		refreshCostItemForm: false,
		refreshServiceForm: false,
		refreshAttachmentForm: false,
		attachmentList: [],
		offerDocList: [],
		categories: [],
		demandList: [],
		orderList: [],
		receiptList: [],
		forexList: [],
		serviceList: [],
		selectedServiceIndexes: [],
		selectedDemandIndexes: [],
		selectedCostItemIndexes: [],
		firms: [],
		offerTypeList: [
			{ id:1, text: 'Heka' },
			{ id:2, text: 'Butan' }
		],
		statusList: [
			{ id: '0', text: 'Oluşturuldu' },
			{ id: '1', text: 'Teklif verilecek' },
			{ id: '2', text: 'Teklif verildi' },
			{ id: '3', text: 'Onaylandı' },
			{ id: '4', text: 'Tamamlandı' },
			{ id: '5', text: 'İptal edildi' },
		],
		dtOptions: {
			autoWidth: false,
			select: true,
			searching: true,
			paging: true,
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
			],
		},
		dtOptionsReceipt: {
			autoWidth: false,
			select: true,
			searching: true,
			paging: true,
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
			],
		},
		dtAttachmentOptions: {
			autoWidth: false,
			select: true,
			searching: false,
			paging: false,
		},
		dtAttachmentCols: [
			{ data: "title", title: "Başlık", visible: true },
			{ data: "fileName", title: "Dosya Adı", visible: true, },
			{ data: "explanation", title: "Açıklama", visible: true, },
		],
		dtDemandCols: [
			{ data: "demandDate", title: "Tarih", visible: true, type: 'date' },
			{ data: "itemDemandNo", title: "Talep No", visible: true, },
			{ data: "itemName", title: "Stok Adı", width: "40%", visible: true, },
			{ data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "userName", title: "Oluşturan", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		],
		dtOrderCols: [
			{ data: "receiptDate", title: "Tarih", visible: true, type: 'date' },
			{ data: "receiptNo", title: "Sipariş No", visible: true, },
			{ data: "firmName", title: "Firma", visible: true, },
			{ data: "itemName", title: "Stok Adı", width: "30%", visible: true, },
			{ data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "forexUnitPrice", title: "B.Fiyat", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.unitPrice); } },
			{ data: "forexCode", title: "Para Birimi", visible: true },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "overallTotal", title: "Toplam (TL)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.overallTotal); } },
			{ data: "forexOverallTotal", title: "Toplam (Döviz)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.forexOverallTotal); }},
		],
		dtReceiptCols: [
			{ data: "receiptDate", title: "Tarih", visible: true, type: 'date' },
			{ data: "receiptNo", title: "İrsaliye No", visible: true, },
			{ data: "firmName", title: "Firma", visible: true, },
			{ data: "itemName", title: "Stok Adı", width: "30%", visible: true, },
			{ data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "forexUnitPrice", title: "B.Fiyat", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.unitPrice); } },
			{ data: "forexCode", title: "Para Birimi", visible: true },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "overallTotal", title: "Toplam (TL)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.overallTotal); } },
			{ data: "forexOverallTotal", title: "Toplam (Döviz)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(row.forexOverallTotal); }},
		],
		dtCostItemCols: [
			{ data: "lineNumber", title: "Sıra No", visible: true, },
			{ data: "itemName", title: "Stok", width: "40%", visible: true, render: function (data, ev, row) { return data && data.length > 0 ? data : row.costName; } },
			{ data: "partNo", title: "Parça Kodu", visible: true, },
			{ data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "forexCode", title: "Döviz Cinsi", visible: true, },
			{ data: "unitPrice", title: "B. Fiyat", visible: true, },
			{ data: "forexRate", title: "Kur", visible: true, },
			{ data: "overallTotal", title: "Tutar", visible: false, render: function (data) { return (new Intl.NumberFormat('tr-TR').format(data)); } },
			// { data: "costStatusText", title: "Durum", visible: true, },
		],
		dtServiceCols: [
			{ data: "serviceDate", title: "Tarih", visible: true, type: 'date' },
			{ data: "userName", title: "Personel", visible: true, },
			{ data: "documentNo", title: "Belge No", visible: true, },
		],
	}),
	computed: {
		demandsAreReadyForApprove() {
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if (result) {
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.demandList[dmnIndex];
					if (dmnObj.demandStatus != 0 && dmnObj.demandStatus != 4) {
						result = false;
						break;
					}
				}
			}

			return result;
		},
		demandsAreReadyForDeny() {
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if (result) {
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.demandList[dmnIndex];
					if (dmnObj.demandStatus >= 2) {
						result = false;
						break;
					}
				}
			}

			return result;
		},
		demandsAreReadyForDelete() {
			let result = true;

			if (this.selectedDemandIndexes.length == 0)
				result = false;

			if (result) {
				for (let i = 0; i < this.selectedDemandIndexes.length; i++) {
					const dmnIndex = this.selectedDemandIndexes[i];
					const dmnObj = this.demandList[dmnIndex];
					if (dmnObj.demandStatus >= 2 && dmnObj.demandStatus != 4) {
						result = false;
						break;
					}
				}
			}

			return result;
		},
		fOfferPrice: {
			get: function () {
				return this.formData.offerPrice > 0 ? new Intl.NumberFormat("tr-TR").format(this.formData.offerPrice) : null;
			},
			set: function (val) {
				if (!val || val.length == 0)
					this.formData.offerPrice = null;
				else {
					let procStr = val.replace('.', '').replace('.', '').replace('.', '')
						.replace(',', '.');
					this.formData.offerPrice = parseFloat(procStr);
				}
			}
		},
		fOfferForexPrice: {
			get: function () {
				return this.formData.offerForexPrice > 0 ? new Intl.NumberFormat("tr-TR").format(this.formData.offerForexPrice) : null;
			},
			set: function (val) {
				if (!val || val.length == 0)
					this.formData.offerForexPrice = null;
				else {
					let procStr = val.replace('.', '').replace('.', '').replace('.', '')
						.replace(',', '.');
					this.formData.offerForexPrice = parseFloat(procStr);
				}
			}
		},
		fTotalCost: {
			get: function () {
				return this.formData.totalCost > 0 ? new Intl.NumberFormat("tr-TR").format(this.formData.totalCost) : null;
			}
		},
		fTotalForexCost: {
			get: function () {
				return this.formData.totalForexCost > 0 ? new Intl.NumberFormat("tr-TR").format(this.formData.totalForexCost) : null;
			}
		},
		totalReceiptsLocal: {
			get: function(){
				try {
					const total = this.receiptList.filter(d => d.forexCode.length == 0).map(d => d.overallTotal).reduce((a,b) => a + b);
					return new Intl.NumberFormat("tr-TR").format(total);
				} catch (error) {
				}

				return new Intl.NumberFormat("tr-TR").format(0);
			}
		},
		totalReceiptsForex: {
			get: function(){
				try {
					const total = this.receiptList.filter(d => d.forexCode.length > 0).map(d => d.forexOverallTotal).reduce((a,b) => a + b);
					return new Intl.NumberFormat("tr-TR").format(total);
				} catch (error) {
				}

				return new Intl.NumberFormat("tr-TR").format(0);
			}
		}
	},
	beforeDestroy() {
		if (UIkit.modal('.uk-modal'))
			UIkit.modal('.uk-modal').$destroy(true);
	},
	async mounted() {
		const qsId = getQS('id');
		if (qsId) this.formData.id = parseInt(qsId);
		else this.formData.id = 0;

		await this.bindModel();
	},
	beforeMount() {
		const costCol = this.dtCostItemCols.find(d => d.data == 'overallTotal');
		if (costCol) {
			costCol.visible = this.hasViewAuth('ProjectBudgetView');
		}
	},
	methods: {
		async bindModel() {
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
							code: d.firmCode,
						};
					});

				const forexData = (await api.get('Forex')).data;
				if (forexData)
					this.forexList = forexData.map((d) => {
						return {
							id: d.id.toString(),
							text: d.forexName,
						};
					});

				const getData = (await api.get('Project/' + this.formData.id)).data;
				if (getData && getData.id > 0) {
					if (getData.startDate && getData.startDate.length > 0) {
						getData.startDate = self.$moment(getData.startDate).format('YYYY-MM-DD');
					}
					if (getData.deadlineDate && getData.deadlineDate.length > 0) {
						getData.deadlineDate = self.$moment(getData.deadlineDate).format('YYYY-MM-DD');
					}

					getData.firmId = getData.firmId == null ? '' : getData.firmId.toString();
					getData.projectStatus = getData.projectStatus == null ? '0' : getData.projectStatus.toString();
					getData.projectCategoryId = getData.projectCategoryId == null ? '' : getData.projectCategoryId.toString();
					getData.forexId = getData.forexId == null ? '' : getData.forexId.toString();

					getData.costItems = getData.costItems.map((d) => {
						return {
							...d,
							newRecord: false,
						};
					});

					this.formData = getData;
				}
				else {
					this.formData = {
						id: 0,
						projectCode: '',
						projectName: '',
						explanation: '',
						responsiblePerson: '',
						meetingExplanation: '',
						criticalExplanation: '',
						startDate: null,
						deadlineDate: null,
						budget: null,
						plantId: null,
						isActive: true,
						projectCategoryId: '',
						firmId: '',
						projectStatus: '0',
						quantity: 1,
						forexId: null,
						profitRate: null,
						offerPrice: null,
						forexRate: null,
						offerForexPrice: null,
						totalCost: null,
						totalForexCost: null,
						costItems: [],
					};

					if (getData.projectCode)
						this.formData.projectCode = getData.projectCode;
				}

				if (this.formData.id == 0)
					await this.selectDefaultForex();

				await this.bindDemands();
				await this.bindServices();
				await this.bindOrders();
				await this.bindReceipts();
				await this.bindAttachments();
				this.calculateProjectCost();

				if (this.hasViewAuth('ProjectManagement'))
					this.initCloud();
				
				// this.calculateTotal();
			} catch (error) {
				console.log(error);
			}
		},
		initCloud(){
			try {
				const self = this;
				this.$google.api.load('client:auth2', {
					callback: function(dg) {
						self.$google.api.client.init({
							apiKey: 'AIzaSyD7Qg97gRwKeoqCpjACKTsLzV0vTdSAPOw',
							clientId: '756662015988-6s0gq2tj2v0mbu3lmiigsdnnul89ec71.apps.googleusercontent.com',
							discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
							scope: 'https://www.googleapis.com/auth/spreadsheets',
							plugin_name: 'chat',
						}).then(function(){
							const authIns = self.$google.api.auth2.getAuthInstance();
							if (!authIns.isSignedIn.get() || authIns.currentUser.Oa.uv.gw != 'heka@progenar.com'){
								authIns.signIn();
							}
						});
					},
					onerror: function() {
						// Handle loading error.
						// alert('gapi.client failed to load!');
					},
					timeout: 5000, // 5 seconds.
					ontimeout: function() {
						// Handle timeout.
						// alert('gapi.client could not load in a timely manner!');
					}
				});
			} catch (error) {
				
			}
		},
		async createCloudDoc(){
			try {
				const self = this;

				if (!self.formData.offerType || self.formData.offerType.length <= 0){
					self.showNotification('Teklif türünü seçmelisiniz.', false, 'error');
					return;
				}
				
				const authIns = self.$google.api.auth2.getAuthInstance();
				if (authIns.isSignedIn.get() && authIns.currentUser.Oa.uv.gw == 'heka@progenar.com'){
					if (!self.formData.cloudDocId || self.formData.cloudDocId.length <= 0){
						self.$google.api.client.sheets.spreadsheets.create({
							properties: {
								title: self.formData.projectName,
							},
						}).then((response) => {
							console.log(response);
							self.formData.cloudDocId = response.result.spreadsheetId;

							self.$google.api.client.sheets.spreadsheets.sheets.copyTo({
								spreadsheetId: self.formData.offerType == '1' ? '16jEYIO7LezkV5nucz6_1bSF-BGHqmb1wZnuFMCnRPas' : '1VaMSZTZHpiaHVN8O7db0pTuMQ2-4E585SZ-S9PqsKmI',
								sheetId: 0,
								resource: {
									destinationSpreadsheetId: self.formData.cloudDocId,
								},
							}).then(async(respCopy) => {
								console.log(respCopy);
								self.formData.cloudSheetId = respCopy.result.sheetId.toString();
								await self.onSubmit();
								await self.updateCloudDocValues();
								self.$router.push('/project?id=' + self.formData.id);
								setTimeout(() => {
									window.location.reload();
								}, 500);
							});
						});
					}
				}
			} catch (error) {
				console.log(error);
			}
		},
		async updateCloudDocValues(){
			try {
				const self = this;

				const firmObj = self.firms.find(d => d.id == self.formData.firmId);

				const authIns = self.$google.api.auth2.getAuthInstance();
				if (authIns.isSignedIn.get() && authIns.currentUser.Oa.uv.gw == 'heka@progenar.com'){
					if (self.formData.cloudDocId && self.formData.cloudDocId.length > 0){

						if (self.formData.offerType == '1'){
							self.$google.api.client.sheets.spreadsheets.values.batchUpdate({
								spreadsheetId: self.formData.cloudDocId, 
								resource: {
									valueInputOption: 'USER_ENTERED',
									data: [
										{
											range: "'Sayfa1 sayfasının kopyası'!B3",
											values: [ [self.formData.projectCode] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!D3:E3",
											values: [ [self.formData.startDate] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!A4:B4",
											values: [ [firmObj ? firmObj.text : ''] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!B9:E9",
											values: [ [self.formData.responsiblePerson] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!B10:E10",
											values: [ [self.formData.projectName] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!E27",
											values: [ [self.fOfferForexPrice] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!E28",
											values: [ [self.fOfferForexPrice] ]
										}
									], 
								},
							}).then((respUpdate) => {
								console.log(respUpdate);
								self.showNotification('Teklif dökümanı başarıyla güncellendi.', false, 'success');
							});	
						}
						else if (self.formData.offerType == '2'){
							self.$google.api.client.sheets.spreadsheets.values.batchUpdate({
								spreadsheetId: self.formData.cloudDocId, 
								resource: {
									valueInputOption: 'USER_ENTERED',
									data: [
										{
											range: "'Sayfa1 sayfasının kopyası'!M7",
											values: [ [self.formData.projectCode] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!M6",
											values: [ [self.formData.startDate] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!D8:E8",
											values: [ [firmObj ? firmObj.text : ''] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!D7:E7",
											values: [ [self.formData.responsiblePerson] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!A12:M12",
											values: [ [self.formData.projectName] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!L35:M35",
											values: [ [ self.formData.forexId > 0 ? 
												new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2, style: 'currency', currency:'EUR' }).format(self.formData.offerForexPrice) : 
												new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2, style: 'currency', currency:'TRY' }).format(self.formData.offerPrice)
											] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!L38:M38",
											values: [ [ self.formData.forexId > 0 ? 
												new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2, style: 'currency', currency:'EUR' }).format(self.formData.offerForexPrice) : 
												new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2, style: 'currency', currency:'TRY' }).format(self.formData.offerPrice)
											] ]
										},
										{
											range: "'Sayfa1 sayfasının kopyası'!M8",
											values: [ [firmObj ? firmObj.code : ''] ]
										}
									], 
								},
							}).then((respUpdate) => {
								console.log(respUpdate);
								self.showNotification('Teklif dökümanı başarıyla güncellendi.', false, 'success');
							});	
						}
					}
				}
			} catch (error) {
				console.log(error);
			}
		},
		async bindDemands() {
			const api = useApi();
			try {
				const rawData = (await api.get('ItemDemand/OfProject/' + this.formData.id)).data;
				if (rawData) {
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
		async bindOrders() {
			const api = useApi();
			try {
				const rawData = (await api.get('ItemOrder/Purchase/OfProject/' + this.formData.id)).data;
				if (rawData) {
					for (let i = 0; i < rawData.length; i++) {
						const row = rawData[i];
						row.receiptDate = dateToStr(row.receiptDate);
						row.forexOverallTotal = row.forexCode.length > 0 ? row.overallTotal : 0;
						row.overallTotal = row.overallTotal * (row.forexRate <= 0 ? 1 : row.forexRate);
					}
					this.orderList = rawData;
				}
				else
					this.orderList = [];
			} catch (error) {

			}
		},
		async bindReceipts() {
			const api = useApi();
			try {
				const rawData = (await api.get('ItemReceipt/Purchase/OfProject/' + this.formData.id)).data;
				if (rawData) {
					for (let i = 0; i < rawData.length; i++) {
						const row = rawData[i];
						row.receiptDate = dateToStr(row.receiptDate);
						row.forexOverallTotal = row.forexCode.length > 0 ? row.overallTotal : 0;
						row.overallTotal = row.overallTotal * (row.forexRate <= 0 ? 1 : row.forexRate);
					}
					this.receiptList = rawData;
				}
				else
					this.receiptList = [];
			} catch (error) {

			}
		},
		async bindServices() {
			const api = useApi();
			try {
				this.serviceList = (await api.get('ProjectFieldService/ByProject/' + this.formData.id)).data;
			} catch (error) {

			}
		},
		async bindAttachments(){
			const api = useApi();
			try {
				this.formData.attachments = (await api.get('Attachment/OfRecord/1/' + this.formData.id)).data;
				this.attachmentList = this.formData.attachments.filter(d => (d.isOfferDoc ?? false) == false);
				this.offerDocList = this.formData.attachments.filter(d => (d.isOfferDoc ?? false) == true);
			} catch (error) {

			}
		},
		async onSubmit() {
			try {
				const postData = {
					...this.formData,
					costItems: this.formData.costItems.map(d => {
						return {
							...d,
							id: d.newRecord == true ? 0 : d.id,
						};
					})
				};
				postData.firmId = !postData.firmId || postData.firmId.length == 0 ? null : parseInt(postData.firmId);
				postData.projectStatus = !postData.projectStatus || postData.projectStatus.length == 0 ? 0 : parseInt(postData.projectStatus);
				postData.projectCategoryId = !postData.projectCategoryId || postData.projectCategoryId.length == 0 ? null : parseInt(postData.projectCategoryId);
				postData.forexId = !postData.forexId || postData.forexId.length == 0 ? null : parseInt(postData.forexId);

				const api = useApi();
				const postResult = (await api.post('Project', postData)).data;
				if (postResult.result) {
					this.showNotification('Kayıt başarılı', false, 'success');
					this.formData.id = postResult.recordId;

					this.showNotification('Teklif dökümanı buluta kayıt ediliyor.', false, 'warning');
					if (!this.formData.cloudDocId || this.formData.cloudDocId.length <= 0)
						this.createCloudDoc();
					else
						this.updateCloudDocValues();
				}
				else
					this.showNotification(postResult.errorMessage, false, 'error');
			} catch (error) {
				this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
			}
		},
		onCancel() {
			this.$router.push('/project/list');
		},
		async onDelete() {
			const self = this;
			UIkit.modal.confirm('Bu projeyi silmek istediğinizden emin misiniz?').then(
				async function () {
					try {
						const api = useApi();
						const delResult = (await api.delete('Project/' + self.formData.id)).data;
						if (delResult.result) {
							self.showNotification('Silme işlemi başarılı', false, 'success');
							self.$router.push('/project/list');
						}
						else
							self.showNotification(delResult.errorMessage, false, 'error');
					} catch (error) {

					}
				});
		},
		dtButtonsInitialized() {
      // append buttons to custom container
      this.$refs.costItemsTable.$dt
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
		dtButtonsInitialize() {
      // append buttons to custom container
      this.$refs.demandListTable.$dt
        .buttons()
        .container()
        .appendTo(document.getElementById("sc-dt-buttonsDemand"));
    },
	dtButtonsInitializeOrder() {
      // append buttons to custom container
      this.$refs.orderListTable.$dt
        .buttons()
        .container()
        .appendTo(document.getElementById("sc-dt-buttonsOrder"));
    },
	dtButtonsReceiptInitialize() {
      // append buttons to custom container
      this.$refs.receiptsListTable.$dt
        .buttons()
        .container()
        .appendTo(document.getElementById("sc-dt-buttonsReceipt"));

      // const ls = JSON.parse( localStorage.getItem( 'demandListTableView' ) );
      // this.$refs.buttonsTable.headers.forEach( (value, i) => {
      // 	this.dtDHeaders.push({
      // 		'name': value,
      // 		checked: ls.columns[i].visible,
      // 		disabled: i === 0
      // 	})
      // });
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
		showNewDemand() {
			this.selectedDemandRow = { id: 0, itemDemandId: 0 };
			this.showDemand();
		},
		showDemand() {
			this.refreshDemandForm = false;
			setTimeout(() => { this.refreshDemandForm = true; }, 100);

			const modalElement = document.getElementById('dlgDemand');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		showNewAttachment(){
			const self = this;
			this.selectedAttachmentRow = { id:0, recordType:1, recordId: self.formData.id };
			this.showAttachment();
		},
		showNewOfferDoc(){
			const self = this;
			this.selectedAttachmentRow = { id:0, recordType:1, isOfferDoc: true, recordId: self.formData.id };
			this.showAttachment();
		},
		showAttachment(){
			this.refreshAttachmentForm = false;
			setTimeout(() => { this.refreshAttachmentForm = true; }, 100);

			const modalElement = document.getElementById('dlgAttachment');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		closeAttachmentDialog() {
			const modalElement = document.getElementById('dlgAttachment');
			UIkit.modal(modalElement).hide();
		},
		async onSubmitAttachment(){
			this.closeAttachmentDialog();
			await this.bindAttachments();
		},
		showNewCostItem() {
			this.selectedCostItemRow = { id: 0 };
			this.showCostItem();
		},
		showCostItem() {
			this.refreshCostItemForm = false;
			setTimeout(() => { this.refreshCostItemForm = true; }, 100);

			const modalElement = document.getElementById('dlgCostItem');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		closeDemandDialog() {
			const modalElement = document.getElementById('dlgDemand');
			UIkit.modal(modalElement).hide();
		},
		closeCostItemDialog() {
			const modalElement = document.getElementById('dlgCostItem');
			UIkit.modal(modalElement).hide();
		},
		onCostItemSubmit(detailParam) {
			const detailRow = detailParam.data;
			if (detailParam.action == 'save') {
				if (detailRow.id == 0) {
					detailRow.newRecord = true;
					detailRow.id = detailRow.lineNumber;
					detailRow.forexCode = '';
					this.formData.costItems.push(detailRow);
				}
				else {
					const existingDetail = this.formData.costItems.find(d => d.id == detailRow.id);
					if (existingDetail) {
						// detailRow.newDetail = false;

						existingDetail.lineNumber = detailRow.lineNumber;
						existingDetail.itemId = detailRow.itemId;
						existingDetail.costName = detailRow.costName;
						existingDetail.quantity = detailRow.quantity;
						existingDetail.forexId = detailRow.forexId;
						existingDetail.forexCode = detailRow.forexCode;
						existingDetail.forexRate = detailRow.forexRate;
						existingDetail.unitPrice = detailRow.unitPrice;
						existingDetail.overallTotal = detailRow.overallTotal;
						existingDetail.forexOverallTotal = detailRow.forexOverallTotal;
						existingDetail.explanation = detailRow.explanation;
						// existingDetail.newDetail = detailRow.newDetail;
					}
				}

				const modalElement = document.getElementById('dlgCostItem');
				UIkit.modal(modalElement).hide();

				this.calculateProjectCost();
				this.calculateTotal();
			}
		},
		deleteCostItem() {
			const self = this;

			UIkit.modal.confirm('Seçilen kalemleri silmek istediğinizden emin misiniz?').then(
				async function () {
					const itemsToDelete = [];
					for (let i = 0; i < self.selectedCostItemIndexes.length; i++) {
						const item = self.formData.costItems[self.selectedCostItemIndexes[i]];
						itemsToDelete.push(item);
					}

					for (let i = 0; i < itemsToDelete.length; i++) {
						const element = itemsToDelete[i];
						const costIndex = self.formData.costItems.indexOf(element);
						if (costIndex > -1) {
							self.formData.costItems.splice(costIndex, 1);
						}
					}

					// renumarate items
					for (let i = 0; i < self.formData.costItems.length; i++) {
						const element = self.formData.costItems[i];
						element.lineNumber = i + 1;
					}

					self.selectedCostItemIndexes = [];
					self.selectedCostItemRow = null;

					self.calculateTotal();
					self.calculateProjectCost();
				});
		},
		async approveDetails() {
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
						if (postResult.result) {
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
		async denyDetails() {
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
						if (postResult.result) {
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
		hasViewAuth(sectionKey) {
			if (process.client) {
				const session = useUserSession();
				if (session && session.checkAuthSection)
					return session.checkAuthSection(sectionKey);
			}
			return false;
		},
		onProfitRateChanged() {
			let totalVal = 0;
			if (this.formData && this.formData.costItems && this.formData.costItems.length > 0)
				totalVal = this.formData.costItems.map(d => d.overallTotal).reduce((a, b) => a + b);

			this.formData.offerPrice = totalVal + (totalVal * this.formData.profitRate / 100.0);
		},
		async selectDefaultForex() {
			try {
				const defForex = this.forexList.find(d => d.text == 'EUR');
				if (defForex) {
					await this.updateLiveForexRate(defForex.id);
				}
			} catch (error) {

			}
		},
		showService() {
			this.refreshServiceForm = false;
			setTimeout(() => { this.refreshServiceForm = true; }, 100);

			const modalElement = document.getElementById('dlgService');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
		closeServiceDialog() {
			const modalElement = document.getElementById('dlgService');
			UIkit.modal(modalElement).hide();
		},
		deleteService() {
			const self = this;

			UIkit.modal.confirm('Seçilen servis kayıtlarını silmek istediğinizden emin misiniz?').then(
				async function () {
					for (let i = 0; i < self.selectedServiceIndexes.length; i++) {
						const costIndex = self.selectedServiceIndexes[i];
						if (costIndex > -1) {
							self.serviceList.splice(costIndex, 1);
						}
					}
				});
		},
		clickAttachmentRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedAttachmentRow = this.attachmentList[selIndex];
			this.showAttachment();
		},
		clickOfferDocRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedAttachmentRow = this.offerDocList[selIndex];
			this.showAttachment();
		},
		clickDemandRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedDemandIndexes.push(selIndex);
			this.selectedDemandRow = this.demandList[selIndex];
		},
		deselectDemandRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedDemandIndexes = this.selectedDemandIndexes.filter(d => d != selIndex);
			if (this.selectedDemandIndexes.length > 0) {
				this.selectedDemandRow = this.demandList[this.selectedDemandIndexes[0]];
			}
			else
				this.selectedDemandRow = { id: 0, itemDemandId: 0 };
		},
		clickOrderRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			const orderRow = this.orderList[selIndex];
			window.open('/purchasing/item-order?id=' + orderRow.itemOrderId, 'blank');
		},
		clickReceiptRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			const orderRow = this.receiptList[selIndex];
			window.open('/purchasing/item-receipt?id=' + orderRow.itemReceiptId, 'blank');
		},
		clickCostItemRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedCostItemIndexes.push(selIndex);
			this.selectedCostItemRow = this.formData.costItems[selIndex];
		},
		deselectCostItemRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedCostItemIndexes = this.selectedCostItemIndexes.filter(d => d != selIndex);
			if (this.selectedCostItemIndexes.length > 0) {
				this.selectedCostItemRow = this.formData.costItems[this.selectedCostItemIndexes[0]];
			}
			else
				this.selectedCostItemRow = { id: 0 };
		},
		clickServiceRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedServiceIndexes.push(selIndex);
			this.selectedServiceRow = this.serviceList[selIndex];
		},
		deselectServiceRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedServiceIndexes = this.selectedServiceIndexes.filter(d => d != selIndex);
			if (this.selectedServiceIndexes.length > 0) {
				this.selectedServiceRow = this.serviceList[this.selectedServiceIndexes[0]];
			}
			else
				this.selectedServiceRow = { id: 0 };
		},
		calculateProjectCost() {
			try {
				if (this.formData && this.formData.costItems && this.formData.costItems.length > 0) {
					const totalCost = this.formData.costItems.map((d) => d.overallTotal).reduce((a, b) => a + b);
					this.formData.totalCost = totalCost;

					if (this.formData.forexId && this.formData.forexId > 0 && this.formData.forexRate > 0) {
						this.formData.totalForexCost = this.formData.totalCost / this.formData.forexRate;
					}
					else
						this.formData.totalForexCost = null;
				}
				else
					this.formData.budget = 0;
			} catch (error) {

			}
		},
		calculateTotal() {
			let totalVal = 0;
			if (this.formData && this.formData.costItems && this.formData.costItems.length > 0)
				totalVal = this.formData.costItems.map(d => d.overallTotal).reduce((a, b) => a + b);

			this.formData.offerPrice = totalVal + (totalVal * this.formData.profitRate / 100.0);

			let forexRate = 1;
			if (this.formData.forexId && this.formData.forexId > 0)
				forexRate = this.formData.forexRate;

			if (forexRate && forexRate > 0)
				this.formData.offerForexPrice = this.formData.offerPrice / forexRate;
			else
				this.formData.offerForexPrice = null;
		},
		calculateForexTotal() {
			let forexRate = 1;
			if (this.formData.forexId && this.formData.forexId > 0)
				forexRate = this.formData.forexRate;

			if (forexRate && forexRate > 0)
				this.formData.offerForexPrice = this.formData.offerPrice / forexRate;
			else
				this.formData.offerForexPrice = null;
		},
		calculateLocalTotal() {
			let forexRate = 1;
			if (this.formData.forexId && this.formData.forexId > 0)
				forexRate = this.formData.forexRate;

			if (forexRate && forexRate > 0)
				this.formData.offerPrice = this.formData.offerForexPrice * forexRate;
		},
		async updateLiveForexRate(val) {
			const reqUri = 'http://hasanadiguzel.com.tr/api/kurgetir';

			try {
				// US DOLLAR, EURO
				const api = axios.create();
				const data = (await api.get(reqUri)).data;

				this.formData.forexId = val.toString();

				const selectedForex = this.forexList.find(d => d.id == parseInt(val));

				const searchCode = selectedForex.text == 'EUR' ? 'EURO' :
					selectedForex.text == 'USD' ? 'US DOLLAR' : selectedForex.text;

				const foundForex = data.TCMB_AnlikKurBilgileri.find(d => d.CurrencyName == searchCode);
				if (foundForex) {
					this.formData.forexRate = foundForex.ForexSelling;
					this.calculateTotal();
				}
			} catch (error) {
				this.formData.forexRate = null;
			}
		}
	},
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
@import "~scss/plugins/datatables";
</style>
