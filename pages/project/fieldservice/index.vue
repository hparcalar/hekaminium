<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ProjectFieldService 
                :record-id="recordId"
                :is-dialog="false"
            />
		</div>
	</div>
</template>

<script>
import { getQS } from '~/composable/useHelpers';

export default {
	name: 'ProjectFieldServiceContainerForm',
	components: {
		ProjectFieldService: process.client ? () => import('~/logical_components/ProjectFieldService') : null,
	},
	data: () => ({
		recordId: 0,
	}),
	computed: {
		
	},
	beforeDestroy(){
		if (UIkit.modal('.uk-modal'))
			UIkit.modal('.uk-modal').$destroy(true);
	},
	mounted () {
        const qsId = getQS('id');
        if (qsId) this.recordId = parseInt(qsId);
        else this.recordId = 0;
	},
	methods: {
        
	}
}
</script>

<style lang="scss">
	@import '~scss/vue/_pretty_checkboxes';
</style>
