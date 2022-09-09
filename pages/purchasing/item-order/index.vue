<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<PurchaseItemOrder 
                :record-id="orderId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'PurchaseOrderContainerForm',
	components: {
		PurchaseItemOrder: process.client ? () => import('~/logical_components/PurchaseItemOrder') : null,
	},
	data: () => ({
		orderId: 0,
	}),
	computed: {
		
	},
	beforeDestroy(){
		UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.orderId = parseInt(qsId);
        else this.orderId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
