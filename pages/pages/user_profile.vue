<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<div class="uk-flex uk-flex-center">
				<div class="uk-width-5-5@l">
					<div class="uk-grid" data-uk-grid>
						<div class="uk-width-1-4@l">
							<client-only>
								<ScCard v-sc-sticky="sideMenu">
									<ScCardBody>
										<div class="uk-text-center">
											<div class="uk-flex uk-flex-center uk-margin-bottom">
												<ScUploader :image="require('~/assets/img/avatars/avatar_default.png')" />
											</div>
											<ScCardTitle>
												{{ user.name }}
											</ScCardTitle>
											<span class="sc-color-secondary uk-text-small">
												{{ user.plantCode }}
											</span>
										</div>
										<ul class="uk-list uk-list-divider">
											<li class="sc-list-group">
												<div class="sc-list-body">
													<div class="sc-list-body-inner">
														<div class="uk-child-width-1-1@m uk-grid">
															<div>
																<ScInput v-model="firstPass" type="password">
																	<label>Parola</label>
																</ScInput>
															</div>
															<div>
																<ScInput v-model="secondPass" type="password">
																	<label>Tekrar</label>
																</ScInput>
															</div>
														</div>
														<button type="button" @click="changePassword" class="sc-button sc-button-primary sc-button-medium uk-margin-small-top uk-margin-small-right">
															<span data-uk-icon="icon: check" class="uk-icon"></span> Değiştir
														</button>
													</div>
												</div>
											</li>
										</ul>
									</ScCardBody>
								</ScCard>
							</client-only>
						</div>
						<div class="uk-width-expand@l">
							<ScCard>
								<ScCardBody>
									<div class="uk-child-width-1-4@m uk-text-center uk-grid" data-uk-grid>
										<div v-for="stat in stats" :key="stat.id">
											<div class="sc-round sc-padding md-bg-grey-100">
												<h2 class="uk-margin-remove" :class="['md-color-' + stat.color + '-500']">
													{{ stat.number }}
												</h2>
												<p class="sc-color-secondary uk-margin-remove">
													{{ stat.cat }}
												</p>
											</div>
										</div>
									</div>
								</ScCardBody>
							</ScCard>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sc-fab-page-wrapper">
			<a href="javascript:void(0)" class="sc-fab sc-fab-secondary sc-fab-large">
				<i class="mdi mdi-pencil"></i>
			</a>
		</div>
	</div>
</template>

<script>
import { scHelpers, scFakeData } from "~/assets/js/utils";
const { uniqueID } = scHelpers;
const { first, last, sentence, phone, company, email } = scFakeData;

import ScPhoto from '~/components/Photo'
import ScAvatar from '~/components/Avatar'
import ScUploader from '~/components/Uploader'
import ScInput from '~/components/Input'

import sticky from '~/plugins/stickyKit'
import moment from '~/plugins/moment'
import { useUserSession } from "~/composable/userSession";
import { useApi } from '~/composable/useApi';

export default {
	name: 'PagesUserProfile',
	components: {
		ScPhoto,
		ScAvatar,
		ScUploader,
		ScInput,
	},
	data: () => ({
		sideMenu: {
			media: 'largeMin',
			options: {
				'offset_top': 'inPlace'
			},
			on: {
				'sticky_kit:stick' (e) {
					// console.log("has stuck!", e.target);
				},
				'sticky_kit:unstick' (e) {
					// console.log("has unstuck!", e.target);
				},
			}
		},
		firstPass: '',
		secondPass: '',
	}),
	methods: {
		async changePassword(){
			const self = this;
			if (self.firstPass != self.secondPass){
				self.showNotification('Farklı parolalar girdiniz.', false, 'error');
				return;
			}

			try {
				
				const api = useApi();
				const postResult = (await api.post('User/ChangePass', { id: self.user.id, password: self.firstPass })).data;
				if (postResult.result){
					self.showNotification('Şifreniz başarıyla değiştirildi.', false, 'success');
				}
			} catch (error) {
				
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
		}
	},
	computed: {
		user () {
			if(process.client){
				const session = useUserSession();
				return session.user;
			}
			else{
				return {
					id: 0,
					name: '',
					plantCode: '',
				}
			}
		},
		stats () {
			return [
				{
					id: 1,
					number: '0',
					cat: 'Talepler',
					color: 'green'
				},
				{
					id: 2,
					number: '0',
					cat: 'Servisler',
					color: 'green'
				},
			]
		},
	}
}
</script>
