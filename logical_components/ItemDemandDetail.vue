<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt uk-background-muted sc-padding-medium">
                    <div class="uk-child-width-1-3@m uk-grid sc-padding-remove-top uk-margin-remove-top" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.lineNumber" :type="'number'" :read-only="true">
                                <label>Satır No</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.itemExplanation">
                                <label>Malzeme Açıklama</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput :type="'number'" v-model="formData.quantity" :read-only="hasCuttingProcess">
                                <label>Miktar</label>
                            </ScInput>
                        </div>
                    </div>
                    <div class="uk-child-width-1-2@m uk-grid sc-padding-remove-top uk-margin-small" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.partNo">
                                <label>Parça Kodu</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.partDimensions">
                                <label>Boyutlar</label>
                            </ScInput>
                        </div>
                    </div>
                    <div class="uk-child-width-2-3@m uk-grid uk-margin-small" data-uk-grid>
                        <div class="uk-width-4-5@m">
                            <div class="uk-grid">
                                <div class="uk-width-3-5">
                                    <div>
                                        <client-only>
                                            <Select2
                                                v-model="formData.itemId"
                                                :options="itemList"
                                                :settings="{ 'width': '100%', 'placeholder': 'Stok Seçiniz', 'allowClear': true }"
                                            ></Select2>
                                        </client-only>
                                    </div>
                                </div>
                                <div class="uk-width-2-5">
                                    <button type="button" @click="showNewItemDialog" class="sc-button sc-button-primary sc-button-small uk-margin-medium" style="height:34px;margin-top:15px;">
                                        <span :data-uk-icon="'icon: plus'" class="uk-icon"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-small uk-margin-medium uk-margin-remove-top uk-width-1-5@m" style="height:34px;">
                            <span :data-uk-icon="'icon: ' + detailObject.id > 0 ? 'check' : 'check'" class="uk-icon"></span> {{ detailObject.id > 0 ? 'Kaydet' : 'Ekle' }}
                        </button>
                    </div>
                    <div class="uk-grid sc-padding-remove-top sc-padding-remove-right uk-margin-small">
                        <div class="uk-child-width-1-2@m uk-width-1-3@m uk-grid" style="margin-left:0px; padding-left:0px;" data-uk-grid>
                            <div v-for="(item, index) in processList" :key="index">
                                <PrettyCheck class="p-icon" v-model="item.isChecked" :value="false" >
                                    <i slot="extra" class="icon mdi mdi-check"></i> {{ item.text }}
                                </PrettyCheck>
                            </div>
                        </div>

                        <!-- BEGIN: KESİM BİLGİLERİ PANELİ -->
                        <div v-show="hasCuttingProcess" class="uk-width-2-3@m cutting-panel" 
                            data-uk-grid>
                            <h6 class="uk-width-3-3@m">Profil Bilgileri</h6>
                            <div class="uk-child-width-1-3@m uk-grid" style="margin-top:0px;">
                                <div style="margin-top:5px;">
                                    <ScInput v-model="formData.partWidth" :type="'number'">
                                        <label>Genişlik</label>
                                    </ScInput>
                                </div>
                                <div style="margin-top:5px;">
                                    <ScInput v-model="formData.partHeight" :type="'number'">
                                        <label>Yükseklik</label>
                                    </ScInput>
                                </div>
                                <div style="margin-top:5px;">
                                    <ScInput v-model="formData.partThickness" :type="'number'">
                                        <label>Et Kalınlığı</label>
                                    </ScInput>
                                </div>
                            </div>
                            <div data-uk-grid>
                                <h6>Kesim Boyları</h6>
                                <!-- <button type="button" @click="clearSelectedPart" class="sc-button sc-button-success sc-button-small" 
                                    style="margin-left:10px;margin-bottom:5px;">
                                    <span :data-uk-icon="'icon: plus'" class="uk-icon"></span> Yeni Boy
                                </button> -->
                                <div class="uk-width-1-1@m uk-child-width-1-1@m uk-grid sc-padding-remove-top uk-margin-remove-top" data-uk-grid>
                                    <div>
                                        <ScInput v-model="selectedPart.partNo" id="txtPartCode">
                                            <label>Parça Kodu</label>
                                        </ScInput>
                                    </div>
                                </div>
                                <div class="uk-width-1-1@m uk-grid sc-padding-remove-top" style="margin-top:5px;" data-uk-grid>
                                    <div class="uk-width-1-4@m">
                                        <ScInput :type="'number'" v-model="selectedPart.partHeight">
                                            <label>Boy</label>
                                        </ScInput>
                                    </div>
                                    <div class="uk-width-1-4@m">
                                        <ScInput :type="'number'" v-model="selectedPart.partQuantity">
                                            <label>Adet</label>
                                        </ScInput>
                                    </div>
                                    <div class="uk-width-1-4@m">
                                        <ScInput v-model="selectedPart.partType">
                                            <label>Kesim Tipi</label>
                                        </ScInput>
                                    </div>
                                    <div class="uk-width-1-4@m">
                                        <button type="button" @click="onPartSubmit" class="sc-button sc-button-success sc-button-small btn-focusable">
                                            <span :data-uk-icon="'icon: check'" class="uk-icon"></span>
                                        </button>
                                        <button type="button" @click="onPartDelete" class="sc-button sc-button-danger sc-button-small btn-focusable">
                                            <span :data-uk-icon="'icon: trash'" class="uk-icon"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="uk-width-1-1@m">
                                    <table class="uk-table uk-table-striped uk-table-responsive uk-table-small" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th class="uk-text-nowrap">
                                                    #
                                                </th>
                                                <th class="uk-text-nowrap">
                                                    Parça
                                                </th>
                                                <th class="uk-text-nowrap">
                                                    Boy
                                                </th>
                                                <th class="uk-text-nowrap">
                                                    Adet
                                                </th>
                                                <th class="uk-text-nowrap">
                                                    Tip
                                                </th>
                                                <th class="uk-text-nowrap">
                                                    Dosya
                                                </th>
                                            </tr>
                                        </thead>
                                        <tr v-for="(part, partIndex) in formData.partList" :key="partIndex">
                                            <td> <a @click="clickPart(part)" class="part-link">
                                                {{ (partIndex + 1).toString() }}
                                            </a></td>
                                            <td>{{ part.partNo }}</td>
                                            <td>{{ part.partHeight }}</td>
                                            <td>{{ part.partQuantity }}</td>
                                            <td>{{ part.partType }}</td>
                                            <td>
                                                <button v-if="part.partBase64 && part.partBase64.length > 0" type="button" @click="showPartFileDialog(part)" class="sc-button sc-button-primary sc-button-small btn-focusable">
                                                    <span :data-uk-icon="'icon: folder'" class="uk-icon"></span>
                                                </button>
                                                
                                                <a v-else @click="showPartFileDialog(part)">Yükle</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- END: KESİM BİLGİLERİ PANELİ -->
                    </div>
                </fieldset>
            </form>
        </div>

        <div id="dlgItemDefinition" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ItemDefinition v-show="refreshItemDialog"
						:record-id="0"
						:is-dialog="true"
						:dialog-container="'dlgItemDefinition'"
						@onItemSaved="bindItems"
						@onCancel="closeItemDefDialog"
					/>
				</div>
			</div>
		</div>

        <div id="dlgImageAction" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ImageAction v-if="refreshImageDialog && partDialogVisible"
						:preview-data="selectedPart"
						:is-dialog="true"
						:dialog-container="'dlgImageAction'"
						@onSubmit="onSubmitImage"
						@onCancel="onCloseImage"
					/>
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
import { base64ToArrayBuffer } from '~/composable/useHelpers';
import moment from '~/plugins/moment'

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ItemDemandDetail',
    props: {
        detailObject: {
            type: Object,
            default: { id:0 },
            required: true,
        },
        partDialogVisible: {
            type: Boolean,
            default: false,
        },
        processList: {
            type: Array,
            default: [],
        },
        totalDetailCount: {
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
        }
    },
    emits: ['onDetailSubmit', 'partDialogOpen'],
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
        ItemDefinition: process.client ? () => import('~/definition_components/ItemDefinition') : null,
        ImageAction: process.client ? () => import('~/logical_components/ImageAction') : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			lineNumber: 0,
			itemId: null,
            itemName: '',
            itemExplanation: '',
            explanation: '',
            unitId: null,
            quantity: null,
            netQuantity: 0,
			demandStatus: 0,
            demandDate: null,
            newRecord: true,
            partNo: '',
            partDimensions: '',
            processList: [],
            partList: [],
		},
        partFormData: {
            id: 0,
            partNo: '',
            lineNumber: 0,
            partHeight: 0.0,
            partQuantity: 0.0,
            partFile: null,
            partBase64: null,
            fileType: null,
        },
        selectedPart: { id:0, lineNumber: 0 },
        itemList: [],
        refreshItemDialog: false,
        refreshImageDialog: false,
	}),
    computed: {
        hasCuttingProcess(){
            return this.processList.some(d => d.processType == 1 && d.isChecked && d.isChecked == true);
        }
    },
	async mounted () {
		await this.bindModel();
	},
	methods: {
        async bindModel(){
            const api = useApi();
            try {
                this.itemList = (await api.get('Item')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.itemName,
                    };
                });
            } catch (error) {
                
            }

            this.formData = this.detailObject;
            try {
                this.formData.itemId = this.formData.itemId ? this.formData.itemId.toString() : null;   
            } catch (error) {
                
            }
            if (this.formData.id <= 0){
                this.formData.lineNumber = this.totalDetailCount + 1;
            }

            if (this.formData.processList){
                for (let i = 0; i < this.formData.processList.length; i++) {
                    const checkedProc = this.formData.processList[i];
                    const listItem = this.processList.find(d => d.id == checkedProc.processId);
                    if (listItem){
                        listItem.isChecked = true;
                    }
                    else
                    {
                        listItem.isChecked = false;
                    }
                }
            }
        },
        async bindItems(){
            // fetch items for selection
            try {
                const api = useApi();
                this.itemList = (await api.get('Item')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.itemName,
                        itemCategoryId: d.itemCategoryId
                    };
                });
            } catch (error) {
                
            }
        },
        getArrayBufferContent(base64Str){
            return base64ToArrayBuffer(base64Str).buffer;
        },
        onPartSubmit(){
            if (this.selectedPart.lineNumber == 0){
                if (!this.formData.partList)
                    this.formData.partList = [];

                if (!this.selectedPart.partNo || this.selectedPart.partNo.length == 0){
                    this.showNotification('Parça kodu girilmelidir.', false, 'error');
                    return;
                }

                this.selectedPart.lineNumber = this.formData.partList.length + 1;
                this.formData.partList.push(this.selectedPart);
            }

            this.clearSelectedPart();
            this.onSubmit();
            $('#txtPartCode').focus();
            this.calculateTotalQuantity();
        },
        onPartDelete(){
            if (this.selectedPart && this.selectedPart.lineNumber > 0 && confirm('Bu parçayı silmek istediğinizden emin misiniz?')){
                const partIndex = this.formData.partList.indexOf(this.selectedPart);
                if (partIndex > -1)
                    this.formData.partList.splice(partIndex, 1);

                this.calculateTotalQuantity();
            }
        },
        calculateTotalQuantity(){
            if (this.hasCuttingProcess){
                try {
                    this.formData.quantity = parseInt(Math.ceil(this.formData.partList.map(d => d.partQuantity * d.partHeight).reduce((a,b) => a + b) / 6000.0));   
                } catch (error) {
                    
                }
            }
        },
        clickPart(part){
            this.selectedPart = part;
        },
        showPartFileDialog(part){
            this.selectedPart = part;
            this.partDialogVisible = true;
            this.$emit('partDialogOpen');
            this.refreshImageDialog = false;
			setTimeout(() => { this.refreshImageDialog = true; }, 500);

			const modalElement = document.getElementById('dlgImageAction');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
        },
        clearSelectedPart(){
            this.selectedPart = { id:0, lineNumber: 0 };
        },
		onSubmit(){
            const self = this;

            // if (!this.formData.itemId)
            // {
            //     this.showNotification('Bir stok seçmelisiniz.', false, 'error');
            //     return;
            // }

            if (!this.formData.quantity || this.formData.quantity <= 0){
                this.showNotification('Miktar 0 dan büyük olmalıdır.', false, 'error');
                return;
            }

            // #region VALIDATE ROW DATA
            if (!this.formData.demandDate)
                this.formData.demandDate = self.$moment().format('YYYY-DD-MM');

            const selectedItem = this.itemList.find(d => d.id == this.formData.itemId);
            if (selectedItem)
                this.formData.itemName = selectedItem.text;

            if (!this.formData.itemName)
                this.formData.itemName = '';

            if (!this.formData.demandStatus)
                this.formData.demandStatus = 0;
                
            this.formData.statusText = this.formData.demandStatus == 0 ? 'Onay bekleniyor' :
                                       this.formData.demandStatus == 1 ? 'Onaylandı' :
                                       this.formData.demandStatus == 2 ? 'Sipariş verildi' :
                                       this.formData.demandStatus == 3 ? 'Sipariş teslim alındı' : 
                                       this.formData.demandStatus == 4 ? 'Sipariş iptal edildi' : '';
            // #endregion

            // prepare selected demand process list
            if (!this.formData.processList)
                this.formData.processList = [];

            const selectedProcs = this.processList.filter(d => d.isChecked && d.isChecked == true);
            for (let i = 0; i < selectedProcs.length; i++) {
                const sProc = selectedProcs[i];
                if (!this.formData.processList.some(d => d.processId == sProc.id)){
                    this.formData.processList.push({
                        processId: sProc.id,
                        processStatus: 0,
                    })
                }
            }

            this.formData.processList = this.formData.processList.filter(d => selectedProcs.some(m => m.id == d.processId));
            
            this.$emit('onDetailSubmit', {
                action: 'save',
                data: this.formData,
            });
        },
        onCancel(){
            this.$emit('onDetailSubmit', {
                action: 'cancel',
                data: this.formData,
            });
            UIkit.modal(document.getElementById(this.dialogContainer)).hide();
        },
        onSubmitImage(data){
            this.selectedPart.partBase64 = data.partBase64;
            this.selectedPart.fileType = data.partType;
            const modalElement = document.getElementById('dlgImageAction');
			UIkit.modal(modalElement).hide();
            this.onPartSubmit();
        },
        onCloseImage(){
            const modalElement = document.getElementById('dlgImageAction');
			UIkit.modal(modalElement).hide();
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
        showNewItemDialog(){
            this.refreshItemDialog = false;
			setTimeout(() => { this.refreshItemDialog = true; }, 200);

			const modalElement = document.getElementById('dlgItemDefinition');
			modalElement.width = window.innerWidth * 0.7;
			modalElement.height = window.innerHeight * 0.8;
			UIkit.modal(modalElement).show();
        },
        closeItemDefDialog(){
			const modalElement = document.getElementById('dlgItemDefinition');
			UIkit.modal(modalElement).hide();
		},
	},
    watch: {
        detailObject: {
            handler: async function (newVal, oldVal) {
                try {
                    if (newVal.id != oldVal.id){
                        for (let i = 0; i < this.processList.length; i++) {
                            const element = this.processList[i];
                            element.isChecked = false;
                        }
                    }   
                } catch (error) {
                    
                }

                await this.bindModel();
            },
            deep: true,
        },
        totalDetailCount: async function(newVal, oldVal){
            await this.bindModel();
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
<style type="text/css">
.cutting-panel{
    background-color:rgba(188, 219, 247, 0.5);
    margin-left:0px;
    padding-right:20px;
    padding-left:0px;
    padding-top:5px;
    margin-top:0px !important;
    padding-bottom:5px;

    border-radius:5px;
    border: 1px solid rgb(125, 185, 238);
}
.part-link{
    padding:3px;
    padding-left:5px;
    padding-right:5px;
    background-color:#ffffff;
    border-radius:3px;
    text-decoration: underline;
}
.btn-focusable:focus{
    border:1px solid black;
}
</style>
