<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-3-3@l">
					<div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                         sc-round sc-border md-bg-grey-100
                    " style="position:relative;">
						<span class="uk-margin-right md-color-gray-600 mdi mdi-document"></span>
						<h4 class="md-color-gray-600 uk-margin-remove">
							Döküman İzleme
						</h4>

                        <div class="uk-flex uk-flex-right" style="position:absolute; right:1px; top:1px;padding-top:10px;">
                            <button 
                                :class="{ 'filter-selected': isPdfFiltered }"
                                type="button" v-if="formData.viewCategory == 3 || formData.viewCategory == 4" style="padding-top:1px;" @click="applyFilterFileType('application/pdf')" 
                                    class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                    <img v-rjs="require('~/assets/img/pdf.png')" :src="pdfLogo" width="25" height="25" />
                            </button>
                            <button 
                                :class="{ 'filter-selected': isExcelFiltered }"
                                type="button" v-if="formData.viewCategory == 3 || formData.viewCategory == 4" style="padding-top:1px;"
                                 @click="applyFilterFileType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')" 
                                    class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                    <img v-rjs="require('~/assets/img/excel.png')" :src="excelLogo" width="25" height="25" />
                            </button>
                            <button 
                                :class="{ 'filter-selected': isDxfFiltered }"
                                type="button" v-if="formData.viewCategory == 3 || formData.viewCategory == 4" style="padding-top:1px;" @click="applyFilterFileType('image/x-dxf')" 
                                    class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                    <img v-rjs="require('~/assets/img/dxf.png')" :src="dxfLogo" width="25" height="25" />
                            </button>
                            <button 
                                :class="{ 'filter-selected': isImgFiltered }"
                                type="button" v-if="formData.viewCategory == 3 || formData.viewCategory == 4" style="padding-top:1px;" @click="applyFilterFileType('img')" 
                                    class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                    <img v-rjs="require('~/assets/img/img.png')" :src="imgLogo" width="25" height="25" />
                            </button>
                            <button 
                                type="button" v-if="formData.viewCategory == 0" @click="toggleProjectFilter" 
                                    class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                    <span :data-uk-icon="'icon: '+ (formData.showAllProjects ? 'check' : 'list') +' '" class="uk-icon"></span> {{  formData.showAllProjects ? 'Onaylı Projeler' : 'Tüm Projeler'  }}
                            </button>
                        </div>
					</div>
					<div>
                        <div class="viewer-header">
                            <button 
                            style="position:absolute; left:75px; top:1px;"
                            type="button" v-if="formData.viewCategory > 0" @click="backFromView" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                <span data-uk-icon="icon: arrow-left" class="uk-icon"></span> Geri
                            </button>
                            <button 
                            style="position:absolute; left:1px; top:1px;"
                            type="button" v-if="formData.viewCategory > 0" @click="homeView" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                <span data-uk-icon="icon: home" class="uk-icon"></span> 
                            </button>
                            <div>
                                <h6 style="text-align:center;margin-bottom:0px;">
                                    {{ formData.viewCategory == 1 || formData.viewCategory == 2 || formData.viewCategory == 3 || formData.viewCategory == 4 ? selectedProject.projectName + ' / ': '' }} 
                                    {{ formData.viewCategory == 2 ? selectedCategory.itemName + ' / ': '' }} 
                                    {{ formData.viewCategory == 3 ? selectedCategory.itemName + ' / ' + selectedElement.partDimensions + ' / ': '' }} 
                                    {{ viewerTitle }}
                                </h6>
                            </div>
                            <button 
                            style="position:absolute; right:1px; top:1px;"
                            type="button" v-if="formData.viewCategory > 0 && formData.viewCategory != 4" @click="switchToProjectDocView()" class="sc-button sc-button-default sc-button-medium">
                                <span data-uk-icon="icon: document" class="uk-icon"></span> Proje Dosyaları
                            </button>
                        </div>
                        <div class="viewer-container">
                            <!-- project view -->
                            <div v-if="formData.viewCategory == 0" class="uk-grid uk-child-width-1-2@m">
                                <div v-for="(pr, prIndex) in projectList" :key="prIndex" style="margin-top:5px;">
                                    <button type="button" style="width:100%;height:50px;" @click="switchToCategoryView(pr)"
                                        class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                                        {{ (prIndex + 1).toString() + '. ' }} {{  pr.projectName  }}
                                    </button>
                                </div>
                            </div>

                            <!-- category view -->
                            <div v-if="formData.viewCategory == 1" class="uk-grid uk-child-width-1-2@m">
                                <div v-for="(cat, catIndex) in categoryList" :key="catIndex" style="margin-top:5px;">
                                    <button type="button" style="width:100%;height:50px;" @click="switchToElementView(cat)"
                                        class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                        {{ (catIndex + 1).toString() + '. ' }} {{  cat.itemName  }}
                                    </button>
                                </div>
                            </div>

                            <!-- element view -->
                            <div v-if="formData.viewCategory == 2" class="uk-grid uk-child-width-1-2@m">
                                <div v-for="(elm, elIndex) in elementList" :key="elIndex" style="margin-top:5px;">
                                    <button type="button" style="width:100%;height:60px;text-transform: none !important;" @click="switchToDocumentView(elm)"
                                        class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                        {{ (elIndex + 1).toString() + '. ' }} 
                                        {{  (elm.partNo && elm.partNo.length > 0 ? elm.partNo + ' / ' : '') 
                                            + elm.partDimensions + ' / ' + elm.quantity + ' adet'  }}
                                        <div v-if="elm.itemExplanation && elm.itemExplanation.length > 0" style="margin-top:0px;font-size:small;font-weight:normal;">
                                            <i style="float:right;">{{ elm.itemExplanation }}</i>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <!-- document view -->
                            <div v-if="formData.viewCategory == 3" class="uk-grid uk-child-width-1-2@m">
                                <div v-for="(doc, docIndex) in documentList" :key="docIndex" style="margin-top:5px;position: relative;">
                                    <img v-show="doc.fileType == 'application/pdf'" 
                                        v-rjs="require('~/assets/img/pdf.png')" :src="pdfLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'" 
                                        v-rjs="require('~/assets/img/excel.png')" :src="excelLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType == 'image/x-dxf'" 
                                        v-rjs="require('~/assets/img/dxf.png')" :src="dxfLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType && doc.fileType != 'image/x-dxf' && doc.fileType.includes('image/')" 
                                        v-rjs="require('~/assets/img/img.png')" :src="imgLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <button type="button" style="width:100%;height:60px;text-transform: none !important;" @click="showDocument(doc)"
                                        class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                        {{ (docIndex + 1).toString() + '. ' }} {{  (doc.partNo && doc.partNo.length > 0 ? doc.partNo : selectedElement.partNo)
                                             + (doc.partHeight ? ' / ' + doc.partHeight + ' mm' + ' / ' : '') + (doc.partQuantity ? doc.partQuantity + ' adet / ' : '') + (doc.partType ?? '')  }}
                                        <!-- <div v-if="selectedElement.itemExplanation && selectedElement.itemExplanation.length > 0" style="margin-top:0px;font-size:small;font-weight:normal;">
                                            <i style="float:right;">{{ selectedElement.itemExplanation }}</i>
                                        </div> -->
                                    </button>
                                </div>
                            </div>

                            <!-- project files view -->
                            <div v-if="formData.viewCategory == 4" class="uk-grid uk-child-width-1-2@m">
                                <div v-for="(doc, docIndex) in projectDocumentList" :key="docIndex" style="margin-top:5px; position: relative;">
                                    <img v-show="doc.fileType == 'application/pdf'" 
                                        v-rjs="require('~/assets/img/pdf.png')" :src="pdfLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'" 
                                        v-rjs="require('~/assets/img/excel.png')" :src="excelLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType == 'image/x-dxf'" 
                                        v-rjs="require('~/assets/img/dxf.png')" :src="dxfLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <img v-show="doc.fileType && doc.fileType != 'image/x-dxf' && doc.fileType.includes('image/')" 
                                        v-rjs="require('~/assets/img/img.png')" :src="imgLogo" style="position:absolute;left:25px;top:2px;" width="15" height="25" />
                                    <button type="button" style="width:100%;height:50px;" @click="showProjectDocument(doc)"
                                        class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                                        {{ (docIndex + 1).toString() + '. ' }} {{  doc.title + ' / ' + doc.explanation  }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>

        <!-- full screen pdf viewer -->
        <div
            class="uk-margin-medium uk-margin-remove-left" style="visible: false;position: absolute; top:-5000; left:-5000;">
            <!-- <img :src="'data:image/png;base64,' + formData.partBase64" style="width:100%;" /> -->
            <vue-pdf-app 
                v-show="formData.showPreview == true && formData.previewData && formData.previewData.length > 0"
                class="preview-pdf"
                :pdf="getArrayBufferContent"
                :page-number="1"
                ></vue-pdf-app>
        </div>

        <!-- dxf viewer -->
        <!-- <DxfViewerPage :dxfUrl="dxfUrl">
            <div v-if="inputFile === null"
                 class="centralUploader row justify-center items-center" >
                <div class="col-auto" style="width: 300px;">
                    <q-file filled bottom-slots clearable
                            :value="inputFile" label="Select file or drag here"
                            accept=".dxf"
                            class="col" @input="_OnFileSelected" @clear="_OnFileCleared">
                        <template v-slot:before>
                            <q-icon name="folder_open" size="xl" />
                        </template>
                        <template v-slot:hint>
                            <span>File is processed locally in your browser</span>
                        </template>
                    </q-file>
                </div>
                <div class="col-auto q-mx-lg q-pb-lg">
                    <q-btn label="Load URL" @click="urlDialog = true"/>
                </div>
            </div>
        </DxfViewerPage> -->
	</div>
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import { useApi } from '~/composable/useApi';
import { base64ToArrayBuffer } from '~/composable/useHelpers';
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";
// import DxfViewerPage from "~/components/DxfViewerPage";

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'DocView',
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
        VuePdfApp,
        // DxfViewerPage,
		ScInput,
		ScTextarea,
		PrettyRadio
	},
	data: () => ({
        dxfUrl: null,
            inputFile: null,
            isLocalFile: false,
            aboutDialog: false,
            urlDialog: false,
            inputUrl: null,
		formData: {
            projectId: null,
            itemId: null,
            elementId: null,
            viewCategory: 0,
            showPreview: false,
            previewData: null,
            showAllProjects: false,
        },
        selectedProject: {},
        selectedCategory: {},
        selectedElement: {},
        allProjectList: [],
        projectList: [],
        categoryList: [],
        elementList: [],
        documentList: [],
        projectDocumentList: [],
        documentTypeFilter: [],
        pdfLogo: require('~/assets/img/pdf.png'),
        excelLogo: require('~/assets/img/excel.png'),
        dxfLogo: require('~/assets/img/dxf.png'),
        imgLogo: require('~/assets/img/img.png'),
	}),
	computed: {
		viewerTitle(){
            let categoryTitle = '';

            switch (this.formData.viewCategory) {
                case 0:
                    categoryTitle = 'Proje Seçimi';
                    break;
                case 1:
                    categoryTitle = 'Kategori Seçimi';
                    break;
                case 2:
                    categoryTitle = 'Kategori Detayları';
                    break;
                case 3:
                    categoryTitle = 'Dökümanlar';
                    break;
                case 4:
                    categoryTitle = 'Proje Dosyaları';
                    break;
                default:
                    break;
            }

            return categoryTitle;
        },
        getArrayBufferContent(){
            if (this.formData.previewData && this.formData.previewData.length > 0){
                return base64ToArrayBuffer(this.formData.previewData).buffer;
            }
            return null;
        },
        isPdfFiltered(){ return this.documentTypeFilter.includes('application/pdf'); },
        isExcelFiltered() { return this.documentTypeFilter.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); },
        isDxfFiltered() { return this.documentTypeFilter.includes('image/x-dxf'); },
        isImgFiltered() { return this.documentTypeFilter.includes('img'); }
	},
	async mounted () {
		await this.bindModel();
	},
	methods: {
        _OnFileSelected(file) {
            if (!file) {
                this._OnFileCleared()
                return
            }
            if (this.dxfUrl && this.isLocalFile) {
                URL.revokeObjectURL(this.dxfUrl)
            }
            this.isLocalFile = true
            this.inputFile = file
            this.dxfUrl = URL.createObjectURL(file)
        },

        _OnFileCleared() {
            if (this.inputFile) {
                this.inputFile = null
                URL.revokeObjectURL(this.dxfUrl)
                this.dxfUrl = null
                this.$q.notify({
                    type: "info",
                    message: "File cleared"
                })
            }
        },

        _OnUrl() {
            if (this.inputUrl === null) {
                return
            }
            const url = this.inputUrl.trim()
            if (url === "") {
                return
            }
            if (this.dxfUrl && this.isLocalFile) {
                URL.revokeObjectURL(this.dxfUrl)
            }
            this.isLocalFile = false
            this.inputFile = new File(["remote_file"], url, { type: "text/plain" })
            this.dxfUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url)
        },
        async bindModel(){
            const api = useApi();
            try {
                this.allProjectList = (await api.get('Project/WithDocs')).data;
                this.applyProjectFilter();
            } catch (error) {
                
            }
        },
        applyProjectFilter(){
            if (this.formData.showAllProjects)
                this.projectList = this.allProjectList;
            else
                this.projectList = this.allProjectList.filter(d => d.projectStatus == 3);
        },
        toggleProjectFilter(){
            this.formData.showAllProjects = !this.formData.showAllProjects;
            this.applyProjectFilter();
        },
        applyFilterFileType(fileType){
            try {
                if (this.documentTypeFilter.includes(fileType)){
                    const ix = this.documentTypeFilter.indexOf(fileType);
                    this.documentTypeFilter.splice(ix, 1);
                }
                else{
                    this.documentTypeFilter.push(fileType);
                }
            } catch (error) {
                
            }

            this.makeVisualFilter();
        },
        async makeVisualFilter(){
            if (this.formData.viewCategory == 3){
                await this.bindDocuments();
            }
            else if (this.formData.viewCategory == 4){
                await this.bindProjectDocuments();
            }
        },
        async bindCategories(){
            const api = useApi();

            try {
                this.categoryList = (await api.get('Project/' + this.selectedProject.id + '/DocumentCategories')).data;
            } catch (error) {
                
            }
        },
        async bindElements(){
            const api = useApi();

            try {
                this.elementList = (await api.get('Project/' + this.selectedProject.id + '/ElementsOfCategory/' + this.selectedCategory.id)).data;
            } catch (error) {
                
            }
        },
        async bindDocuments(){
            const api = useApi();

            try {
                const data = (await api.get('Project/' + this.selectedProject.id + '/Documents/' + this.selectedElement.id)).data;

                if (this.documentTypeFilter.length > 0){
                    const filterList = this.documentTypeFilter;
                    this.documentList = data.filter(d => 
                        filterList.includes(
                            (d.fileType.includes('image/') && d.fileType != 'image/x-dxf' ? 'img' : d.fileType)
                        )
                    );
                }
                else
                    this.documentList = data;
                
            } catch (error) {
                
            }
        },
        async bindProjectDocuments(){
            const api = useApi();

            try {
                const data = (await api.get('Attachment/OfRecord/1/' + this.selectedProject.id)).data;

                if (this.documentTypeFilter.length > 0){
                    const filterList = this.documentTypeFilter;
                    this.projectDocumentList = data.filter(d => 
                        filterList.includes(
                            (d.fileType.includes('image/') && d.fileType != 'image/x-dxf' ? 'img' : d.fileType)
                        )
                    );
                }
                else
                    this.projectDocumentList = data;
            } catch (error) {
                
            }
        },
        async switchToCategoryView(project){
            this.selectedProject = project;
            this.formData.projectId = project.id;
            await this.bindCategories();

            this.formData.viewCategory = 1;
        },
        async switchToElementView(category){
            this.selectedCategory = category;
            this.formData.itemId = category.id;
            await this.bindElements();

            this.formData.viewCategory = 2;
        }, 
        async switchToDocumentView(element){
            this.selectedElement = element;
            this.formData.elementId = element.id;
            await this.bindDocuments();

            this.formData.viewCategory = 3;
        },
        async switchToProjectDocView(){
            await this.bindProjectDocuments();

            this.formData.viewCategory = 4;
        },
        async downloadDocument(fileData){
            const self = this;
            var blob = new Blob([base64ToArrayBuffer(fileData.fileContent)], { type: fileData.fileType });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileData.fileName;
            link.click();
        },
        async showDocument(doc){
            if (doc.fileType){
                if (!doc.fileType)
                    doc.fileType = 'application/pdf';

                const api = useApi();
                if (doc.attachmentId && doc.attachmentId > 0){
                    try {
                        const atcData = (await api.get('Attachment/' + doc.attachmentId)).data;
                        if (atcData && atcData.fileContent != null && atcData.fileContent.length > 0)
                            doc.partBase64 = atcData.contentBase64;
                            doc.partFile = atcData.fileContent;
                    } catch (error) {
                        
                    }
                }
                else if (doc.id > 0){
                    try {
                        const partData = (await api.get('Project/' + this.selectedProject.id + '/PartDocument/' + doc.id)).data;
                        if (partData && partData.partFile != null && partData.partFile.length > 0){
                            doc.partBase64 = partData.partBase64;
                            doc.partFile = partData.partFile;
                        }
                    } catch (error) {
                        
                    }
                }

                var byteBuffer = base64ToArrayBuffer(doc.partBase64);

                if (doc.fileType == 'application/pdf'){
                    if (byteBuffer.length >= 4){
                        if (!(byteBuffer[0] == 37 && byteBuffer[1] == 80 && byteBuffer[2] == 68 && byteBuffer[3] == 70)){
                            this.showNotification('Bu dosya PDF formatında olmadığı için görüntülenemiyor.', false, 'error');
                            return;
                        }
                        // 0x25 0x50 0x44 0x46 pdf first bytes
                    }

                    this.formData.previewData = doc.partBase64;
                    this.formData.showPreview = true;

                    setTimeout(function(){
                        $('#presentationMode').trigger('click');
                    }, 500);
                }
                else if (doc.fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
                    this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                }
                else if (doc.fileType == 'image/x-dxf'){
                    this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                }
                else if (doc.fileType.includes('image/')){
                    this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                }
            }
        },
        async showProjectDocument(doc){
            if (doc.fileType){
                if (!doc.fileType)
                    doc.fileType = 'application/pdf';

                    try {
                        const api = useApi();
                        const atcData = (await api.get('Attachment/' + doc.id)).data;
                        if (atcData && atcData.fileContent != null && atcData.fileContent.length > 0)
                            doc.partBase64 = atcData.contentBase64;
                            doc.partFile = atcData.fileContent;
                    } catch (error) {
                        
                    }

                    if (doc.partFile == null){
                        this.showNotification('İçeriği boş dosya görüntülenemez.', false, 'error');
                        return;
                    }

                    var byteBuffer = base64ToArrayBuffer(doc.partBase64);

                    if (doc.fileType == 'application/pdf'){
                        if (byteBuffer.length >= 4){
                            if (!(byteBuffer[0] == 37 && byteBuffer[1] == 80 && byteBuffer[2] == 68 && byteBuffer[3] == 70)){
                                this.showNotification('Bu dosya PDF formatında olmadığı için görüntülenemiyor.', false, 'error');
                                return;
                            }
                            // 0x25 0x50 0x44 0x46 pdf first bytes
                        }

                        this.formData.previewData = doc.partBase64;
                        this.formData.showPreview = true;

                        setTimeout(function(){
                            $('#presentationMode').trigger('click');
                        }, 500);
                    }
                    else if (doc.fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
                        this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                    }
                    else if (doc.fileType == 'image/x-dxf'){
                        this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                    }
                    else if (doc.fileType.includes('image/')){
                        this.downloadDocument({ fileContent: doc.partFile, fileType: doc.fileType, fileName: 'document' });
                    }
            }
            // var byteBuffer = base64ToArrayBuffer(doc.contentBase64);
            // if (byteBuffer.length >= 4){
            //     if (!(byteBuffer[0] == 37 && byteBuffer[1] == 80 && byteBuffer[2] == 68 && byteBuffer[3] == 70)){
            //         this.showNotification('Bu dosya PDF formatında olmadığı için görüntülenemiyor.', false, 'error');
            //         return;
            //     }
            //     // 0x25 0x50 0x44 0x46 pdf first bytes
            // }

            // this.formData.previewData = doc.contentBase64;
            // this.formData.showPreview = true;

            // setTimeout(function(){
            //     $('#presentationMode').trigger('click');
            // }, 500);
        },
        backFromView(){
            if (this.formData.viewCategory == 4)
                this.formData.viewCategory = 1;
            else
                this.formData.viewCategory--;
        },
        homeView(){
            this.formData.viewCategory = 0;
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
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
<style type="text/css">
.viewer-header{
    background-color:rgba(99, 177, 237, 0.5);
    padding:8px;
    margin-bottom:15px;
    margin-left:0px !important;
    border:1px solid rgb(99, 177, 237);
    position: relative;
}

.filter-selected{
    background-color:rgba(177, 180, 183, 0.5) !important;
}
</style>