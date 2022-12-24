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
                            <ScInput :type="'number'" v-model="formData.quantity">
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
    emits: ['onDetailSubmit'],
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
        ItemDefinition: process.client ? () => import('~/definition_components/ItemDefinition') : null,
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
            createdDate: null,
            newRecord: true,
            partNo: '',
            partDimensions: '',
		},
        itemList: [],
        refreshItemDialog: false,
	}),
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
            
            if(!this.createdDate)
                this.formData.createdDate = self.$moment().format('YYYY-MM-DD')

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
