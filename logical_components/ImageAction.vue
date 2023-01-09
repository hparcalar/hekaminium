<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-show="preventUpload == false" class="uk-margin-medium uk-margin-remove-left">
                <div class="sc-uploader-btn">
                    <input
                        type="file"
                        placeholder=""
                        autocomplete=""
                        accept="*/*"
                        class="sc-uploader-input"
                        @change="onFileSelected"
                    />
                </div>
            </div>
            <div v-show="isDialog == true" class="uk-margin-large-top">
                <button v-show="preventUpload == false" type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-large uk-margin-small-right">
                    <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                    Kaydet
                </button>
                <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-large uk-margin-small-right">
                    <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
                    Kapat
                </button>
            </div>
            <div v-show="formData && formData.partBase64 && formData.partBase64.length > 0 && (!formData.partType || formData.partType.length == 0 || formData.partType == 'application/pdf')" 
                class="uk-margin-medium uk-margin-remove-left uk-width-2-2@m">
                <!-- <img :src="'data:image/png;base64,' + formData.partBase64" style="width:100%;" /> -->
                <vue-pdf-app 
                    v-show="formData && formData.partBase64 && formData.partBase64.length > 0"
                    class="preview-pdf"
                    :pdf="getArrayBufferContent"
                    :page-number="1"
                    ></vue-pdf-app>
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
import { blobToBase64, base64ToArrayBuffer } from '~/composable/useHelpers';
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ImageAction',
    emits: ['onSubmit','onCancel'],
    props: {
        previewData: {
            type: Object,
            default: null,
        },
        preventUpload: {
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
        },
    },
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
        VuePdfApp,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
        formData: {
            id: 0,
            partBase64: '',
            partType: '',
            partFile: null,
        }
	}),
	computed: {
        getArrayBufferContent(){
            if ((!this.formData.partType || this.formData.partType.length == 0 || this.formData.partType == 'application/pdf') 
                && this.formData.partBase64 && this.formData.partBase64.length > 0)
                return base64ToArrayBuffer(this.formData.partBase64).buffer;
            return null;
        },
	},
	async mounted () {
		this.bindModel();
	},
    watch: {
        previewData: { handler:function(newVal, oldVal){
            this.bindModel();
            // this.$forceUpdate();
        },
        deep:true,
        },
    },
	methods: {
        bindModel(){
            console.log(this.previewData);
            if (this.previewData){
                this.formData.partBase64 = this.previewData.partBase64;
                this.formData.partType = this.previewData.fileType;
            }
            else {
                this.formData.partBase64 = null;
                this.formData.partType = '';
            }
        },
        
        onCancel(){
            if (this.isDialog){
                this.$emit('onCancel');
            }
        },
        async onSubmit(){
            try {
                this.$emit('onSubmit', this.formData);
            } catch (error) {
                this.showNotification(error, false, 'error');
            }
        },
        async onFileSelected(event){
            if (event.target.files && event.target.files.length > 0) {
                const fileData = event.target.files[0];
                const fType = event.target.files[0].type;
                this.formData.partBase64 = (await blobToBase64(fileData))
                    .replace('data:image/jpeg;base64,', '')
                    .replace('data:application/pdf;base64,', '')
                    .replace('data:image/png;base64,', '')
                    .replace('data:image/jpg;base64,', '')
                    .replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', '');
                this.formData.partType = fType;
            } else {
                this.formData.partBase64 = null;
                this.formData.partType = '';
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
	},
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
    @import "~scss/plugins/datatables";
</style>
<style type="text/css">
.preview-img{
    height:400px;
}
.preview-pdf{
    width:100%;
    height:400px;
}
</style>