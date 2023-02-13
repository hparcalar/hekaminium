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
							Kullanıcı Tanımı
						</h4>
					</div>
					<form>
						<fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
							<legend class="uk-legend">
								Genel Bilgiler
							</legend>
							<div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
								<div>
									<ScInput v-model="formData.userCode">
										<label>Kullanıcı Kodu</label>
									</ScInput>
								</div>
								<div>
									<ScInput v-model="formData.userName">
										<label>Kullanıcı Adı</label>
									</ScInput>
								</div>
								<div>
                                    <client-only>
                                        <Select2
                                            v-model="formData.sysRoleId"
                                            :options="roleList"
                                            :settings="{ 'width': '100%', 'placeholder': 'Rol', 'allowClear': true }"
                                        ></Select2>
                                    </client-only>
								</div>
                                <div>
									<ScInput v-model="formData.password" type="password">
										<label>Parola</label>
									</ScInput>
								</div>
                                <div>
									<ScTextarea v-model="formData.explanation" placeholder="Açıklama"></ScTextarea>
								</div>
							</div>
						</fieldset>

						<div class="uk-margin-large-top">
							<button type="button" @click="onSubmit" v-show="hasViewAuth('Employee',1)"
								class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: check" class="uk-icon"></span>
							</button>
							<button type="button" @click="onCancel" class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
								<span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
							</button>
                            <button type="button" @click="onDelete" v-show="hasViewAuth('Employee',1)"
															class="sc-button sc-button-danger sc-button-medium">
								<span data-uk-icon="icon: trash" class="uk-icon"></span>
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
import { useUserSession } from '../../../composable/userSession';

if(process.client) {
	require('~/plugins/inputmask');	
}

export default {
	name: 'UserForm',
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
			userCode: '',
			userName: '',
            explanation:'',
			sysRoleId: null,
            plantId: null,
			isActive: true,
		},
		roleList: [],
	}),
	computed: {
		
	},
	async mounted () {
        const qsId = getQS('id');
        if (qsId) this.formData.id = parseInt(qsId);
        else this.formData.id = 0;

		await this.bindModel();
	},
	methods: {
        async bindModel(){
            // set default plant which belongs to new user
            const userSession = useUserSession();
            this.formData.plantId = userSession.user.plantId;

            const api = useApi();
            try {
				const rawRoleData = (await api.get('User/Role')).data;
				if (rawRoleData){
					this.roleList = rawRoleData.map((d) => {
						return  {id: d.id.toString(),
						text: d.roleName,};
					});
				}

                const getData = (await api.get('User/' + this.formData.id)).data;
                if (getData && getData.id > 0){
					getData.sysRoleId = getData.sysRoleId ? getData.sysRoleId.toString() : null;
                    this.formData = getData;
                }
            } catch (error) {
                
            }
        },
		async onSubmit(){
            try {
                const api = useApi();
                const postResult = (await api.post('User', this.formData)).data;
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
        onCancel(){
            this.$router.push('/user/member/list');
        },
        async onDelete(){

        },
				hasViewAuth(sectionKey,authCode){
            if (process.client){
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey, authCode);
            }
            return false;
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
