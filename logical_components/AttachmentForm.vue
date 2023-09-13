<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div class="uk-margin-medium uk-margin-remove-left">
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <div class="uk-child-width-1-3@m uk-grid" data-uk-grid>
                        <div class="uk-width-1-2@m">
                            <!-- <ScInput v-model="formData.title">
                                <label>Başlık</label>
                            </ScInput> -->

                            <client-only>
                                <Select2
                                    v-model="selectedCategory"
                                    :options="attachmentCategories"
                                    :settings="{ 'width': '100%', 'placeholder': 'Döküman Tipi', 'allowClear': true }"
                                ></Select2>
                            </client-only>
                        </div>
                        <div class="uk-width-1-2@m">
                            <ScInput v-model="formData.explanation">
                                <label>Açıklama</label>
                            </ScInput>
                        </div>
                        <div class="uk-width-1-2@m">
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
                        <div class="uk-width-1-2@m">
                            <ScInput v-model="formData.fileName" :read-only="true">
                                <label>Dosya Adı</label>
                            </ScInput>
                        </div>
                        <div class="uk-width-1-2@m">
                            <ScInput v-model="formData.fileType" :read-only="true">
                                <label>Dosya Türü</label>
                            </ScInput>
                        </div>
                        <div v-if="formData.id > 0 && formData.fileContent && formData.fileContent.length > 0" class="uk-width-1-2@m">
                            <button type="button" @click="onDownload" class="sc-button sc-button-success sc-button-small uk-margin-small-right">
                                <span data-uk-icon="icon: download" class="uk-margin-small-right uk-icon"></span>
                                Dosyayı İndir
                            </button>
                        </div>

                        <!-- file preview -->
                        <div v-show="formData.fileContent && formData.fileContent.length > 0" class="uk-width-2-2@m">
                            <img v-if="formData.fileType.startsWith('image')" class="preview-img"
                                @dblclick="showFullImage"
                                :src="'data:'+ formData.fileType +';base64,' + formData.fileContent"
                            />
                            <vue-pdf-app 
                                v-show="formData.fileType.includes('pdf') && getArrayBufferContent != null" 
                                class="preview-pdf"
                                :pdf="getArrayBufferContent"
                                :page-number="1"
                                ></vue-pdf-app>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div v-show="isDialog == true" class="uk-margin-large-top">
                <button type="button" @click="createNewAttachment" class="sc-button sc-button-success sc-button uk-margin-small-right">
                    <span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
                    Yeni
                </button>
                <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button uk-margin-small-right">
                    <span data-uk-icon="icon: check" class="uk-margin-small-right uk-icon"></span>
                    Kaydet
                </button>
                <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button uk-margin-small-right">
                    <span data-uk-icon="icon: arrow-left" class="uk-margin-small-right uk-icon"></span>
                    Kapat
                </button>
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
import { base64ToArrayBuffer } from '~/composable/useHelpers';
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'AttachmentForm',
    emits: ['onSubmit','onCancel'],
    props: {
        recordObject: {
            type: Object,
            default: null,
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
            recordType: 0,
            recordId: 0,
            fileContent: null,
            isOfferDoc: false,
            fileType: '',
            fileExtension: '',
            title: 'Teknik Resim',
            explanation: '',
        },
        selectedCategory: null,
        attachmentCategories: [],
	}),
	computed: {
        getArrayBufferContent(){
            if (this.formData.fileContent && this.formData.fileContent.length > 0)
                return base64ToArrayBuffer(this.formData.fileContent).buffer;
            return null;
        },
	},
	async mounted () {
		await this.bindModel();
	},
    watch: {
        recordObject: {
            handler: async function(oldVal, newVal){
                await this.bindModel();
            },
            deep: true,
        }
    },
	methods: {
        async bindModel(){
            const api = useApi();
            try {
                this.attachmentCategories = (await api.get('Attachment/Category')).data
                    .map((d) => {
                        return {
                            ...d,
                            id: d.id,
                            text: d.categoryName,
                        };
                    });

                const attachmentData = (await api.get('Attachment/' + this.recordObject.id)).data;
                if (attachmentData && attachmentData.id > 0)
                    this.formData = attachmentData;

                if (this.formData.title && this.formData.title.length > 0){
                    const foundElement = this.attachmentCategories.find(d => d.categoryName == this.formData.title);
                    if (foundElement){
                        this.selectedCategory = foundElement.id;
                    }
                }
            } catch (error) {

            }
        },
        createNewAttachment(){
            const self = this;

            this.formData = {
                ...self.formData,
                id: 0,
                title: 'Teknik Resim',
                fileContent: null,
                fileType: '',
                fileName: '',
                explanation: '',
            };

            if (this.formData.title && this.formData.title.length > 0){
                const foundElement = this.attachmentCategories.find(d => d.categoryName == this.formData.title);
                if (foundElement){
                    this.selectedCategory = foundElement.id;
                }
            }

            this.recordObject.id = 0;
        },
        async onDownload(){
            const self = this;
            var blob = new Blob([base64ToArrayBuffer(self.formData.fileContent)], { type: self.formData.fileType });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = self.formData.fileName;
            link.click();
        },
        onCancel(){
            if (this.isDialog){
                this.$emit('onCancel');
            }
        },
        async onSubmit(){
            try {
                const api = useApi();

                // assign parameter attributes
                if (this.recordObject.id > 0)
                    this.formData.id = this.recordObject.id;
                this.formData.recordType = this.recordObject.recordType;
                this.formData.recordId = this.recordObject.recordId;
                this.formData.isOfferDoc = this.recordObject.isOfferDoc;
                if (this.selectedCategory && this.selectedCategory.toString() != '0'){
                    this.formData.title = this.attachmentCategories.find(d => parseInt(d.id) == parseInt(this.selectedCategory)).categoryName;
                }

                // save attachment headers first
                const postResult = await api.post('Attachment',{...this.formData, fileContent: null, })
                if (postResult.data.result) {
                    this.formData.id = postResult.data.recordId

                    // upload file and update attachment content
                    if (this.formData.fileContent != null && postResult.data.recordId > 0) {
                        let postFormData = new FormData()
                        postFormData.append('fileData', this.formData.fileContent)
                        this.showNotification('Dosya sunucuya yükleniyor. Lütfen bekleyiniz.', false, 'info', true)

                        const postFileResult = await api.post(
                        'Attachment/Upload/' + this.formData.id,
                        postFormData,
                        {
                            headers: {
                            'Content-Type': 'multipart/form-data',
                            },
                        }
                        )

                        UIkit.notification.closeAll();

                        if (postFileResult.data.result) {
                            this.showNotification('Dosya başarıyla yüklendi.', false, 'success');
                            this.$emit('onSubmit');
                        } 
                        // else this.showNotification('Dosyayı karşıya yüklerken bir hata oluştu.', false, 'error');
                    }
                    await this.bindModel();
                    
                } else this.showNotification(postResult.data.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification(error, false, 'error');
            }
        },
        async onDelete(){
            try {
                const api = useApi();

            } catch (error) {
                
            }
        },
        onFileSelected(event){
            if (event.target.files && event.target.files.length > 0) {
                const fileData = event.target.files[0];
                this.formData.fileContent = fileData;
            } else {
                this.formData.fileContent = null;
            }
        },
        showFullImage(){
            var image = new Image();
            image.src = 'data:'+ this.formData.fileType +';base64,' + this.formData.fileContent;

            var w = window.open("");
            w.document.write(image.outerHTML);
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