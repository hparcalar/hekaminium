<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ScCard class="uk-margin-top">
				<ScCardHeader separator>
					<div class="uk-flex-middle uk-grid-small uk-grid" data-uk-grid>
						<div class="uk-flex-1">
							<ScCardTitle>
								İzinler
								<button type="button" @click="newRecord" class="sc-button sc-button-small uk-margin-small-left">
									<span data-uk-icon="icon: plus" class="uk-margin-small-right uk-icon"></span>
									Yeni
								</button>
							</ScCardTitle>
						</div>
					</div>
				</ScCardHeader>
				<ScCardBody>
					<DataTable :value="visualData" responsiveLayout="scroll" :filters.sync="filterGeneral" ref="dtable"
						filterDisplay="row" @row-select="clickDetail" columnResizeMode="fit" dataKey="id" :paginator="true"
						showGridlines :rows="20" selectionMode="single" sortField="id" :sortOrder="-1"
						:globalFilterFields="['userName','permitTypeText','statusText','staffPermitExplanation']">
						<template #header>
							<div class="flex justify-content-between">
								<Button type="button" icon="pi pi-filter-slash" label="Temizle" class="p-button-outlined"
									@click="clearGeneralFilter()" />
								<span class="p-input-icon-left">
									<i class="pi pi-search" />
									<InputText v-model="filterGeneral['global'].value" placeholder="Genel Arama" />
								</span>
							</div>
						</template>
						<template #empty>
							Hiç kayıt yok.
						</template>
						<template #loading>
							Yükleniyor. Lütfen bekleyiniz.
						</template>
						<Column field="id" header="#" sortable :style="{ width: '5%' }"
							:headerStyle="{ width: '5%' }">
						</Column>
						<Column field="startDate" header="Başlangıç Tarihi" sortable :style="{ width: '10%' }"
							:headerStyle="{ width: '10%' }">
							<template #body="slotProps">
								{{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
							</template>
						</Column>
						<Column field="endDate" header="Bitiş Tarihi" sortable :style="{ width: '10%' }"
							:headerStyle="{ width: '10%' }">
							<template #body="slotProps">
								{{ convertDateToStr(slotProps.data[slotProps.column.field]) }}
							</template>
						</Column>
						<Column field="userName" header="Personel" sortable :style="{ width: '10%' }"
							:headerStyle="{ width: '10%' }">
						</Column>
						<Column field="staffPermitExplanation" header="Açıklama" sortable :style="{ width: '25%' }" :headerStyle="{ width: '25%' }">
						</Column>
						<Column field="permitTypeText" header="İzin Türü" sortable :style="{ width: '10%' }" :headerStyle="{ width: '10%' }">
						</Column>
						<Column field="statusText" header="Durum" sortable :style="{ width: '5%' }" :headerStyle="{ width: '5%' }">
						</Column>
						
					</DataTable>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>
<script>
import PrettyCheck from 'pretty-checkbox-vue/check';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import { dateToStr } from '~/composable/useHelpers';
import { FilterMatchMode, FilterOperator } from 'primevue/api/';
import moment from 'moment';

export default {
	name: 'StaffPermitList',
	components: {
		Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
		PrettyCheck
	},
	data: () => {
		return {
			visualData: [],
			filterGeneral: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        userName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        staffPermitExplanation: { value: null, matchMode: FilterMatchMode.CONTAINS },
        permitTypeText: { value: null, matchMode: FilterMatchMode.CONTAINS },
        statusText: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
		}
	},
	async mounted() {
		const api = useApi();
		const session = useUserSession();
		const targetRoute = this.hasViewAuth('StaffPermit', 1) ? 'StaffPermit' : 'StaffPermit/' + session.user.id;
		const rawData = (await api.get(targetRoute)).data;

		this.visualData = rawData.map((d) => {
						return {
							...d,
							permitType : d.permitType ?? 1,
							permitTypeText: d.permitTypeText == "" ? "Mazeret İzni" : d.permitTypeText,
						};
					});

	},
	methods: {
		clearGeneralFilter() {
      this.filterGeneral.global.value = null;
    },
		clickDetail: function (e) {
			//this.$router.push('/staffpermit?id=' + this.visualData[indexes[0]].id);
			this.$router.push('/staffpermit?id=' + e.data.id);
		},
		convertDateToStr(date) {
      if (date && date.length > 0)
        return moment(date).format("DD.MM.YYYY")
      return ""
    },
		newRecord() {
			this.$router.push('/staffpermit');
		},
		hasViewAuth(sectionKey, authCode) {
			if (process.client) {
				const session = useUserSession();
				if (session && session.checkAuthSection)
					return session.checkAuthSection(sectionKey, authCode);
			}
			return false;
		},
	}
}
</script>
<style lang="scss">
@import "~scss/common/md_colors";
@import "~scss/common/variables_mixins";
@import "~scss/plugins/datatables";
@import '~scss/vue/_pretty_checkboxes';
</style>