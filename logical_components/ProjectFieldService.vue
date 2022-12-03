<template>
	<div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-show="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Servis Hizmeti
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-3@m uk-grid" data-uk-grid>
                        <div class="uk-width-1-3@m">
                            <ScInput v-model="formData.documentNo" :read-only="true">
                                <label>Belge No</label>
                            </ScInput>
                        </div>
                        <div class="uk-width-2-3@m uk-child-width-1-2@m uk-grid">
                            <div class="uk-width-1-2@m">
                                <ScInput v-model="formData.userName" :read-only="true">
                                    <label>Personel</label>
                                </ScInput>
                            </div>
                            <div class="uk-width-1-2@m">
                                <ScInput v-model="fServiceDate" :read-only="true">
                                    <label>Tarih</label>
                                </ScInput>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium sc-padding-remove-top">
                    <legend>
                        Yapılan İşler
                    </legend>
                    <div class="uk-margin-medium uk-margin-remove-left">
                        <div class="uk-grid">
                            <div class="uk-width-5-5@l">
                                <ProjectFieldServiceDetail
                                    :detail-object="selectedServiceDetail"
                                    :total-detail-count="details.length"
                                    :is-dialog="false"
                                />
                            </div>
                        </div>
                        
                        <client-only>
                            <Datatable
                                id="sc-dt-details-table"
                                ref="serviceDetailsTable"
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
                    <!-- <button type="button" @click="onSubmit" class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                    </button> -->
                    <button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                    </button>
                    <!-- <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                    </button> -->
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
import ProjectFieldServiceDetail from './ProjectFieldServiceDetail.vue';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { dateToStr } from '~/composable/useHelpers';

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'ProjectFieldService',
    emits: ['onServiceSaved', 'onCancel'],
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
    computed: {
        fServiceDate(){
            return dateToStr(this.formData.serviceDate);
        }
    },
	components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		Select2: process.client ? () => import('~/components/Select2') : null,
        ProjectFieldServiceDetail,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
            projectId: null,
			serviceDate: null,
            documentNo: '',
            serviceUserId: null,
            serviceStatus: 0,
            userName: '',
		},
        isMounting: false,
        details: [],
        dtOptions: {
			select: {
                style: 'single'
            },
			searching: false,
			paging: false,
		},
		dtDetailCols: [
			{ data: "lineNumber", title: "Satır No", visible: true, },
			{ data: "workExplanation", title: "Yapılan İş", visible: true, },
            { data: "startDate", title: "Başlama", visible: true, },
            { data: "endDate", title: "Bitiş", visible: true, },
		],
        selectedServiceDetail: {
            id: 0,
        }
	}),
	async mounted () {
        this.isMounting = true;
        this.formData.id = this.recordId;

		await this.bindModel();
        this.isMounting = false;
	},
	methods: {
        async bindModel(){
            const api = useApi();
            try {
                const getData = (await api.get('ProjectFieldService/' + this.formData.id)).data;
                if (getData && getData.id > 0){
                    this.formData = getData;
                    this.details = this.formData.details.map((d) => {
                        return {
                            ...d,
                            newRecord: false,
                        };
                    });
                }
                else{
                    this.details.splice(0, this.details.length);
                }

            } catch (error) {

            }
        },
		async onSubmit(){
            try {
                this.formData.details = this.details;

                const session = useUserSession();
                this.formData.plantId = session.user.plantId;

                const api = useApi();
                const postResult = (await api.post('ItemDemand', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onServiceSaved');

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
                this.$router.go(-1);
        },
        async onDelete(){
            const self = this;
            UIkit.modal.confirm('Bu servis kaydını silmek istediğinizden emin misiniz?').then(
				async function () {
					try {
                        const api = useApi();
                        const delResult = (await api.delete('ProjectFieldService/' + self.formData.id)).data;
                        if (delResult.result){
                            self.showNotification('Silme işlemi başarılı', false, 'success');
                            self.$emit('onServiceSaved');

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
        clickDetail: function (e, dt, type, indexes){
            try {
                this.selectedServiceDetail = this.details[indexes[0]];   
            } catch (error) {
                
            }
        },
        deselectDetail: function(){
            this.selectedServiceDetail = { id:0 };
        }
	},
    watch: {
        recordId: async function(newVal, oldVal) {
            this.formData.id = this.recordId;
            await this.bindModel();
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