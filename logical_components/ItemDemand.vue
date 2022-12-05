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
                            <div class="uk-width-1-5@l">
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
                                </div>     
                            </div>
                            <div class="uk-width-4-5@l">
                                <ItemDemandDetail
                                    :detail-object="selectedDemandDetail"
                                    :total-detail-count="details.length"
                                    :is-dialog="false"
                                    @onDetailSubmit="onDetailSaved"
                                />
                            </div>
                        </div>
                        
                        <client-only>
                            <Datatable
                                id="sc-dt-details-table"
                                ref="demandDetailsTable"
                                :data="details"
                                :options="dtOptions"
                                :customColumns="dtDetailCols"
                                :buttons="true"
                                :customEvents="[{ name: 'select', function: clickDetail }, { name:'deselect', function: deselectDetail }]"
                            ></Datatable>
                        </client-only>
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
		},
		dtDetailCols: [
			{ data: "lineNumber", title: "Satır No", visible: true, },
			{ data: "createdDate", title: "Eklenme Tarihi", visible: true, type: "date"},
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
        async bindModel(){
            const api = useApi();
            try {
                const projData = (await api.get('Project/Demandable')).data;
                if (projData)
                    this.projects = projData.map((d) => {
                        return {
                            ...d,
                            text: d.projectName,
                        };
                    })

                const getData = (await api.get('ItemDemand/' + this.formData.id)).data;
                if (getData && getData.id > 0){
                    getData.projectId = getData.projectId ? getData.projectId.toString() : null;
                    this.formData = getData;
                    this.details = this.formData.details.map((d) => {
                        return {
                            ...d,
                            newRecord: false,
                            createdDate: dateToStr(d.createdDate, 'YYYY.MM.DD'),
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
                        // existingDetail.newDetail = detailRow.newDetail;
                    }
                }
            }
            this.bindComplete = true
        },
		async onSubmit(){
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
                    else
                        this.$router.go(-1);
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
        removeDemandDetail(){
            if (this.selectedDemandDetail){
                const demandIndex = this.details.indexOf(this.selectedDemandDetail);
                if (demandIndex > -1){
                    this.details.splice(demandIndex, 1);

                    let lineNumber = 1;
                    for (let i = 0; i < this.details.length; i++) {
                        const row = this.details[i];
                        row.lineNumber = lineNumber;
                        lineNumber++;
                    }

                    this.showNewDemandDetail();
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
            this.selectedDemandDetail = { id:0 };
        },
        clickDetail: function (e, dt, type, indexes){
            try {
                this.selectedDemandDetail = this.details[indexes[0]];   
            } catch (error) {
                
            }
        },
        deselectDetail: function(){
            this.selectedDemandDetail = { id:0 };
        }
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