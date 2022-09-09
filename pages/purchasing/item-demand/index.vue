<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ItemDemand 
                :record-id="demandId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'ItemDemandContainerForm',
	components: {
		ItemDemand: process.client ? () => import('~/logical_components/ItemDemand') : null,
	},
	data: () => ({
		demandId: 0,
	}),
	computed: {
		
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.demandId = parseInt(qsId);
        else this.demandId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
