<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<PurchaseItemOffer 
                :record-id="offerId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'PurchaseOfferContainerForm',
	components: {
		PurchaseItemOffer: process.client ? () => import('~/logical_components/PurchaseItemOffer') : null,
	},
	data: () => ({
		offerId: 0,
	}),
	computed: {
		
	},
	beforeDestroy(){
		if (UIkit.modal('.uk-modal'))
			UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.offerId = parseInt(qsId);
        else this.offerId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
