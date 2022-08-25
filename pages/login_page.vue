<template>
	<div class="uk-flex uk-flex-center uk-flex-middle sc-login-page-wrapper">
		<div class="uk-width-2-3@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl uk-margin-auto-vertical">
			<ScCard>
				<ScCardBody>
					<div class="sc-login-page-logo">
						<img v-rjs="require('~/assets/img/login-logo.png')" :src="appLogo" alt="">
					</div>
					<div class="sc-login-page-logo sc-login-page-logo-light">
						<img v-rjs="require('~/assets/img/login-logo.png')" :src="appLogoLight" alt="">
					</div>
					<div id="sc-login-form" class="sc-toggle-login-register sc-toggle-login-password">
						<div class="sc-login-page-inner">
							<div class="uk-margin-medium">
								<ScInput v-model="loginData.plantCode">
									<label>
										İşletme Kodu
									</label>
								</ScInput>
							</div>
							<div class="uk-margin-medium">
								<ScInput v-model="loginData.login">
									<label>
										Kullanıcı Adı
									</label>
								</ScInput>
							</div>
							<div class="uk-margin-medium">
								<ScInput v-model="loginData.password" type="password">
									<label>
										Parola
									</label>
								</ScInput>
								<!-- <div class="uk-margin-small-top uk-text-small uk-text-right@s">
									<a href="javascript:void(0)" class="sc-link" data-uk-toggle="target: .sc-toggle-login-password; animation: uk-animation-scale-up">
										Forgot Password?
									</a>
								</div> -->
							</div>
							<div class="uk-margin-large-top">
								<button type="button" @click="tryLogin" class="sc-button sc-button-large sc-button-block sc-button-primary"
								style="background-color: #326295;text-transform: none;">
									Giriş Yap
								</button>
								<!-- <div class="uk-child-width-1-3 uk-grid-medium uk-margin-medium-top" data-uk-grid>
									<div>
										<a href="javascript:void(0)" class="sc-button sc-button-social sc-button-facebook uk-width-1-1 uk-flex-center">
											<i class="mdi mdi-facebook"></i>
										</a>
									</div>
									<div>
										<a href="javascript:void(0)" class="sc-button sc-button-social sc-button-twitter uk-width-1-1 uk-flex-center">
											<i class="mdi mdi-twitter"></i>
										</a>
									</div>
									<div>
										<a href="javascript:void(0)" class="sc-button sc-button-social sc-button-linkedin uk-width-1-1 uk-flex-center">
											<i class="mdi mdi-linkedin"></i>
										</a>
									</div>
								</div> -->
								<!-- <div class="uk-margin-large-top uk-text-center">
									<span class="sc-color-secondary">
										Don't have an account?
									</span>
									<div>
										<a href="javascript:void(0)" class="sc-text-semibold" data-uk-toggle="target: .sc-toggle-login-register; animation: uk-animation-scale-up">
											Sign Up
										</a>
									</div>
								</div> -->
							</div>
						</div>
					</div>
					
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
import { useApi } from '../composable/useApi';
import { useUserSession } from '../composable/userSession';

export default {
	name: 'LoginPage',
	components: {
		ScInput
	},
	layout: 'login_page',
	data: () => ({
		loginData: {
			login: '',
			password: '',
			plantCode: '',
		},
		registerData: {
			name: '',
			email: '',
			password: ''
		},
		recoverPassEmail: ''
	}),
	head () {
		return {
			'title': 'HEKA - Giriş'
		}
	},
	computed: {
		appLogo () {
			return require('~/assets/img/login-logo.png');
		},
		appLogoLight () {
			return require('~/assets/img/login-logo.png');
		}
	},
	methods: {
		async tryLogin(){
			try {
				const api = useApi();
				const postResult = await api.post('User/LoginSysUser', {
					login: this.loginData.login,
					password: this.loginData.password,
					plantCode: this.loginData.plantCode,
				});

				if (postResult.status == 200){
					const plantCode = this.loginData.plantCode;

					const userSession = useUserSession();
					userSession.setToken = postResult.data.Token;
					userSession.setUser = {
						id: postResult.data.RecordId,
						name: postResult.data.InfoMessage,
						plantId: postResult.data.PlantId,
						plantCode: plantCode,
					};
					window.location.href = '/';
				}
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>
