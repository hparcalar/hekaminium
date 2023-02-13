<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex-center uk-grid" data-uk-grid>
				<div class="uk-width-2-3@l">
					<div class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                         sc-round sc-border md-bg-grey-100
                    ">
						<span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
						<h4 class="md-color-gray-600 uk-margin-remove">
							İzinler
						</h4>
					</div>
					<form>
						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                            <legend>Personel: {{ permitUserName }}</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div class="uk-width-2-2@m">
									<ScInput v-model="formData.staffPermitExplanation">
										<label>Açıklama</label>
									</ScInput>
								</div>
                                <div>
                                    <ScInput v-model="formData.startDate" 
                                        :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr mode="outline">
                                        <label>Başlangıç Tarihi</label>
                                    </ScInput>
                                </div>
                                <div>
                                    <ScInput v-model="formData.endDate" 
                                        :config="{wrap:true, dateFormat: 'Y-m-d'}" v-flatpickr mode="outline">
                                        <label>Bitiş Tarihi</label>
                                    </ScInput>
                                </div>
							</div>
						</fieldset>

						<div class="uk-margin-large-top">
							<button type="button" @click="onSubmit"
                                class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: check" class="uk-icon"></span>
							</button>
							<button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
							</button>
                            <button type="button" @click="onDelete" v-show="hasViewAuth('StaffPermit',2)"
                                class="sc-button sc-button-danger sc-button-medium">
								<span data-uk-icon="icon: trash" class="uk-icon"></span>
							</button>

                            <button v-if="hasViewAuth('StaffPermit',1) && formData.permitStatus == 0 && formData.id > 0" type="button" @click="approvePermit" class="sc-button sc-button-success sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: check" class="uk-icon"></span>Onayla
							</button>
						</div>
					</form>
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
import { getQS } from '~/composable/useHelpers';
import { useUserSession } from '~/composable/userSession';
import moment from '~/plugins/moment'

if(process.client) {
	require('~/plugins/inputmask');	
    require('~/plugins/flatpickr');
}

export default {
	name: 'FirmForm',
	components: {
		Select2: process.client ? () => import('~/components/Select2') : null,
		ScInput,
		ScTextarea,
		PrettyRadio,
        PrettyCheck
	},
	data: () => ({
		formData: {
            id: 0,
			staffId: 0,
			startDate: null,
            endDate: null,
            staffPermitExplanation: null,
			permitStatus: 0,
		},
        categories: [],
	}),
	computed: {
		permitUserName(){
            if(process.client){
                const session = useUserSession();
                return this.formData.userName && this.formData.userName.length > 0 ?
                    this.formData.userName : session.user.name;
            }
            return '';
        },
	},
	async mounted () {
        const qsId = getQS('id');
        if (qsId) this.formData.id = parseInt(qsId);
        else this.formData.id = 0;

		await this.bindModel();
	},
	methods: {
        async bindModel(){

            const api = useApi();
            try {
                const getData = (await api.get('StaffPermit/byId/' + this.formData.id)).data;   
                if (getData && getData.id > 0){
                    this.formData = getData;

                    if (getData.startDate && getData.startDate.length > 0){
                        getData.startDate = this.$moment(getData.startDate).format('YYYY-MM-DD');
                    }

                    if (getData.endDate && getData.endDate.length > 0){
                        getData.endDate = this.$moment(getData.endDate).format('YYYY-MM-DD');
                    }

                }
            } catch (error) {
                
            }
        },
		async onSubmit(){
            try {
                const api = useApi();
                const postResult = (await api.post('StaffPermit', this.formData)).data;
                if (postResult.result){
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;

                    this.$router.go(-1);
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
            }
        },
        async approvePermit(){
            try {
                const self = this;
                const api = useApi();
                const postResult = (await api.post('StaffPermit/ApprovePermit', { id: self.formData.id })).data;
                if (postResult.result){
                    this.showNotification('Onay işlemi başarılı', false, 'success');
                    this.formData.id = postResult.recordId;

                    await this.bindModel();
                }
                else
                    this.showNotification(postResult.errorMessage, false, 'error');
            } catch (error) {
                this.showNotification('Bir hata oluştu.', false, 'error');
            }
        },
        onCancel(){
            this.$router.push('/staffpermit/list');
        },
        async onDelete(){
            const self = this;
            UIkit.modal.confirm('Bu izni silmek istediğinizden emin misiniz?').then(
				async function () {
					try {
                        const api = useApi();
                        const delResult = (await api.delete('StaffPermit/' + self.formData.id)).data;
                        if (delResult.result){
                            self.showNotification('Silme işlemi başarılı', false, 'success');

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
        hasViewAuth(sectionKey,authCode){
			if (process.client){
				const session = useUserSession();
				if (session && session.checkAuthSection)
					return session.checkAuthSection(sectionKey,authCode);
			}
			return false;
		},
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
