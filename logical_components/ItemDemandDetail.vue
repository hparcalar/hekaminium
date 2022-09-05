<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-2-3@l">
            <div v-if="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Talep Kalemi
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-1@m uk-grid" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.lineNumber">
                                <label>Satır No</label>
                            </ScInput>
                        </div>
                        <div>
                            <ScInput v-model="formData.itemExplanation">
                                <label>Malzeme Açıklama</label>
                            </ScInput>
                        </div>
                        <!-- <div>
                            <ItemSelector />
                        </div> -->
                        <div>
                            <ScInput v-model="itemData.itemName" read-only="true">
                                <label>Malzeme Adı</label>
                            </ScInput>
                        </div>
                    </div>
                </fieldset>

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
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import PrettyCheck from 'pretty-checkbox-vue/check';
// import ItemSelector from '~/custom_inputs/ItemSelector.vue';
import { useApi } from '~/composable/useApi';

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
        // ItemSelector,
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
            itemExplanation: '',
            explanation: '',
            unitId: null,
            quantity: 0,
            netQuantity: 0,
			demandStatus: 0,
		},
        itemData: {
            itemName: '',
        }
	}),
	async mounted () {
        // this.formData.id = this.recordId;
        // this.formData.projectId = this.projectId;
		await this.bindModel();
	},
	methods: {
        async bindModel(){
            this.formData = this.detailObject;
            if (this.formData.id <= 0){
                this.formData.lineNumber = this.totalDetailCount + 1;
            }
        },
		async onSubmit(){
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
        async onDelete(){
            this.$emit('onDetailSubmit', {
                action: 'delete',
                data: this.formData,
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
		}
	},
    watch: {
        detailObject: async(newVal, oldVal) => {
            await this.bindModel();
        }
    }
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
