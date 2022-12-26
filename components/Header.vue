<template>
	<header id="sc-header" ref="header">
		<nav class="uk-navbar uk-navbar-container" data-uk-navbar="mode: click; duration: 360">
			<div class="uk-navbar-left nav-overlay-small uk-margin-right uk-navbar-aside">
				<a v-show="!vxTopMenuActive && !vxSidebarMiniActive" id="sc-sidebar-main-toggle" href="javascript:void(0)" @click.stop="toggleMainSidebar">
					<i v-show="sidebarMainExpanded" class="mdi mdi-backburger" />
					<i v-show="!sidebarMainExpanded" class="mdi mdi-menu" />
				</a>
				<div class="sc-brand uk-visible@m">
					<nuxt-link to="/">
						<img v-rjs="require('~/assets/img/logo@2x.png')" :src="logo" width="115" height="50" alt="">
					</nuxt-link>
				</div>
			</div>
			<div v-show="!vxTopMenuActive" class="uk-navbar-left nav-overlay uk-margin-right uk-visible@m">
				<ul class="uk-navbar-nav">
					<li>
						<a href="javascript:void(0)" class="md-color-white sc-padding-remove-left"><i class="mdi mdi-view-grid"></i></a>
						<div class="uk-navbar-dropdown sc-padding-medium">
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid uk-grid-small" data-uk-grid>
								<div>
									<nuxt-link to="/pages/mailbox" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-email-outline sc-icon-32 sc-text-lh-1 md-color-green-700"></i>
										<span class="uk-text-medium sc-color-primary">Mailbox</span>
									</nuxt-link>
								</div>
								<div>
									<nuxt-link to="/pages/poi_listing" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-map-marker sc-icon-32 sc-text-lh-1 md-color-red-700"></i>
										<span class="uk-text-medium sc-color-primary">POI</span>
									</nuxt-link>
								</div>
								<div>
									<nuxt-link to="/pages/chat" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-message-outline sc-icon-32 sc-text-lh-1 md-color-purple-700"></i>
										<span class="uk-text-medium sc-color-primary">Chat</span>
									</nuxt-link>
								</div>
								<div>
									<nuxt-link to="/plugins/calendar" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-calendar sc-icon-32 sc-text-lh-1 md-color-light-blue-700"></i>
										<span class="uk-text-medium sc-color-primary">Calendar</span>
									</nuxt-link>
								</div>
								<div>
									<nuxt-link to="/pages/user_profile" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-account sc-icon-32 sc-text-lh-1 md-color-blue-grey-700"></i>
										<span class="uk-text-medium sc-color-primary">Profile</span>
									</nuxt-link>
								</div>
								<div>
									<nuxt-link to="/plugins/charts" class="uk-flex uk-flex-column uk-flex-middle uk-box-shadow-hover-small sc-round sc-padding-small">
										<i class="mdi mdi-chart-multiline sc-icon-32 sc-text-lh-1 md-color-amber-700"></i>
										<span class="uk-text-medium sc-color-primary">Charts</span>
									</nuxt-link>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div v-show="vxTopMenuActive" id="sc-top-menu" class="uk-navbar-left nav-overlay nav-overlay-small">
				<ScTopMenu :menu-data="topMenuData" />
			</div>
			<div class="nav-overlay nav-overlay-small uk-navbar-right uk-flex-1" hidden>
				<a class="uk-navbar-toggle uk-visible@l" data-uk-toggle="target: .nav-overlay; animation: uk-animation-slide-top" href="javascript:void(0)">
					<i class="mdi mdi-close sc-icon-24"></i>
				</a>
				<a class="uk-navbar-toggle uk-hidden@l uk-padding-remove-left" data-uk-toggle="target: .nav-overlay-small; animation: uk-animation-slide-top" href="javascript:void(0)">
					<i class="mdi mdi-close sc-icon-24"></i>
				</a>
				<div class="uk-navbar-item uk-width-expand uk-padding-remove-right" style="position:relative;">
					<form class="uk-search uk-search-navbar uk-width-1-1 uk-flex">
						<input class="uk-search-input" type="search" v-model="searchData" @keyup="tryForSearch" placeholder="Arama..." autofocus>
						<button class="sc-button sc-button-small sc-button-icon sc-button-flat uk-margin-small-left" type="button">
							<i class="mdi mdi-magnify sc-icon-24 md-color-white"></i>
						</button>
					</form>
					<div class="found-results" v-show="foundData && foundData.length > 0">
						<div class="found-row" v-for="item in foundData" :key="item">
							<div class="uk-grid">
								<div class="uk-width-1-3">
									<p>Talep: <a @click="goToDemand(item.itemDemandId)">{{ item.itemDemandNo }}</a></p>
									<p>Malzeme: {{ item.itemName }}</p>
									<p>Açıklama: {{ item.itemExplanation }}</p>
								</div>
								<div class="uk-width-1-3">
									<p>Parça Kodu: {{ item.partNo }}</p>
									<p>Boyutlar: {{ item.partDimensions }}</p>
									<p>Miktar: <b>{{ item.quantity }}</b></p>
								</div>
								<div class="uk-width-1-3">
									<p>Tarih: {{ item.createdDate }}</p>
									<p>Proje: <b>{{ item.projectName }}</b></p>
									<p>Durumu: <b>{{ item.statusText }}</b></p>
								</div>
							</div>
							<div class="related-offer-container" v-if="(item.relatedOfferId > 0)">
								<p>Teklif No: <a @click="goToOffer(item.relatedOfferId)">{{ item.relatedOfferNo }}</a></p>
								<p>Teklif Tarihi: <b>{{ item.relatedOfferDate }}</b></p>
							</div>
							<div class="related-order-container" v-if="(item.relatedOrderId > 0)">
								<div class="uk-grid">
									<div class="uk-width-1-3">
										<p>Sipariş No: <a @click="goToOrder(item.relatedOrderId)">{{ item.relatedOrderNo }}</a></p>
										<p>Sipariş Tarihi: <b>{{ item.relatedOrderDate }}</b></p>
									</div>
									<div class="uk-width-1-3">
										<p>Firma: <b>{{ item.relatedOrderFirmName }}</b></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-overlay nav-overlay-small uk-navbar-right">
				<ul class="uk-navbar-nav">
					<li>
						<a class="uk-navbar-toggle uk-visible@l" href="javascript:void(0)" data-uk-toggle="target: .nav-overlay; animation: uk-animation-slide-top">
							<i class="mdi mdi-magnify" />
						</a>
						<a id="sc-search-main-toggle-mobile" class="uk-navbar-toggle uk-hidden@l" href="javascript:void(0)" data-uk-toggle="target: .nav-overlay-small; animation: uk-animation-slide-top">
							<i class="mdi mdi-magnify" />
						</a>
					</li>
					<li class="uk-visible@l">
						<ScFullscreen id="sc-js-fullscreen-toggle" />
					</li>
					<!-- <li class="uk-visible@l">
						<a href="javascript:void(0)" class="sc-text-semibold sc-width-micro">
							{{ vxActiveLocale }}
						</a>
						<div id="sc-js-lang-switcher" class="uk-navbar-dropdown uk-dropdown-small" data-uk-toggle>
							<ul class="uk-nav uk-navbar-dropdown-nav">
								<li v-for="locale in availableLangs" :key="locale.code">
									<a
										href="javascript:void(0)"
										:class="{
											'sc-text-semibold': isActiveLang(locale.code)
										}"
										@click="updateLocale($event, locale.code)"
									>
										{{ locale.name }}
									</a>
								</li>
							</ul>
						</div>
					</li> -->
					<!-- <li>
						<a href="javascript:void(0)">
							<span class="mdi mdi-email"></span>
						</a>
						<div class="uk-navbar-dropdown sc-padding-remove">
							<div class="uk-panel uk-panel-scrollable uk-height-medium">
								<ul class="uk-list uk-list-divider">
									<li v-for="message in user.messages" :key="message.id" class="sc-list-group">
										<div class="sc-list-addon">
											<img v-show="message.avatar.image" :src="message.avatar.image" class="sc-avatar" alt="">
											<span v-show="!message.avatar.image" :title="message.from" :class="message.avatar.color" class="sc-avatar-initials">
												{{ message.from | initials }}
											</span>
										</div>
										<a href="javascript:void(0)" class="sc-list-body">
											<span class="uk-text-small uk-text-muted uk-width-expand">
												{{ message.date }}
											</span>
											<span class="uk-display-block uk-text-truncate">
												{{ message.content }}
											</span>
										</a>
									</li>
								</ul>
							</div>
							<nuxt-link to="/pages/mailbox" class="uk-flex uk-text-small sc-padding-small-ends sc-padding">
								Show all in mailbox
							</nuxt-link>
						</div>
					</li> -->
					<li class="uk-visible@l">
						<a href="javascript:void(0)">
							<span class="mdi mdi-bell uk-display-inline-block">
								<span v-show="!alertsEmpty" class="sc-indicator md-bg-color-red-600"></span>
							</span>
						</a>
						<a href="javascript:void(0)" @click="requestSpeech">
							<span class="mdi mdi-microphone uk-display-inline-block">
								
							</span>
						</a>
						<div class="uk-navbar-dropdown md-bg-grey-100">
							<div class="sc-padding sc-padding-small-ends">
								<ul id="sc-header-alerts" class="uk-list uk-margin-remove">
									<li v-for="(alert, index) in user.alerts" :key="alert.id" :style="{'--index': index}" class="uk-margin-small-top sc-border sc-round md-bg-white">
										<div class="uk-flex uk-flex-middle">
											<div class="uk-margin-right uk-margin-small-left">
												<i class="mdi" :class="[alert.icon, alert.color]"></i>
											</div>
											<div class="uk-flex-1 uk-text-small">
												{{ alert.text }}
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="javascript:void(0)">
							<img v-rjs="require('~/assets/img/avatars/avatar_default_sm@2x.png')" :src="user.avatar" alt="">
						</a>
						<div class="uk-navbar-dropdown uk-dropdown-small">
							<ul class="uk-nav uk-nav-navbar">
								<li>
									<nuxt-link to="/pages/user_profile">
										<b>{{user.name}}</b> <i><small>{{user.plantCode}}</small></i>
									</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/purchasing/item-demand/my-demands">
										Taleplerim
									</nuxt-link>
								</li>
								<!-- <li>
									<nuxt-link to="/pages/settings">
										Ayarlar
									</nuxt-link>
								</li> -->
								<li>
									<a @click="logoutUser">
										Çıkış Yap
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<a v-show="vxOffcanvasPresent" href="javascript:void(0)" class="md-color-white uk-margin-left uk-hidden@l" @click="toggleOffcanvas">
					<i v-show="!vxOffcanvasExpanded" class="mdi mdi-menu"></i><i v-show="vxOffcanvasExpanded" class="mdi mdi-arrow-right"></i>
				</a>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapState } from 'vuex'
import { scMq } from '~/assets/js/utils'
import ScFullscreen from '~/components/FullScreen.vue';
import ScTopMenu from '~/components/topmenu/TopMenu.vue';
import { scHelpers } from "~/assets/js/utils";
import { useUserSession, logoutUser } from '~/composable/userSession';
import { useApi } from '~/composable/useApi';
import { dateToStr, blobToBase64 } from "~/composable/useHelpers";
import * as flacEncoder from '~/composable/useFlaclib';
import moment from "~/plugins/moment";

const { uniqueID } = scHelpers;

export default {
	name: 'ScHeader',
	components: {
		ScFullscreen,
		ScTopMenu
	},
	data: () => ({
		user: {
			name: '',
			plantCode: '',
			avatar: require('~/assets/img/avatars/avatar_default_sm.png'),
			messages: [
				{
					"id": 1,
					"from": "Aaron Jensen",
					"avatar": {
						"image": require("~/assets/img/avatars/avatar_03_sm.png")
					},
					"date": "24-10-2019",
					"content": "Zelnavo dej foten tu bivgal wi lonuh cow wuvelo atilid taza wucacto uwa."
				},
				{
					"id": 2,
					"from": "Eugenia Thompson",
					"avatar": {
						"image": require("~/assets/img/avatars/avatar_04_sm.png")
					},
					"date": "23-10-2019",
					"content": "Zopessud rodga here okuofe atvof el belildo bakah deud upanuuf usu ufava."
				},
				{
					"id": 3,
					"from": "Roxie Ortega",
					"avatar": {
						"color": "md-bg-red-500 md-color-white"
					},
					"date": "24-10-2019",
					"content": "Hub bo zejwawad pocmep li lubov vofnomzug ali akohe hoarla orhak ludafu bic zarajik ufpoeha."
				},
				{
					"id": 4,
					"from": "Ethan Perry",
					"avatar": {
						"image": require("~/assets/img/avatars/avatar_07_sm.png")
					},
					"date": "22-10-2019",
					"content": "Rucakes na vutnis jos lukse nis figulu zuw tisbu poh ufucas acoaz rubetlih miraetu atoolule sov rives."
				},
				{
					"id": 5,
					"from": "Daisy Hopkins",
					"avatar": {
						"color": "md-bg-purple-500 md-color-white"
					},
					"date": "21-10-2019",
					"content": "Cabhilzi seajofi he bami joglaceg manob cune zilpu jore melmoffuj kilahwog mehsilmuc vorlislu."
				},
				{
					"id": 6,
					"from": "Leo Singleton",
					"avatar": {
						"image": require("~/assets/img/avatars/avatar_02_sm.png")
					},
					"date": "21-10-2019",
					"content": "Uh esegivad umu gegmused vejgafpe nurlo luzreh zedleg he wisus buvnukik ga heeh gudafki ta za."
				}
			],
			alerts: [
				// {
				// 	id: 1,
				// 	text: 'Information Page Not Found!',
				// 	icon: 'mdi-alert-outline',
				// 	color: 'md-color-red-600'
				// },
				// {
				// 	id: 2,
				// 	text: 'A new password has been sent to your e-mail address.',
				// 	icon: 'mdi-email-check-outline',
				// 	color: 'md-color-blue-600'
				// },
				// {
				// 	id: 3,
				// 	text: 'You do not have permission to access the API!',
				// 	icon: 'mdi-alert-outline',
				// 	color: 'md-color-red-600'
				// },
				// {
				// 	id: 4,
				// 	text: 'Your enquiry has been successfully sent.',
				// 	icon: 'mdi-check-all',
				// 	color: 'md-color-light-green-600'
				// }
			]
		},
		sidebarMainExpanded: true,
		offcanvasExpanded: false,
		offcanvasPresent: false,
		lastKeyUpForSearch: null,
		encoder: null,
		searchData: '',
		micDataBase64: '',
		micData: [],
		audioContext: null,
		audioInput: null,
		microphone_stream: null,
		BUFF_SIZE: 4096,
		gain_node: null,
		script_processor_node: null,
		script_processor_fft_node: null,
		analyserNode: null,
		foundData: [],
		logo: require('~/assets/img/logo.png'),
		alertsEmpty: true,
		topMenuData: [
			{
				id: uniqueID(),
				title: "Mailbox",
				url: '/pages/mailbox'
			},
			{
				id: uniqueID(),
				title: "Components",
				url: null,
				isOpen: false,
				submenu: [
					{
						id: uniqueID(),
						title: "Accordion",
						url: '/components/accordion'
					},
					{
						id: uniqueID(),
						title: "Alert",
						url: '/components/alert'
					},
					{
						id: uniqueID(),
						title: "Avatars",
						url: '/components/avatars'
					},
					{
						id: uniqueID(),
						title: "Grid",
						url: '/components/grid'
					}
				]
			},
			{
				id: uniqueID(),
				title: "Pages",
				url: null,
				isOpen: false,
				submenu: [
					{
						id: uniqueID(),
						title: "Blank",
						url: '/pages/blank'
					},
					{
						id: uniqueID(),
						title: "Gallery",
						url: '/pages/gallery'
					},
					{
						id: uniqueID(),
						title: "Settings",
						url: '/pages/settings'
					}
				]
			},
			{
				id: uniqueID(),
				title: "Nested",
				url: null,
				isOpen: false,
				submenu: [
					{
						id: uniqueID(),
						title: "Level 1",
						url: null,
					},
					{
						id: uniqueID(),
						title: "Level 1",
						url: null,
						isOpen: false,
						submenu: [
							{
								id: uniqueID(),
								title: "Sub-level 1.1",
								url: null
							},
							{
								id: uniqueID(),
								title: "Sub-level 1.1",
								url: null
							},
							{
								id: uniqueID(),
								title: "Sub-level 1.1",
								url: null,
								isOpen: false,
								submenu: [
									{
										id: uniqueID(),
										title: "Sub-level 1.1.1",
										url: null
									},
									{
										id: uniqueID(),
										title: "Sub-level 1.1.1",
										url: null
									},
									{
										id: uniqueID(),
										title: "Sub-level 1.1.1",
										url: null
									},
									{
										id: uniqueID(),
										title: "Sub-level 1.1.1",
										url: null
									},
									{
										id: uniqueID(),
										title: "Sub-level 1.1.1",
										url: null
									}
								]
							},
							{
								id: uniqueID(),
								title: "Sub-level 1.1",
								url: null
							},
							{
								id: uniqueID(),
								title: "Sub-level 1.1",
								url: null
							}
						]
					},
					{
						id: uniqueID(),
						title: "Level 1",
						url: null,
					},
					{
						id: uniqueID(),
						title: "Level 1",
						url: null,
					}
				]
			}
		],
		availableLangs: [
			{
				code: 'en',
				name: 'English'
			},
			{
				code: 'fr',
				name: 'French'
			},
			{
				code: 'es',
				name: 'Spanish'
			}
		]
	}),
	computed: {
		...mapState([
			'vxSidebarMainExpanded',
			'vxOffcanvasPresent',
			'vxOffcanvasExpanded',
			'vxTopMenuActive',
			'vxActiveLocale',
			'vxSidebarMiniActive',
			'vxLayoutBoxedActive'
		])
	},
	watch: {
		'vxSidebarMainExpanded' (state) {
			this.sidebarMainExpanded = state;
		},
		'vxOffcanvasExpanded' (state) {
			this.offcanvasExpanded = state;
		},
		'vxOffcanvasPresent' (state) {
			this.offcanvasPresent = state;
		},
		'vxLayoutBoxedActive' (state) {
			UIkit.update(this.$refs.header)
		}
	},
	mounted () {
		const self = this;
		self.$nextTick(() => {
			if(scMq.mediumMin() || this.$store.getters['sidebarOffcanvasState']) {
				self.sidebarMainExpanded = this.vxSidebarMainExpanded;
			} else {
				self.sidebarMainExpanded = false;
			}
		});
		// sticky header
		var options = scMq.mediumMax() ? { showOnUp: true, animation: "uk-animation-slide-top" } : {};
		UIkit.sticky(this.$refs.header, options);

		if (process.client){
			const userSession = useUserSession();
			this.user.name = userSession.user.name;
			this.user.plantCode = userSession.user.plantCode;
		}
	},
	methods: {
		requestSpeech(){
			this.initSpeechApi();
			this.requestMic();

		},
		process_microphone_buffer(event){
			var i, N, inp, microphone_output_buffer;

			microphone_output_buffer = event.inputBuffer.getChannelData(0); // just mono - 1 channel for now
			// console.log(microphone_output_buffer);

			this.encoder.postMessage({ cmd: 'encode', buf: microphone_output_buffer});
		},
		show_some_data(given_typed_array, num_row_to_display, label){
			var size_buffer = given_typed_array.length;
			var index = 0;
			var max_index = num_row_to_display;

			console.log("__________ " + label);

			for (; index < max_index && index < size_buffer; index += 1) {
				console.log(given_typed_array[index]);
			}
		},
		sendVoiceToApi(){
			try {
				const self = this;
				const authIns = self.$google.api.auth2.getAuthInstance();
				if (authIns.isSignedIn.get() && authIns.currentUser.Oa.uv.gw == 'heka@progenar.com'){
					console.log(self.$google.api);
					self.$google.api.client.speech.speech.recognize({
						"audio": {
							"content": self.micDataBase64
						},
						"config": {
							"encoding": "FLAC",
							"languageCode": "tr-TR",
							"sampleRateHertz": 44100,
						}
					}).then((response) => {
						console.log(response);
						if (response.status == 200 
							&& response.result.results && response.result.results.length > 0){
								var bestResult = response.result.results[0].alternatives[0].transcript;
								if (bestResult.includes('sipariş') && bestResult.includes('getir')){
									self.$router.push('/purchasing/item-order/list');
								}
						}
					});
				}
			} catch (error) {
				console.log(error);
			}
		},
		async stop_microphone(){
			if (this.audioContext){
				var flacData = this.encoder.postMessage({ cmd: 'finish' });
				console.log(flacData);
				this.microphone_stream.disconnect();
				this.script_processor_node.disconnect();
				this.audioContext.close();

				this.micDataBase64 = await blobToBase64(flacData);
				this.micDataBase64 = this.micDataBase64.replace('data:audio/flac;base64,', '');
				console.log(this.micDataBase64);
				
				this.audioContext = null;
				this.microphone_stream = null;
				this.script_processor_node = null;

				this.sendVoiceToApi();
			}
		},
		start_microphone(stream){
			this.encoder = flacEncoder;
			if (this.audioContext){
				this.stop_microphone();
				return;
			}

			this.micData = [];
			this.micDataBase64 = '';
			this.audioContext = new AudioContext();
			// this.gain_node = this.audioContext.createGain();
			// this.gain_node.connect( this.audioContext.destination );

			this.microphone_stream = this.audioContext.createMediaStreamSource(stream);
			// this.microphone_stream.connect(this.gain_node); 

			this.script_processor_node = this.audioContext.createScriptProcessor(this.BUFF_SIZE, 1, 1);
			this.script_processor_node.onaudioprocess = this.process_microphone_buffer;

			this.microphone_stream.connect(this.script_processor_node);
			this.script_processor_node.connect(this.audioContext.destination);

			this.encoder
				.postMessage({ cmd: 'init', config: { samplerate: 44100, bps: 16, channels: 1, compression: 5 } });
		},
		requestMic(){
			try {
				const self = this;

				if (!navigator.getUserMedia)
					navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
								navigator.mozGetUserMedia || navigator.msGetUserMedia;

				if (navigator.getUserMedia){
					navigator.getUserMedia({audio:true}, 
						function(stream) {
							self.start_microphone(stream);
						},
						function(e) {
							
						}
					);
				} else {  }

				// navigator.mediaDevices.getUserMedia({ audio: true })
				// .then(function(stream) {
				// 	console.log('You let me use your mic!')
				// })
				// .catch(function(err) {
				// 	console.log('No mic for you!')
				// });
			} catch (error) {
				console.log(error);
			}
		},
		initSpeechApi(){
			try {
				const self = this;
				this.$google.api.load('auth2', {
					callback: function(dg) {
						self.$google.api.client.init({
							apiKey: 'AIzaSyD7Qg97gRwKeoqCpjACKTsLzV0vTdSAPOw',
							clientId: '756662015988-6s0gq2tj2v0mbu3lmiigsdnnul89ec71.apps.googleusercontent.com',
							discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4','https://speech.googleapis.com/$discovery/rest?version=v1'],
							scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/cloud-platform",
							plugin_name: 'chat',
						}).then(function(){
							const authIns = self.$google.api.auth2.getAuthInstance();
							if (!authIns.isSignedIn.get() || authIns.currentUser.Oa.uv.gw != 'heka@progenar.com'){
								authIns.signIn();
							}
						});
					},
					onerror: function() {
						// Handle loading error.
						// alert('gapi.client failed to load!');
					},
					timeout: 5000, // 5 seconds.
					ontimeout: function() {
						// Handle timeout.
						// alert('gapi.client could not load in a timely manner!');
					}
				});
			} catch (error) {
				
			}
		},
		toggleMainSidebar () {
			let state = !this.sidebarMainExpanded;
			this.$store.commit('sidebarMainToggle', state);
		},
		toggleOffcanvas () {
			let state = !this.offcanvasExpanded;
			this.$store.commit('offcanvasToggle', state);
		},
		updateLocale (event, code) {
			if (code === this.vxActiveLocale) {
				event.preventDefault();
			}
			this.$i18n.setLocale(code);
			this.$store.commit('updateLocale', code);
			this.isActiveLang(code)
		},
		isActiveLang (code) {
			return code === this.vxActiveLocale
		},
		logoutUser (){
			logoutUser();
			window.location.href = '/login_page';
		},
		goToDemand(demandId){
            this.$router.push('/purchasing/item-demand?id=' + demandId);
        },
		goToOffer(offerId){
			this.$router.push('/purchasing/item-offer?id=' + offerId);
		},
		goToOrder(orderId){
			this.$router.push('/purchasing/item-order?id=' + orderId);
		},
		tryForSearch(){
			const moment = require('moment');
			this.lastKeyUpForSearch = moment();
			
			setTimeout(this.checkForSearch, 800);
		},
		checkForSearch(){
			const moment = require('moment');
			const dtNow = moment();
			const ms = dtNow.diff(this.lastKeyUpForSearch);
			const duration = moment.duration(ms);
			if (duration >= 550)
				this.searchForDemands();
		},
		async searchForDemands(){
			const api = useApi();

			try {
				this.foundData = (await api.get('ItemDemand/Search/' + this.searchData)).data
					.map((d) => {
						return {
							...d,
							createdDate: dateToStr(d.createdDate),
							relatedOfferDate: dateToStr(d.relatedOfferDate),
							relatedOrderDate: dateToStr(d.relatedOrderDate),
						}
					});
			} catch (error) {
				this.foundData = [];
			}
		}
	}
}
</script>
<style type="text/css">
.found-results{
	position:absolute; background-color:#fff; height:500px; width:80%; top:50px; left:10px;
	padding:10px;
	border: 1px solid #cfcfcf;
	border-radius:5px;
	box-shadow: -1px 1px 9px 0px rgba(0,0,0,0.36);
	-webkit-box-shadow: -1px 1px 9px 0px rgba(0,0,0,0.36);
	-moz-box-shadow: -1px 1px 9px 0px rgba(0,0,0,0.36);
	overflow: auto;
}
.found-row{
	border-bottom: 1px solid #afafaf;
	background-color: transparent;
	padding:5px;
}
.found-row:hover{
	background-color: #efefef;
}
.found-row p{
	margin:0px;
}
.related-offer-container{
	margin-left:50px;
	padding:5px;
	border-top: 1px solid #afafaf;
	background-color: #cfe3fd;
}
.related-order-container{
	margin-left:75px;
	padding:5px;
	border-top: 1px solid #afafaf;
	background-color: #c5ffcf;
}
</style>
