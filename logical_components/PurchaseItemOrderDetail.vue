<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt uk-background-muted sc-padding-medium">
                    <div class="uk-child-width-1-2@m uk-grid sc-padding-remove-top" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.lineNumber" :type="'number'" :read-only="true">
                                <label>Satır No</label>
                            </ScInput>
                        </div>
                        <div>
                            <client-only>
                                <Select2
                                    v-model="formData.itemId"
                                    :options="itemList"
                                    :settings="{ 'width': '100%', 'placeholder': 'Stok Seçiniz', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div>
                            <ScInput v-model="formData.itemExplanation">
                                <label>Kalem Açıklama</label>
                            </ScInput>
                        </div>
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
                        <div v-if="formData.demandConsumes && formData.demandConsumes.length > 0">
                            <button type="button" @click="showRelatedDemandDetails" class="sc-button sc-button-primary uk-margin-medium" style="height:34px;margin-top:15px;">
                                <span :data-uk-icon="'icon: list'" class="uk-icon"></span> Talep Kalemleri
                            </button>
                            <div v-if="demandsExpanded" class="uk-overflow-auto" style="max-height:250px;">
                                <div v-for="(demand, demandIndex) in formData.demandConsumes" 
                                :key="demandIndex" style="border:1px solid #888; border-radius:5px;margin:5px;padding:5px;"
                                class="uk-grid">
                                    <div class="uk-width-4-5@m">
                                        <p class="uk-padding-remove uk-margin-remove"><b>Stok:</b> {{ demand.itemName }}</p>
                                        <p class="uk-padding-remove uk-margin-remove"><b>Açıklama:</b> {{ demand.itemExplanation }}</p>
                                        <p class="uk-padding-remove uk-margin-remove"><b>Parça No:</b> {{ demand.partNo }}, <b>Boyut:</b> {{ demand.partDimensions }}, <b>Miktar:</b> {{ demand.demandQuantity }}</p>
                                    </div>
                                    <div class="uk-width-1-5@m">
                                        <button type="button" @click="removeDemandDetail(demand)" 
                                        class="sc-button sc-button-danger sc-button-small uk-margin-medium-top uk-margin-small-right">
                                            <span data-uk-icon="icon: trash" class="uk-icon"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <client-only>
                                <Select2
                                    v-model="formData.projectId"
                                    :options="projectList"
                                    :settings="{ 'width': '100%', 'placeholder': 'Proje', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div>
                            <ScInput :type="'number'" v-model="formData.quantity" @change="calculateTotal">
                                <label>Miktar</label>
                            </ScInput>
                        </div>
                        <div>
                            <client-only>
                                <Select2
                                    v-model="formData.forexId"
                                    :options="forexList"
                                    @change="updateLiveForexRate"
                                    :settings="{ 'width': '100%', 'placeholder': 'Döviz Cinsi', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div>
                            <ScInput :type="'number'" v-model="formData.forexRate" @change="calculateTotal">
                                <label>Döviz Kuru</label>
                            </ScInput>
                        </div>
                        <div>
                            <PrettyCheck name="taxIncluded" v-model="formData.taxIncluded" :value="false" class="p-icon" @change="calculateTotal">
                                <i slot="extra" class="icon mdi mdi-check"></i>
                                Kdv Dahil
                            </PrettyCheck>
                        </div>
                        <div>
                            <ScInput :type="'number'" v-model="formData.taxRate" @change="calculateTotal">
                                <label>Kdv %</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput :type="'number'" v-model="fUnitPrice" @change="calculateTotal">
                                <label>Birim Fiyat</label>
                            </ScInput>
                        </div>
                        <div>
                            <div class="uk-child-width-1-2@m uk-grid">
                                <div>
                                    <ScInput :type="'number'" v-model="fOverallTotal" :read-only="true">
                                        <label>Satır Tutarı</label>
                                    </ScInput>
                                </div>
                                <div>
                                    <ScInput :type="'number'" v-model="fOverallLocal" :read-only="true">
                                        <label>TL Tutarı</label>
                                    </ScInput>
                                </div>
                            </div>
                        </div>

                        <div class="uk-width-2-2@m">
                            <ScInput v-model="formData.explanation">
                                <label>Açıklama</label>
                            </ScInput>
                        </div>
                    </div>
                    <div class="uk-child-width-1-2 uk-grid">
                        <div>
                            <client-only>
                                <Select2
                                    v-model="formData.receiptStatus"
                                    :options="statusList"
                                    @change="receiptStatusChanged"
                                    :settings="{ 'width': '100%', 'placeholder': 'Durum', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div>
                            <button type="button" @click="onSubmit" class="sc-button sc-button-primary uk-margin-medium" style="height:34px;margin-top:15px;">
                                <span :data-uk-icon="'icon:' + detailObject.id > 0 ? 'check' : 'plus'" class="uk-icon"></span> {{ detailObject.id > 0 ? 'Kaydet' : 'Ekle' }}
                            </button>
                        </div>
                    </div>
                </fieldset>
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
import { useApi } from '~/composable/useApi';
import moment from '~/plugins/moment'
import axios, { AxiosInstance } from 'axios'

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'PurchaseItemOrderDetail',
    props: {
        detailObject: {
            type: Object,
            default: { id:0 },
            required: true,
        },
        totalDetailCount: {
            type: Number,
            default: 0,
        },
        isContracted: {
            type: Boolean,
            default: false,
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
    emits: ['onDetailSubmit'],
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
        isMounting: false,
		formData: {
            id: 0,
			lineNumber: 0,
			itemId: null,
            projectId: null,
            forexId: null,
            forexRate: 0,
            taxIncluded: false,
            taxRate: 18,
            itemName: '',
            explanation: '',
            unitId: null,
            unitPrice: 0,
            quantity: 0,
            netQuantity: 0,
			receiptStatus: 0,
            overallTotal: 0,
            overallLocal: 0,
            partNo: '',
            partDimensions: '',
            itemExplanation: '',
            demandConsumes: [],
            newDetail: true,
		},
        itemList: [],
        forexList: [],
        projectList: [],
        demandsExpanded: false,
        statusList: [
            { id:0, text: 'Oluşturuldu' },
            { id:1, text: 'Onaylandı' },
            { id:2, text: 'İletildi' },
            { id:3, text: 'Tamamlandı' },
            { id:4, text: 'İptal edildi' },
        ],
        currentReceiptStatus: 0,
	}),
    computed: {
        fUnitPrice:{
			get: function(){
				return new Intl.NumberFormat("tr-TR").format(this.formData.unitPrice);
			},
			set: function(val){
				if (!val || val.length == 0)
					this.formData.unitPrice = null;
				else{
					let procStr = val.replace('.', '').replace('.', '').replace('.','')
						.replace(',','.');
					this.formData.unitPrice = parseFloat(procStr);
				}
			}
		},
        fOverallTotal:{
			get: function(){
				return new Intl.NumberFormat("tr-TR").format(this.formData.overallTotal);
			},
			set: function(val){
				if (!val || val.length == 0)
					this.formData.overallTotal = null;
				else{
					let procStr = val.replace('.', '').replace('.', '').replace('.','')
						.replace(',','.');
					this.formData.overallTotal = parseFloat(procStr);
				}
			}
		},
        fOverallLocal:{
			get: function(){
				return new Intl.NumberFormat("tr-TR").format(this.formData.overallLocal);
			},
			set: function(val){
				if (!val || val.length == 0)
					this.formData.overallLocal = null;
				else{
					let procStr = val.replace('.', '').replace('.', '').replace('.','')
						.replace(',','.');
					this.formData.overallLocal = parseFloat(procStr);
				}
			}
		},
    },
	async mounted () {
        this.isMounting = true;
		await this.bindModel();
        this.isMounting = false;
	},
	methods: {
        async bindModel(){
            this.formData = this.detailObject;
            if (this.detailObject.id == 0){
                this.formData = {
                    id: 0,
                    lineNumber: 0,
                    itemId: null,
                    projectId: null,
                    forexId: null,
                    forexRate: 0,
                    taxIncluded: false,
                    taxRate: 18,
                    itemName: '',
                    explanation: '',
                    unitId: null,
                    unitPrice: 0,
                    quantity: 0,
                    netQuantity: 0,
                    receiptStatus: 0,
                    overallTotal: 0,
                    partNo: '',
                    partDimensions: '',
                    demandConsumes: [],
                    newDetail: true,
                };
            }
            try {
                this.formData.itemId = this.formData.itemId ? this.formData.itemId.toString() : null;   
                this.formData.forexId = this.formData.forexId ? this.formData.forexId.toString() : null;   
                this.formData.projectId = this.formData.projectId ? this.formData.projectId.toString() : null;   
                this.formData.receiptStatus = this.formData.receiptStatus ? this.formData.receiptStatus.toString() : null;   
            } catch (error) {
                
            }
            if (this.formData.id <= 0){
                this.formData.lineNumber = this.totalDetailCount + 1;
            }

            const api = useApi();

            // fetch items for selection
            try {
                this.itemList = (await api.get('Item')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.itemName,
                    };
                });
            } catch (error) {
                
            }

            // fetch forexes for selection
            try {
                this.forexList = (await api.get('Forex')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.forexCode,
                    };
                });
            } catch (error) {
                
            }

            // fetch projects for selection
            try {
                this.projectList = (await api.get('Project')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.projectName,
                    };
                });
            } catch (error) {
                
            }

            this.calculateTotal();

            this.currentReceiptStatus = this.formData.receiptStatus;
        },
		onSubmit(){
            const self = this;

            // if (!this.formData.itemId && (!this.isContracted || (!this.demandConsumes || this.demandConsumes.length == 0)))
            // {
            //     this.showNotification('Bir stok seçmelisiniz.', false, 'error');
            //     return;
            // }

            if (!this.formData.quantity || this.formData.quantity <= 0){
                this.showNotification('Miktar 0 dan büyük olmalıdır.', false, 'error');
                return;
            }

            // #region VALIDATE ROW DATA
            const selectedItem = this.itemList.find(d => d.id == this.formData.itemId);
            if (selectedItem)
                this.formData.itemName = selectedItem.text;
            else
                this.formData.itemName = this.formData.itemExplanation;

            const selectedForex = this.forexList.find(d => d.id == this.formData.forexId);
            if (selectedForex)
                this.formData.forexCode = selectedForex.text;

            const selectedProject = this.projectList.find(d => d.id == this.formData.projectId);
            if (selectedProject)
                this.formData.projectName = selectedProject.text;

            if (!this.formData.receiptStatus)
                this.formData.receiptStatus = 0;
            this.formData.statusText = this.formData.receiptStatus == 0 ? 'Oluşturuldu' :
                                       this.formData.receiptStatus == 1 ? 'Onaylandı' :
                                       this.formData.receiptStatus == 2 ? 'Tamamlandı' :
                                       this.formData.receiptStatus == 3 ? 'İptal edildi' : ''; 
            // #endregion
            
            this.$emit('onDetailSubmit', {
                action: 'save',
                data: { ...this.formData },
            });
        },
        onCancel(){
            this.$emit('onDetailSubmit', {
                action: 'cancel',
                data: this.formData,
            });
            UIkit.modal(document.getElementById(this.dialogContainer)).hide();
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
        calculateTotal(){
            try {
                const subTotal = this.formData.quantity * this.formData.unitPrice;
                const taxTotal = subTotal * this.formData.taxRate;
                this.formData.overallTotal = this.formData.taxIncluded ? subTotal : (subTotal + taxTotal);

                let forexRate = 1;
                if(this.formData.forexId && this.formData.forexId > 0)
                    forexRate = this.formData.forexRate;

                this.formData.overallLocal = this.formData.overallTotal * forexRate;
            } catch (error) {
                
            }
        },
        async updateLiveForexRate(val){
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
                if(foundForex){
                    this.formData.forexRate = foundForex.ForexSelling;
                    this.calculateTotal();
                }
            } catch (error) {
                this.formData.forexRate = null;
            }
        },
        showRelatedDemandDetails(){
            this.demandsExpanded = !this.demandsExpanded;
        },
        removeDemandDetail(demand){
            try {
                const dIndex = this.demandConsumes.indexOf(demand);
                if (dIndex > -1){
                    this.demandConsumes.splice(dIndex, 1);
                }
            } catch (error) {
                
            }
        },
        receiptStatusChanged(val){
            if (!this.currentReceiptStatus)
                this.currentReceiptStatus = 0;

            if (val == 1 && (this.currentReceiptStatus != 1)){
                this.showNotification('Sipariş onay yetkiniz bulunmamaktadır.', false, 'error');
                const self = this;
                this.formData.receiptStatus = this.currentReceiptStatus;
                // setTimeout(function() { self.formData.receiptStatus = self.currentReceiptStatus; }, 750);
            }
            else if (val == 2 && (this.currentReceiptStatus == 0 || this.currentReceiptStatus == 4)){
                this.showNotification('Sipariş onaylanmadan ilerlenemez.', false, 'error');
                const self = this;                
                this.formData.receiptStatus = this.currentReceiptStatus;
                // setTimeout(function() { self.formData.receiptStatus = self.currentReceiptStatus; }, 750);
            }
            else{
                this.currentReceiptStatus = val;
            }
        }
	},
    watch: {
        detailObject: {
            handler: async function (newVal, oldVal) {
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
