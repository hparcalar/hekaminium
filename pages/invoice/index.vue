<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ItemReceipt
                :section="'purchasing'" 
                :record-id="invoiceId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'PurchaseItemReceiptContainerForm',
	components: {
		ItemReceipt: process.client ? () => import('~/logical_components/Invoice') : null,
	},
	data: () => ({
		invoiceId: 0,
	}),
	computed: {
		
	},
	beforeDestroy(){
		UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.invoiceId = parseInt(qsId);
        else this.invoiceId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
