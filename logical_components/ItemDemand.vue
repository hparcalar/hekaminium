<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-show="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove uk-width-5-6">
                    Satın Alma Talebi
                </h4>
                <div class="uk-width-1-6">
                    <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-small uk-margin-medium uk-margin-remove-top uk-width-1-1@m">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                        <span>Kaydet</span>
                    </button>
                </div>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-3@m uk-grid" data-uk-grid>
                        <div class="uk-width-1-3@m">
                            <ScInput v-model="formData.receiptNo" :read-only="true">
                                <label>Talep No</label>
                            </ScInput>
                        </div>
                        <div class="uk-width-2-3@m uk-child-width-1-2@m uk-grid">
                            <div>
                                <client-only v-show="isDialog == false">
                                    <Select2
                                        v-model="formData.projectId"
                                        :options="projects"
                                        :settings="{ 'width': '100%', 'placeholder': 'Proje', 'allowClear': true }"
                                    ></Select2>
                                </client-only>
                                <ScInput v-show="isDialog == true" :value="currentProjectName" :read-only="true">
                                    <label>Proje</label>
                                </ScInput>
                            </div>
                            <div>
                                <PrettyCheck name="isActive" v-model="formData.isContracted" :value="true" class="p-icon">
                                    <i slot="extra" class="icon mdi mdi-check"></i>
                                    Fason
                                </PrettyCheck>
                            </div>
                        </div>
                        <div class="uk-width-2-3@m">
                            <ScInput v-model="formData.explanation">
                                <label>Talep Açıklaması</label>
                            </ScInput>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium sc-padding-remove-top">
                    <legend>
                        Malzeme Bilgileri
                    </legend>
                    <div class="uk-margin-medium uk-margin-remove-left">
                        <div class="uk-grid">
                            <div class="uk-width-2-5@l">
                                <div class="uk-button-group sc-padding-remove-left" style="height:34px;">
                                    <button type="button" @click="showNewDemandDetail" class="sc-button sc-button-default sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: plus" class="uk-icon"></span>
                                    </button>
                                    <button v-show="selectedDemandDetail && selectedDemandDetail.id > 0" type="button" @click="removeDemandDetail" class="sc-button sc-button-danger sc-button-small uk-width-expand" style="height:34px;">
                                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                                    </button>
                                    <button v-show="selectedDemandDetail && selectedDemandDetail.id > 0 && selectedDemandDetail.relatedOfferId > 0" 
                                        type="button" @click="showOfferForm(selectedDemandDetail.relatedOfferId)"
                                         class="sc-button sc-button-primary sc-button-small" style="height:34px;">
                                        T: {{ selectedDemandDetail.relatedOfferNo }}
                                    </button>
                                    <button v-show="selectedDemandDetail && selectedDemandDetail.id > 0 && selectedDemandDetail.relatedOrderId > 0" 
                                        type="button" @click="showOrderForm(selectedDemandDetail.relatedOrderId)"
                                         class="sc-button sc-button-warning sc-button-small" style="height:34px;">
                                        S: {{ selectedDemandDetail.relatedOrderNo }}
                                    </button>
                                    <button v-if="selectedDemandDetail && selectedDemandDetail.newRecord == false" type="button" @click="showNewAttachment" style="height:34px;"
                                        class="sc-button sc-button-success sc-button-small">
                                        <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                                        Dosya Ekle
                                    </button>
                                </div>   
                                <div v-if="selectedDemandDetail && selectedDemandDetail.newRecord == false" class="sc-padding-medium sc-padding-remove-top" style="margin-top:5px;">
									
									<div class="uk-margin-medium uk-margin-remove-left">
										<client-only>
											<Datatable id="sc-dt-atc-table" ref="atcTable" :data="attachmentList" :options="dtAttachmentOptions"
												:customColumns="dtAttachmentCols" :buttons="true"
												:customEvents="[{ name: 'select', function: clickAttachmentRow }]">
											</Datatable>
										</client-only>
									</div>

								</div>
                            </div>
                            <div class="uk-width-3-5@l">
                                <ItemDemandDetail
                                    :detail-object="selectedDemandDetail"
                                    :total-detail-count="details.length"
                                    :process-list="processList"
                                    :is-dialog="false"
                                    @onDetailSubmit="onDetailSaved"
                                    @partDialogOpen="onPartDialogOpen"
                                />
                            </div>
                        </div>

                        <div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
                            
                            <div class="uk-width-auto@s">
                                <div id="sc-dt-buttons"></div>
                            </div>
                            
                        </div>

                        <div>
                            <DataTable :value="details" responsiveLayout="scroll" editMode="cell"
                                :selection.sync="selectedDemandDetail"
                                @row-select="clickDetail"
                                selectionMode="single"
                                sortField="lineNumber" :sortOrder="1"
                                class="editable-cells-table" @cell-edit-complete="onCellEditComplete">
                                <Column field="lineNumber" header="#" sortable></Column>
                                <Column field="createdDate" header="Eklenme Tarihi" sortable>
                                    <template #body="slotProps">
                                        {{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
                                    </template>
                                </Column>
                                <Column field="itemId" header="Stok">
                                    <template #editor="slotProps">
                                        <client-only v-show="isDialog == false">
                                            <Select2
                                                v-model="slotProps.data[slotProps.column.field]"
                                                :options="itemList"
                                                :settings="{ 'width': '100%', 'placeholder': 'Stok', 'allowClear': true }"
                                            ></Select2>
                                        </client-only>
                                    </template>
                                    <template #body="slotProps">
                                        {{ slotProps.data[slotProps.column.field] ? itemList.find(m => m.id == slotProps.data[slotProps.column.field]).itemName : '' }}
                                    </template>
                                </Column>
                                <Column field="itemExplanation" header="Açıklama">
                                    <template #editor="slotProps">
                                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                                    </template>
                                </Column>
                                <Column field="partNo" header="Parça Kodu">
                                    <template #editor="slotProps">
                                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                                    </template>
                                </Column>
                                <Column field="partDimensions" header="Boyutlar">
                                    <template #editor="slotProps">
                                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                                    </template>
                                </Column>
                                <Column field="quantity" header="Miktar">
                                    <template #editor="slotProps">
                                        <InputNumber v-model="slotProps.data[slotProps.column.field]" mode="decimal" :minFractionDigits="2" :maxFracionDigits="2" />
                                    </template>
                                </Column>
                                <Column field="statusText" header="Durum"></Column>
                            </DataTable>
                        </div>

                       
                        
                        <!-- <client-only>
                            <Datatable
                                id="sc-dt-details-table"
                                ref="demandDetailsTable"
                                :data="details"
                                :part-dialog-visible="!attachmentDialogVisible"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                @initComplete="dtButtonsInitialized"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDetail }, { name:'deselect', function: deselectDetail }]"
                            ></Datatable>
                        </client-only> -->
                    </div>
                </fieldset>

                <div class="uk-margin-large-top">
                    <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                    </button>
                </div>
            </form>
        </div>

        <div id="dlgAttachment" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<AttachmentForm v-if="refreshAttachmentForm == true && attachmentDialogVisible" :record-object="selectedAttachmentRow"
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
import ItemDemandDetail from './ItemDemandDetail.vue';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { dateToStr, strToDate } from "~/composable/useHelpers";
import moment from 'moment';

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ItemDemand',
    emits: ['onDemandSaved', 'onCancel'],
    props: {
        recordId: {
            required: true,
            type: Number,
            default: 0,
        },
        projectId: {
            type: Number,
            default: 0,
        },
        isDialog: {
            type: Boolean,
            default: false,
        },
        dialogContainer: {
            type: String,
            default: '',
        },
    },
	components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
        AttachmentForm: process.client ? () => import("~/logical_components/AttachmentForm") : null,
        ItemDemandDetail,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			receiptNo: '',
			projectId: null,
            plantId: null,
			demandStatus: 0,
            isContracted: false,
            explanation: '',
		},
        attachmentDialogVisible: false,
        itemList: [],
        processList: [],
        selectedAttachmentRow: { id:0, recordType:2, recordId: 0 },
        attachmentList: [],
        refreshAttachmentForm: false,
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
        isMounting: false,
        details: [],
        projects: [],
        dtOptions: {
			select: {
                style: 'single'
            },
            rowCallback: function(row, data, index) {
                if (data.demandStatus == 2) {
                    $('td',row).addClass("bg-light-blue");
                }
                else if (data.demandStatus == 3) {
                    $('td',row).addClass("bg-success");
                }
            },
			searching: false,
			paging: false,
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
		dtDetailCols: [
			{ data: "lineNumber", title: "Satır No", visible: true, },
            // { data: "createdDate", title: "Eklenme Tarihi", visible: true, type: "date"},
            { data: "createdDate", title: "Eklenme Tarihi", visible: true, type: "date", render: function(data, ev, row) { return dateToStr(row.createdDate, 'YYYY.MM.DD'); }},
			{ data: "itemName", title: "Stok Adı", visible: true, render: function(data, ev, row) { return row.itemId && row.itemId > 0 ? row.itemName : row.itemExplanation; } },
            { data: "itemExplanation", title: "Stok Açıklaması", visible: true, },
            { data: "partNo", title: "Parça Kodu", visible: true, },
            { data: "partDimensions", title: "Boyutlar", visible: true, },
			{ data: "quantity", title: "Miktar", visible: true, },
			{ data: "statusText", title: "Durum", visible: true, },
		],
        selectedDemandDetail: {
            id: 0,
        },
        bindComplete: false
	}),
	computed: {
		currentProjectName() {
            if (this.formData.projectId > 0){
                var project = this.projects.find(d => d.id == this.formData.projectId);
                if (project)
                    return project.text;
            }

            return '';
        }
	},
	async mounted () {
        this.isMounting = true;
        this.formData.id = this.recordId;

        if (this.projectId && this.projectId > 0)
            this.formData.projectId = this.projectId;

		await this.bindModel();
        this.isMounting = false;
	},
	methods: {
        onCellEditComplete(event){
            let {data, newValue, field} = event;
            data[field] = newValue;
            // if (newValue.trim().length > 0)
            //     data[field] = newValue;
            // else
            //     event.preventDefault();
        },
        onPartDialogOpen(){
            this.attachmentDialogVisible = false;
        },
        dtButtonsInitialized(){
            this.$refs.demandDetailsTable.$dt.buttons().container().appendTo(document.getElementById('sc-dt-buttons'));
        },
        async bindModel(){
            const api = useApi();
            const self = this;
            try {
                const projData = (await api.get('Project/Demandable')).data;
                if (projData)
                    this.projects = projData.map((d) => {
                        return {
                            ...d,
                            text: d.projectName,
                        };
                    })

                const procData = (await api.get('Process')).data;
                if (procData){
                    this.processList = procData.filter(d => d.processType > 0)
                        .map((d) => {
                            return {
                                ...d,
                                text: d.processName,
                                isChecked: false,
                            }
                        });
                }

                const itemData = (await api.get('Item')).data
                this.itemList = itemData.map((d) => {return { ...d, text: d.itemName }})

                const getData = (await api.get('ItemDemand/' + this.formData.id)).data;
                if (getData && getData.id > 0){
                    getData.projectId = getData.projectId ? getData.projectId.toString() : null;
                    this.formData = getData;
                    this.details = this.formData.details.map((d) => {
                        return {
                            ...d,
                            newRecord: false,
                            item: self.itemList.find(m => m.id == d.itemId),
                            // createdDate: dateToStr(d.createdDate, 'YYYY.MM.DD'),
                        };
                    });
                }
                else{
                    this.formData.receiptNo = getData.receiptNo;
                    this.details.splice(0, this.details.length);
                }

            } catch (error) {

            }
        },
        showOfferForm(itemOfferId){
            this.$router.push('/purchasing/item-offer?id=' + itemOfferId);
        },
        showOrderForm(itemOrderId){
            this.$router.push('/purchasing/item-order?id=' + itemOrderId);
        },
        onDetailSaved(detailParam){
            const detailRow = detailParam.data;
            if (detailParam.action == 'save'){
                if (detailRow.id == 0){
                    detailRow.newRecord = true;
                    detailRow.id = detailRow.lineNumber;
                    detailRow.partNo = detailRow.partNo ?? '';
                    detailRow.partDimensions = detailRow.partDimensions ?? '';
                    this.details.push(detailRow);
                    this.showNewDemandDetail();
                }
                else {
                    const existingDetail = this.details.find(d => d.id == detailRow.id);
                    if (existingDetail){
                        // detailRow.newDetail = false;

                        existingDetail.lineNumber = detailRow.lineNumber;
                        existingDetail.itemId = detailRow.itemId;
                        existingDetail.itemExplanation = detailRow.itemExplanation;
                        existingDetail.quantity = detailRow.quantity;
                        existingDetail.demandDate = detailRow.demandDate;
                        existingDetail.partNo = detailRow.partNo ?? '';
                        existingDetail.partDimensions = detailRow.partDimensions ?? '';
                        existingDetail.processList = detailRow.processList;
                        existingDetail.partList = detailRow.partList;
                        // existingDetail.newDetail = detailRow.newDetail;
                    }
                }
            }
            this.bindComplete = true
        },
		async onSubmit(){
            if (!this.formData.explanation || this.formData.explanation.length <= 0){
                this.showNotification('Açıklama girmelisiniz.', false, 'error');
                return;
            }

            this.bindComplete = false
            this.$emit("onSaved")
            try {
                this.formData.details = this.details.map((d) => {
                    return {
                        ...d,
                        id: d.newRecord == true ? 0 : d.id,
                        demandDate: null,
                    }
                });

                const session = useUserSession();
                this.formData.plantId = session.user.plantId;
                const api = useApi();
                const postResult = (await api.post('ItemDemand', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onDemandSaved');

                    if (this.isDialog)
                        UIkit.modal(document.getElementById(this.dialogContainer)).hide();
                    // else
                    //     this.$router.go(-1);
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        onCancel(){
            if (this.isDialog)
                this.$emit('onCancel'); //UIkit.modal(document.getElementById(this.dialogContainer)).hide();
            else
                this.$router.push('/purchasing/item-demand/list');
        },
        async onDelete(){
            const self = this;
            UIkit.modal.confirm('Bu talebi silmek istediğinizden emin misiniz?').then(
				async function () {
					try {
                        const api = useApi();
                        const delResult = (await api.delete('ItemDemand/' + self.formData.id)).data;
                        if (delResult.result){
                            self.showNotification('Silme işlemi başarılı', false, 'success');
                            self.$emit('onDemandSaved');

                            if (self.isDialog)
                                UIkit.modal(document.getElementById(self.dialogContainer)).hide();
                            else
                                self.$router.go(-1);
                        }
                        else
                            self.showNotification(delResult.errorMessage, false, 'error');
                    } catch (error) {
                        
                    }
			});
            
        },
        async bindAttachments(){
			const api = useApi();
			try {
				this.attachmentList = (await api.get('Attachment/OfRecord/2/' + this.selectedDemandDetail.id)).data;
			} catch (error) {

			}
		},
        removeDemandDetail(){
            if (this.selectedDemandDetail){
                const demandIndex = this.details.indexOf(this.selectedDemandDetail);
                if (demandIndex > -1){
                    this.details.splice(demandIndex, 1);

                    const sortedDetails = this.details.sort((a,b) => a.lineNumber - b.lineNumber)

                    let lineNumber = 1;
                    for (let i = 0; i < sortedDetails.length; i++) {
                        const realIndex = this.details.indexOf(sortedDetails[i]);
                        const row = this.details[realIndex];
                        row.lineNumber = lineNumber;
                        lineNumber++;
                    }

                    this.selectedDemandDetail = {id:0};
                }
            }
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
        showNewDemandDetail(){
            const self = this;
            const lastRow = this.details.length > 0 ? this.details.sort((a,b) => b.lineNumber - a.lineNumber)[0] : null;

            const newRow = { id: 0, newRecord: true,
                    lineNumber: lastRow ? lastRow.lineNumber + 1 : this.details.length + 1, createdDate: self.$moment().format('YYYY-MM-DD'),
                    demandStatus: 0,
                };

            newRow.id = newRow.lineNumber;
            newRow.statusText = newRow.demandStatus == 0 ? 'Onay bekleniyor' :
                                newRow.demandStatus == 1 ? 'Onaylandı' :
                                newRow.demandStatus == 2 ? 'Sipariş verildi' :
                                newRow.demandStatus == 3 ? 'Sipariş teslim alındı' : 
                                newRow.demandStatus == 4 ? 'Sipariş iptal edildi' : '';
            
            this.details.push(newRow);
            // if (lastRow){
            //     if (lastRow.processList){
            //         newRow.processList = lastRow.processList.map((d) => {
            //             return {
            //                 ...d,
            //                 id: 0,
            //             }
            //         });
            //         newRow.partWidth = lastRow.partWidth;
            //         newRow.partHeight = lastRow.partHeight;
            //         newRow.partThickness = lastRow.partThickness;
            //     }
            // }

            this.selectedDemandDetail = newRow;
        },
        convertDateToStr(prm){
            return dateToStr(prm)
        },
        showNewAttachment(){
			const self = this;
			this.selectedAttachmentRow = { id:0, recordType:2, recordId: self.selectedDemandDetail.id };
			this.showAttachment();
		},
        closeAttachmentDialog() {
			const modalElement = document.getElementById('dlgAttachment');
			UIkit.modal(modalElement).hide();
		},
		async onSubmitAttachment(){
			this.closeAttachmentDialog();
			await this.bindAttachments();
		},
		showAttachment(){
            this.attachmentDialogVisible = true;
			this.refreshAttachmentForm = false;
			setTimeout(() => { this.refreshAttachmentForm = true; }, 200);

			const modalElement = document.getElementById('dlgAttachment');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
		},
        clickDetail:async function (event){
            try {
                // this.selectedDemandDetail = this.details[indexes[0]];
                await this.bindAttachments();
            } catch (error) {
                
            }
        },
        deselectDetail: function(){
            this.selectedDemandDetail = { id:0 };
        },
        clickAttachmentRow: function (e, dt, type, indexes) {
			const selIndex = indexes[0];
			this.selectedAttachmentRow = this.attachmentList[selIndex];
			this.showAttachment();
		},
	},
    watch: {
        recordId: async function(newVal, oldVal) {
            // if (!this.isMounting){
            //     this.formData.id = this.recordId;
            //     await this.bindModel();
            // }

            this.formData.id = this.recordId;
            await this.bindModel();
        },
        projectId: function(newVal, oldVal) {
            if (this.formData)
                this.formData.projectId = newVal;
        },
        details: {
            handler: function(newVal, oldVal){
                if(this.bindComplete){
                    this.$emit('onChange');
                }
            },
            deep: true
        },
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
<style type="text/css">
.bg-success{
    background-color: #11bf48;
}
.bg-light-blue{
    background-color: #70c0e6;
}
</style>