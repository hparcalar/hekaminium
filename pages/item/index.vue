<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ItemDefinition 
                :record-id="itemId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'ItemForm',
	components: {
		ItemDefinition: process.client ? () => import('~/definition_components/ItemDefinition') : null,
	},
	data: () => ({
		itemId: 0,
	}),
	computed: {
		
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.itemId = parseInt(qsId);
        else this.itemId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
