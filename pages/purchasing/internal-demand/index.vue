<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ItemDemand :record-id="demandId" :is-dialog="false" @onChange="onFormChange" @onSaved="onFormSaved" />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'ItemDemandContainerForm',
	components: {
		ItemDemand: process.client ? () => import('~/logical_components/internalItemDemand') : null,
	},
	data: () => ({
		demandId: 0,
		changeFlag: false,
	}),
	computed: {

	},
	beforeDestroy() {
		if (UIkit.modal('.uk-modal'))
			UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted() {
		const qsId = getQS('id');
		if (qsId) this.demandId = parseInt(qsId);
		else this.demandId = 0;
	},
	methods: {
		onFormChange() {
			this.changeFlag = true;
		},
		onFormSaved() {
			this.changeFlag = false;
		},
		confirmToLeave() {
			const self = this;
			const prms = new Promise(function (resolve, reject) {
				UIkit.modal.confirm('Kaydedilmemiş değişiklikler var yine de çıkmak istiyor musunuz?').then(function () {
					self.changeFlag = false
					resolve(true);
				}, function () {
					resolve(false);
				});
			});
			return prms;
		},
	},

	async beforeRouteLeave(to, from, next) {
		if (this.changeFlag) {
			const confResult = await this.confirmToLeave();
			if (confResult) {
				next();
			}
			else {
				next(false);
			}
		}
		else {
			this.changeFlag = false
			next()
		}
	}
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
</style>
