<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt uk-background-muted sc-padding-medium">
                    <div class="uk-child-width-1-2@m uk-grid sc-padding-remove-top" data-uk-grid>
                        <div>
                            <div class="uk-grid">
                                <div class="uk-width-1-3">
                                    <ScInput v-model="formData.lineNumber" :type="'number'" :read-only="true">
                                        <label>Satır No</label>
                                    </ScInput>
                                </div>

                                <div class="uk-width-2-3">
                                    <ScInput v-model="formData.costName">
                                        <label>Kalem Adı</label>
                                    </ScInput>
                                </div>
                            </div>
                        </div>
                        <div>
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
                        
                        <div>
                            <div class="uk-grid">
                                <div class="uk-width-1-2">
                                    <ScInput v-model="formData.partNo">
                                        <label>Parça Kodu</label>
                                    </ScInput>
                                </div>
                                <div class="uk-width-1-2">
                                    <ScInput v-model="formData.partDimensions">
                                        <label>Boyutlar</label>
                                    </ScInput>
                                </div>
                            </div>
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
                            <ScInput :type="'number'" v-model="formData.unitPrice" @change="calculateTotal">
                                <label>Birim Fiyat</label>
                            </ScInput>
                        </div>
                        <div class="uk-child-width-1-2@m uk-grid">
                            <div>
                                <ScInput :type="'number'" v-model="formData.forexOverallTotal" :read-only="true">
                                    <label>Tutar</label>
                                </ScInput>
                            </div>
                            <div>
                                <ScInput :type="'number'" v-model="formData.overallTotal" :read-only="true">
                                    <label>TL Tutarı</label>
                                </ScInput>
                            </div>
                        </div>

                        <div class="uk-width-2-2@m">
                            <ScTextarea v-model="formData.explanation" placeholder="Açıklama"></ScTextarea>
                        </div>
                    </div>
                    <div class="uk-child-width-1-2 uk-grid">
                        <div>
                            <button type="button" @click="onSubmit" class="sc-button sc-button-primary uk-margin-medium" style="height:34px;margin-top:15px;">
                                <span :data-uk-icon="'icon:' + detailObject.id > 0 ? 'check' : 'plus'" class="uk-icon"></span> {{ detailObject.id > 0 ? 'Kaydet' : 'Ekle' }}
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>

        <div id="dlgItemDefinition" class="uk-modal" data-uk-modal stack="true">
			<div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
				<div class="uk-modal-body">
					<ItemDefinition v-if="refreshItemDialog"
						:record-id="0"
						:is-dialog="true"
						:dialog-container="'dlgItemDefinition'"
						@onItemSaved="bindItems"
						@onCancel="closeItemDefDialog"
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
import moment from '~/plugins/moment'
import axios, { AxiosInstance } from 'axios'

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ProjectCostItem',
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
        isDialog: {
            type: Boolean,
            default: false,
        },
        dialogContainer: {
            type: String,
            default: '',
        }
    },
    emits: ['onCostItemSubmit'],
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
        ItemDefinition: process.client ? () => import('~/definition_components/ItemDefinition') : null,
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
            costName: '',
			itemId: '',
            forexId: '',
            forexRate: null,
            itemName: '',
            explanation: '',
            unitPrice: null,
            quantity: null,
            netQuantity: 0,
            overallTotal: null,
            forexOverallTotal: null,
            newRecord: true,
            partNo: '',
            partDimensions: '',
		},
        refreshItemDialog: false,
        itemList: [],
        forexList: [],
	}),
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
                    costName: '',
                    itemId: '',
                    forexId: '',
                    forexCode: '',
                    forexRate: null,
                    itemName: '',
                    explanation: '',
                    unitPrice: null,
                    quantity: null,
                    netQuantity: 0,
                    overallTotal: null,
                    forexOverallTotal: null,
                    newRecord: true,
                    partNo: '',
                    partDimensions: '',
                };
            }

            try {
                this.formData.itemId = this.formData.itemId ? this.formData.itemId.toString() : null;   
                this.formData.forexId = this.formData.forexId ? this.formData.forexId.toString() : null;     
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

            this.calculateTotal();

            if (this.formData.id == 0)
                await this.selectDefaultForex();
        },
        async bindItems(){
            // fetch items for selection
            try {
                const api = useApi();
                this.itemList = (await api.get('Item')).data.map((d) => {
                    return {
                        id: d.id,
                        text: d.itemName,
                    };
                });
            } catch (error) {
                
            }
        },
        async selectDefaultForex(){
            try {
                const defForex = this.forexList.find(d => d.text == 'EUR');
                if (defForex){
                    await this.updateLiveForexRate(defForex.id);
                }
            } catch (error) {
                
            }
        },
		onSubmit(){
            const self = this;

            if (!this.formData.itemId && this.formData.costName.length == 0)
            {
                this.showNotification('Bir stok seçmelisiniz veya kalem açıklaması girmelisiniz.', false, 'error');
                return;
            }

            if (!this.formData.quantity || this.formData.quantity <= 0){
                this.showNotification('Miktar 0 dan büyük olmalıdır.', false, 'error');
                return;
            }

            // #region VALIDATE ROW DATA
            const selectedItem = this.itemList.find(d => d.id == this.formData.itemId);
            if (selectedItem)
                this.formData.itemName = selectedItem.text;
            else
                this.formData.itemName = '';

            const selectedForex = this.forexList.find(d => d.id == this.formData.forexId);
            if (selectedForex)
                this.formData.forexCode = selectedForex.text;
            else
                this.formData.forexCode = '';
            // #endregion
            
            this.$emit('onCostItemSubmit', {
                action: 'save',
                data: { ...this.formData },
            });
        },
        onCancel(){
            this.$emit('onCancel');
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

                let forexRate = 1;
                if(this.formData.forexId && this.formData.forexId > 0)
                    forexRate = this.formData.forexRate;

                this.formData.forexOverallTotal = subTotal;
                this.formData.overallTotal = this.formData.forexOverallTotal * forexRate;
            } catch (error) {
                
            }
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
        async updateLiveForexRate(val){
            const reqUri = 'https://hasanadiguzel.com.tr/api/kurgetir';

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
