<template>
    <div class="uk-flex-center uk-grid" data-uk-grid>
        <div class="uk-width-3-3@l">
            <div v-show="isDialog == false" class="uk-flex uk-flex-middle uk-margin-bottom md-bg-grey-100 sc-round sc-padding sc-padding-medium-ends
                    sc-round sc-border md-bg-grey-100
            ">
                <span class="uk-margin-right md-color-gray-600 mdi mdi-office-building"></span>
                <h4 class="md-color-gray-600 uk-margin-remove">
                    Satın Alma Teklifi
                </h4>
            </div>
            <form>
                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium">
                    <!-- <legend class="uk-legend">
                        Talep Bilgileri
                    </legend> -->
                    <div class="uk-child-width-1-2@m uk-grid" data-uk-grid>
                        <div>
                            <ScInput v-model="formData.receiptNo" :read-only="true">
                                <label>Teklif No</label>
                            </ScInput>
                        </div>
                        <div style="margin-top:10px;">
                            <ScInput v-model="formData.receiptDate" :disabled="offerIsOrdered"
                                :config="{ wrap: true, dateFormat: 'Y-m-d' }" v-flatpickr mode="outline">
                                <label>Teklif Tarihi</label>
                            </ScInput>
                        </div>
                        <div>
                            <client-only>
                                <Select2 v-model="selectedFirms" :options="firms" :disabled="offerIsOrdered"
                                    @change="onSelectedFirmsChanged" multiple
                                    :settings="{ 'width': '100%', 'placeholder': 'Firmalar', 'allowClear': true }">
                                </Select2>
                            </client-only>
                        </div>
                        <div>
                            <ScInput v-model="formData.explanation">
                                <label>Genel Açıklama</label>
                            </ScInput>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="uk-fieldset uk-fieldset-alt md-bg-white sc-padding-medium sc-padding-remove-top">
                    <legend>
                        Teklif Detayları
                    </legend>
                    <div class="uk-grid" style="margin-top:10px;">
                        <!-- Details With All Firm Prices -->
                        <div class="uk-width-3-5@m">
                            <div v-for="(firm, firmIndex) in selectedFirms" :key="firm">
                                <h6 class="blue-header">
                                    <button type="button" @click="expandToggleFirm(firm)"
                                        class="sc-button sc-button-default sc-button-small uk-margin-small-right">
                                        <span :data-uk-icon="'icon:' + (getFirmExpanded(firm) ? 'minus' : 'plus')"
                                            class="uk-icon"></span>
                                    </button>
                                    {{ getFirmName(firm) }}
                                    <span v-for="(firmSum, sumIndex) in sumOfFirmDetails(firm, false)"
                                        :key="firmSum.forexId" class="firm-summary">
                                        <b>{{ firmSum.forexCode }}</b>: {{ new
                                                Intl.NumberFormat('tr-TR', {
                                                    maximumFractionDigits: 2
                                                }).format(firmSum.overallTotal)
                                        }}
                                    </span>
                                </h6>
                                <table v-show="getFirmExpanded(firm)"
                                    class="uk-table uk-table-striped uk-table-responsive uk-table-small"
                                    style="width:100%">
                                    <tr>
                                        <th class="uk-text-nowrap">
                                            #
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Sıra
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Açıklama
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Döviz Cinsi
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Döviz Kuru
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Birim Fiyat
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Miktar
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Tutar (Döviz)
                                        </th>
                                        <th class="uk-text-nowrap">
                                            Tutar (TL)
                                        </th>
                                        <th>SEÇ</th>
                                    </tr>
                                    <tr v-for="(item, itemIndex) in formData.details" :key="itemIndex"
                                        :class="{ 'selected-offer': getFirmPriceOfDetail(item, firm).isFirmSelected }">
                                        <td>
                                            <button type="button" @click="showDemandDetails(item)"
                                                class="sc-button sc-button-primary sc-button-small uk-margin-small-right">
                                                K
                                            </button>
                                        </td>
                                        <td>
                                            <ScInput v-model="item.lineNumber" :read-only="true" type="number">
                                            </ScInput>
                                        </td>
                                        <td>
                                            <ScInput v-model="item.itemExplanation" :read-only="offerIsOrdered">
                                            </ScInput>
                                        </td>
                                        <td>
                                            <client-only>
                                                <Select2 class="no-top-margin"
                                                    v-model="getFirmPriceOfDetail(item, firm).forexId"
                                                    :options="forexList" :disabled="offerIsOrdered"
                                                    @change="updateLiveForexRate($event, item, firm)"
                                                    :settings="{ 'width': '100%', 'placeholder': 'TL', 'allowClear': true }">
                                                </Select2>
                                            </client-only>
                                        </td>
                                        <td>
                                            <ScInput v-model="getFirmPriceOfDetail(item, firm).forexRate"
                                                :read-only="offerIsOrdered" @change="calculateTotal(item, firm)"
                                                type="number"></ScInput>
                                        </td>
                                        <td>
                                            <ScInput v-model="getFirmPriceOfDetail(item, firm).unitPrice"
                                                :read-only="offerIsOrdered" @change="calculateTotal(item, firm)"
                                                type="number"></ScInput>
                                        </td>
                                        <td>
                                            <ScInput v-model="item.quantity" :read-only="offerIsOrdered"
                                                @change="calculateTotal(item, firm, true)" type="number"></ScInput>
                                        </td>
                                        <td>
                                            <ScInput v-model="getFirmPriceOfDetail(item, firm).overallForexTotal"
                                                :read-only="true" type="number"></ScInput>
                                        </td>
                                        <td>
                                            <ScInput v-model="getFirmPriceOfDetail(item, firm).overallTotal"
                                                :read-only="true" type="number"></ScInput>
                                        </td>
                                        <td>
                                            <PrettyCheck name="isActive" :disabled="offerIsOrdered"
                                                @change="onChangeFirmOfferSelection($event, item, firm)"
                                                v-model="getFirmPriceOfDetail(item, firm).isFirmSelected"
                                                class="p-icon">
                                                <i slot="extra" class="icon mdi mdi-check"></i>
                                            </PrettyCheck>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <!-- Details Depend On Just Selected Firms -->
                        <div class="uk-width-2-5@m">
                            <h6>
                                Sipariş Özeti
                                <button v-show="!offerIsOrdered" type="button" @click="createItemOrder"
                                    style="float:right;"
                                    class="sc-button sc-button-primary sc-button-small uk-margin-small-right">
                                    <span data-uk-icon="icon: check" class="uk-icon"></span>Sipariş Oluştur
                                </button>
                            </h6>
                            <div v-for="(firm, firmIndex) in getChoosenFirms()" :key="firm.id">
                                <h6 class="blue-header">
                                    <button type="button" @click="expandForOrderToggleFirm(firm.id)"
                                        class="sc-button sc-button-default sc-button-small uk-margin-small-right">
                                        <span
                                            :data-uk-icon="'icon:' + (getFirmForOrderExpanded(firm.id) ? 'minus' : 'plus')"
                                            class="uk-icon"></span>
                                    </button>
                                    {{ firm.text }}
                                    <span v-for="firmSum in sumOfFirmDetails(firm.id, true)" :key="firmSum.forexId"
                                        class="firm-summary">
                                        <b>{{ firmSum.forexCode }}</b>: {{ new
                                                Intl.NumberFormat('tr-TR', {
                                                    maximumFractionDigits: 2
                                                }).format(firmSum.overallTotal)
                                        }}
                                    </span>
                                    <button v-for="(ord, ordIndex) in getFirmOrderList(firm.id)" :key="ordIndex" v-show="firmIsOrdered(firm.id)" type="button"
                                        @click="showItemOrder(ord)" style="float:right;"
                                        class="sc-button sc-button-primary sc-button-small uk-margin-small-right">
                                        <span data-uk-icon="icon: link" class="uk-icon"></span>Sipariş: {{
                                                getFirmOrderNo(ord)
                                        }}
                                    </button>
                                </h6>
                                <table v-show="getFirmForOrderExpanded(firm.id)"
                                    class="uk-table uk-table-striped uk-table-responsive uk-table-small"
                                    style="width:100%">
                                    <tr>
                                        <th>Sıra</th>
                                        <th>Açıklama</th>
                                        <th>Döviz Cinsi</th>
                                        <th>Toplam (Döviz)</th>
                                        <th>Toplam (TL)</th>
                                    </tr>
                                    <tr v-for="(item, itemIndex) in getOrderDetailsByFirm(firm.id)" :key="itemIndex">
                                        <td>{{ item.lineNumber }}</td>
                                        <td>{{ item.itemExplanation }}</td>
                                        <td>{{ getForexCode(getFirmPriceOfDetail(item, firm.id).forexId) }}</td>
                                        <td>{{ getFirmPriceOfDetail(item, firm.id).overallForexTotal }}</td>
                                        <!-- <td>{{ getFirmPriceOfDetail(item, firm.id).overallTotal }}</td> -->
                                        <td>{{ new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 })
                                                .format(getFirmPriceOfDetail(item, firm.id).overallTotal)
                                        }}</td>
                                    </tr>
                                </table>
                            </div>
                            <h6 style="border-bottom:1px solid #333;">Genel Toplam</h6>
                            <p v-for="(orderSum, sumIndex) in sumOfOrder()" :key="orderSum.forexId"
                                style="margin-top:2px;margin-bottom:2px;" class="firm-summary">
                                <b>{{ orderSum.forexCode }}</b>: {{ new
                                        Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(orderSum.overallTotal)
                                }}
                            </p>
                        </div>
                    </div>
                </fieldset>

                <div class="uk-margin-large-top">
                    <button type="button" @click="onSubmit"
                        class="sc-button sc-button-primary sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: check" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onCancel"
                        class="sc-button sc-button-default sc-button-medium uk-margin-small-right">
                        <span data-uk-icon="icon: arrow-left" class="uk-icon"></span>
                    </button>
                    <button type="button" @click="onDelete" class="sc-button sc-button-danger sc-button-medium">
                        <span data-uk-icon="icon: trash" class="uk-icon"></span>
                    </button>
                </div>
            </form>
        </div>

        <div id="dlgDemandDetails" class="uk-modal" data-uk-modal stack="true">
            <div class="uk-modal-dialog uk-width-2-3" uk-overflow-auto>
                <div class="uk-modal-body">
                    <div class="uk-overflow-auto" v-if="currentDetail" style="max-height:500px;">
                        <div v-for="(demand, demandIndex) in currentDetail.demands" :key="demandIndex"
                            style="border:1px solid #888; border-radius:5px;margin:5px;padding:5px;" class="uk-grid">
                            <div class="uk-width-4-5@m">
                                <p class="uk-padding-remove uk-margin-remove"><b>Stok:</b> {{ demand.itemName }},
                                    <b>Proje: </b> {{ demand.projectName }}</p>
                                <p class="uk-padding-remove uk-margin-remove"><b>Açıklama:</b> {{ demand.itemExplanation
                                }}</p>
                                <p class="uk-padding-remove uk-margin-remove"><b>Parça No:</b> {{ demand.partNo }},
                                    <b>Boyut:</b> {{ demand.partDimensions }}, <b>Miktar:</b> {{ demand.demandQuantity
                                    }}</p>
                            </div>
                            <div class="uk-width-1-5@m">
                                <!-- <button type="button" @click="removeDemandDetailFromOrder(item, demand)" 
                                class="sc-button sc-button-danger sc-button-small uk-margin-medium-top uk-margin-small-right">
                                    <span data-uk-icon="icon: trash" class="uk-icon"></span>
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jQuery from '~/plugins/jquery'
import ScInput from '~/components/Input'
import ScTextarea from '~/components/Textarea'
import PrettyRadio from 'pretty-checkbox-vue/radio';
import PrettyCheck from 'pretty-checkbox-vue/check';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import { useApi } from '~/composable/useApi';
import { useUserSession } from '~/composable/userSession';
import axios, { AxiosInstance } from 'axios'
import moment from '~/plugins/moment'
import { timingSafeEqual } from 'crypto';

if (process.client) {
    require('~/plugins/inputmask');
    require('~/plugins/flatpickr');
}

export default {
    name: 'PurchaseItemOffer',
    emits: ['onOfferSaved', 'onCancel'],
    props: {
        recordId: {
            required: true,
            type: Number,
            default: 0,
        },
        isDialog: {
            type: Boolean,
            default: false,
        },
        dialogContainer: {
            type: String,
            default: '',
        },
    },
    components: {
        Datatable: process.client ? () => import('~/components/datatables/Datatables') : null,
        Select2: process.client ? () => import('~/components/Select2') : null,
        ScInput,
        ScTextarea,
        PrettyRadio,
        PrettyCheck
    },
    data: () => ({
        formData: {
            id: 0,
            receiptNo: '',
            receiptDate: null,
            plantId: null,
            offerType: 1,
            explanation: '',
            offerStatus: 0,
            details: [],
            firmOptions: [],
            firmPrices: [],
        },
        isSaving: false,
        isMounting: false,
        refreshDetailForm: false,
        refreshDemandList: false,
        details: [],
        firms: [],
        forexList: [],
        selectedFirms: [],
        dtOptions: {
            select: {
                style: 'single'
            },
            rowCallback: function (row, data, index) {
                if (data.receiptStatus == 3) {
                    $('td', row).addClass("bg-success");
                }
            },
            searching: false,
            paging: false,
        },
        dtDetailCols: [
            { data: "lineNumber", title: "Satır No", visible: true, },
            { data: "itemName", title: "Stok Adı", visible: true, render: function (data, ev, row) { return row.itemId && row.itemId > 0 ? row.itemName : row.itemExplanation; } },
            { data: "partNo", title: "Parça Kodu", visible: true, },
            { data: "partDimensions", title: "Boyutlar", visible: true, },
            { data: "quantity", title: "Miktar", visible: true, },
            // { data: "projectName", title: "Proje", visible: true, },
            { data: "forexCode", title: "Döviz", visible: true, },
            { data: "unitPrice", title: "Birim Fiyat", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR").format(data); } },
            { data: "taxRate", title: "Kdv %", visible: true, },
            { data: "overallTotal", title: "Tutar (Döviz)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR").format(row.forexId > 0 ? data : 0); } },
            { data: "overallTotal", title: "Tutar (TL)", visible: true, render: function (data, ev, row) { return new Intl.NumberFormat("tr-TR").format(row.forexId > 0 ? data * row.forexRate : data); } },
            { data: "statusText", title: "Durum", visible: true, },
        ],
        selectedOrderDetail: {
            id: 0,
        },
        currentDetail: null,
    }),
    computed: {
        fSubTotal: {
            get: function () {
                if (this.details && this.details.length > 0) {
                    const subTotal = this.details.map(d =>
                        (d.forexId && d.forexId > 0 ? (d.forexRate * d.unitPrice) : d.unitPrice) * d.quantity)
                        .reduce((a, b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }

                return "0";
            }
        },
        fSubForexTotal: {
            get: function () {
                if (this.details && this.details.length > 0) {
                    const subTotal = this.details.map(d =>
                        (d.forexId && d.forexId > 0 ? (d.unitPrice) : 0) * d.quantity)
                        .reduce((a, b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }

                return "0";
            }
        },
        fTotalPrice: {
            get: function () {
                if (this.details && this.details.length > 0) {
                    const subTotal = this.details.map(d =>
                        ((d.forexId && d.forexId > 0 ? (d.forexRate * d.unitPrice) : d.unitPrice)
                            + (d.taxIncluded == true ? 0 : (d.forexId && d.forexId > 0 ? (d.forexRate * d.unitPrice) : d.unitPrice) * (d.taxRate / 100.0))) * d.quantity)
                        .reduce((a, b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }

                return "0";
            }
        },
        fTotalForexPrice: {
            get: function () {
                if (this.details && this.details.length > 0) {
                    const subTotal = this.details.map(d =>
                        ((d.forexId && d.forexId > 0 ? d.unitPrice : 0)
                            + (d.taxIncluded == true ? d.unitPrice : (d.unitPrice * (d.taxRate / 100.0)))) * d.quantity
                    ).reduce((a, b) => a + b);

                    return new Intl.NumberFormat("tr-TR").format(subTotal);
                }

                return "0";
            }
        },
        offerIsOrdered() {
            return !this.formData.details.some(d => !d.orderDetail || d.orderDetail.id == 0);
        }
    },
    beforeDestroy() {
        if (UIkit.modal('.uk-modal'))
            UIkit.modal('.uk-modal').$destroy(true);
    },
    async mounted() {
        this.isMounting = true;
        this.formData.id = this.recordId;

        if (this.projectId && this.projectId > 0)
            this.formData.projectId = this.projectId;

        await this.bindModel();
        this.isMounting = false;
    },
    methods: {
        async bindModel() {
            const self = this;
            const api = useApi();
            try {
                const firmData = (await api.get('Firm')).data;
                if (firmData)
                    this.firms = firmData.map((d) => {
                        return {
                            ...d,
                            text: d.firmName,
                            expanded: true,
                            orderExpanded: true,
                        };
                    })

                const forexData = (await api.get('Forex')).data;
                if (forexData)
                    this.forexList = forexData.map((d) => {
                        return {
                            id: d.id.toString(),
                            text: d.forexName,
                        };
                    });

                const getData = (await api.get('ItemOffer/' + this.formData.id)).data;

                if (getData.receiptDate && getData.receiptDate.length > 0) {
                    getData.receiptDate = self.$moment(getData.receiptDate).format('YYYY-MM-DD');
                }

                if (getData && getData.id > 0) {
                    this.formData = getData;
                    this.formData.details = this.formData.details.map((d) => {
                        return {
                            ...d,
                            newRecord: false,
                            demands: d.demands.map((m) => {
                                return {
                                    ...m,
                                    newRecord: false,
                                };
                            }),
                            firmPrices: d.firmPrices.map((m) => {
                                return {
                                    ...m,
                                    isFirmSelected: m.firmId == d.acceptedFirmId
                                };
                            })
                        };
                    });
                }
                else {
                    this.formData.receiptNo = getData.receiptNo;
                    this.formData.receiptDate = self.$moment().format('YYYY-MM-DD');
                    this.details.splice(0, this.details.length);
                }

                // check if there is any demand groups in localStorage from waiting demands page
                if (process.client) {
                    try {
                        const localData = localStorage.getItem('grouped-demand-details');
                        if (localData) {
                            const groupedDemands = JSON.parse(localData);
                            if (groupedDemands && groupedDemands.length > 0) {
                                for (let i = 0; i < groupedDemands.length; i++) {
                                    const demandGroup = groupedDemands[i];
                                    const orderRow = {
                                        ...demandGroup,
                                        lineNumber: i + 1,
                                        id: i + 1,
                                        partNo: null,
                                        itemName: null,
                                        partDimensions: null,
                                        projectName: null,
                                        forexCode: null,
                                        offerStatus: 0,
                                        statusText: null,
                                        taxRate: 0,
                                        unitPrice: 0,
                                        overallTotal: 0,
                                        newRecord: true,
                                        demands: demandGroup.demandDetails.map((d) => {
                                            return {
                                                ...d,
                                                itemDemandDetailId: d.id,
                                                id: 0,
                                            };
                                        }),
                                        firmPrices: [],
                                    };

                                    this.formData.details.push(orderRow);
                                }
                            }

                            localStorage.removeItem('grouped-demand-details');
                        }

                        const localOptions = localStorage.getItem('grouped-demand-firms');
                        if (localOptions) {
                            const firmOptions = JSON.parse(localOptions);
                            if (firmOptions && firmOptions.length > 0) {
                                this.formData.firmOptions = firmOptions.map(d => {
                                    return {
                                        id: 0,
                                        firmId: d,
                                    }
                                });
                            }

                            localStorage.removeItem('grouped-demand-firms');
                        }

                    } catch (error) {

                    }
                }

                this.selectedFirms = this.formData.firmOptions.map(m => m.firmId);

            } catch (error) {

            }
        },
        getFirmOrderList(firmId){
            var orders = this.formData.details.filter(d => d.acceptedFirmId == firmId && d.orderDetail && d.orderDetail.id > 0)
                .map(d => d.orderDetail);
            
            var uniqueOrders = [];
            for (let i = 0; i < orders.length; i++) {
                const element = orders[i];
                if (!uniqueOrders.some(d => d.itemOrderId == element.itemOrderId))
                    uniqueOrders.push(element);
            }

            return uniqueOrders;
        },
        async onSubmit(stayInForm = false) {
            if (this.isSaving)
                return;
            this.isSaving = true;
            try {
                if (!this.formData.receiptDate) {
                    this.showNotification('Tarih seçmelisiniz.', false, 'error');
                    this.isSaving = false;
                    return;
                }

                this.formData.offerType = 1;

                this.formData.details = this.formData.details.map((d) => {
                    return {
                        ...d,
                        id: d.newRecord == true ? 0 : d.id,
                        demands: d.demands.map((m) => {
                            return {
                                ...m,
                                id: m.newRecord == true ? 0 : m.id,
                            };
                        })
                    };
                });

                this.formData.firmOptions = this.selectedFirms.map((d) => {
                    return {
                        firmId: parseInt(d)
                    };
                })

                const session = useUserSession();
                this.formData.plantId = session.user.plantId;

                const api = useApi();
                const postResult = (await api.post('ItemOffer', this.formData)).data;
                if (postResult.result) {
                    this.showNotification('Kayıt başarılı', false, 'success');
                    this.formData.id = postResult.recordId;
                    this.$emit('onOfferSaved');

                    if (!stayInForm) {
                        if (this.isDialog)
                            UIkit.modal(document.getElementById(this.dialogContainer)).hide();
                        else
                            this.$router.go(-1);
                    }
                    else {
                        await this.bindModel();
                        this.isSaving = false;
                        return true;
                    }
                }
                else {
                    this.showNotification(postResult.errorMessage, false, 'error');
                    this.isSaving = false;
                    return false;
                }
            } catch (error) {
                this.showNotification('Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.', false, 'error');
                this.isSaving = false;
                return false;
            }
            this.isSaving = false;
        },
        async createItemOrder() {
            if (process.client) {
                const self = this;

                UIkit.modal.confirm('Sipariş oluşturmak istediğinizden emin misiniz?').then(
                    async function () {
                        const saveResult = await self.onSubmit(true);
                        if (saveResult) {
                            const api = useApi();
                            const firmCluster = [];

                            // resolve accepted offer details
                            const offerDetails = self.formData.details.filter(d => d.acceptedFirmId != null && (!d.orderDetail || d.orderDetail.id == 0))
                                .map((d) => {
                                    return {
                                        ...d,
                                        forexId: self.getFirmPriceOfDetail(d, d.acceptedFirmId).forexId,
                                        unitPrice: self.getFirmPriceOfDetail(d, d.acceptedFirmId).unitPrice,
                                        forexRate: self.getFirmPriceOfDetail(d, d.acceptedFirmId).forexRate,
                                        overallTotal: self.getFirmPriceOfDetail(d, d.acceptedFirmId).overallForexTotal,
                                        itemOfferDetailId: d.id,
                                        demandConsumes: d.demands,
                                    }
                                });

                            // create firm groups
                            for (let i = 0; i < offerDetails.length; i++) {
                                const offerDetail = offerDetails[i];
                                if (!firmCluster.includes(offerDetail.acceptedFirmId))
                                    firmCluster.push(offerDetail.acceptedFirmId);
                            }

                            var orderCreationIsOk = true;

                            // create purchase orders
                            for (let i = 0; i < firmCluster.length; i++) {
                                const firmId = firmCluster[i];
                                const orderObj = {
                                    id: 0,
                                    receiptNo: '',
                                    receiptType: 1,
                                    receiptStatus: 0,
                                    firmId: firmId,
                                    plantId: self.formData.plantId,
                                    deadlineDate: null,
                                    receiptDate: null,
                                    details: offerDetails.filter(d => d.acceptedFirmId == firmId).map(d => {
                                        return {
                                            ...d,
                                            receiptStatus: 0,
                                        };
                                    }),
                                };

                                const postResult = (await api.post('ItemOrder', orderObj)).data
                                if (!postResult.result) {
                                    orderCreationIsOk = false;
                                    self.showNotification('Hata: ' + postResult.errorMessage, false, 'error')
                                }
                            }

                            // show notification
                            if (orderCreationIsOk) {
                                self.showNotification('Siparişler başarıyla oluşturuldu.', false, 'success');
                                await self.bindModel();
                            }
                        }
                    });
            }
        },
        onCancel() {
            if (this.isDialog)
                this.$emit('onCancel');
            else
                this.$router.push('/purchasing/item-offer/list');
        },
        async onDelete() {
            const self = this;
            UIkit.modal.confirm('Bu teklifi silmek istediğinizden emin misiniz?').then(
                async function () {
                    try {
                        const api = useApi();
                        const delResult = (await api.delete('ItemOffer/' + self.formData.id)).data;
                        if (delResult.result) {
                            self.showNotification('Silme işlemi başarılı', false, 'success');
                            this.$emit('onOfferSaved');

                            if (self.isDialog)
                                UIkit.modal(document.getElementById(self.dialogContainer)).hide();
                            else
                                self.$router.go(-1);
                        }
                        else
                            self.showNotification(delResult.errorMessage, false, 'error');
                    } catch (error) {

                    }
                });
        },
        onSelectedFirmsChanged(val) {
            const nonAcceptedDetails = this.formData.details.filter(d => d.acceptedFirmId != null && !val.includes(d.acceptedFirmId.toString()));
            for (let i = 0; i < nonAcceptedDetails.length; i++) {
                const detail = nonAcceptedDetails[i];
                detail.acceptedFirmId = null;
            }

            for (let i = 0; i < this.formData.details.length; i++) {
                const detail = this.formData.details[i];
                detail.firmPrices = detail.firmPrices.filter(d => val.includes(d.firmId.toString()));
            }

            this.selectedFirms = val;
        },
        removeOfferDetail() {
            const self = this;
            UIkit.modal.confirm('Seçilen teklif kalemini silmek istediğinizden emin misiniz?').then(
                function () {
                    if (self.selectedOrderDetail) {
                        const foundElement = self.details.find(d => d.id == self.selectedOrderDetail.id);
                        const orderIndex = self.details.indexOf(foundElement);
                        if (orderIndex > -1) {
                            self.details.splice(orderIndex, 1);

                            let lineNumber = 1;
                            for (let i = 0; i < self.details.length; i++) {
                                const row = self.details[i];
                                row.lineNumber = lineNumber;
                                lineNumber++;
                            }
                        }

                        self.selectedOrderDetail = { id: 0 };
                    }
                });

        },
        getForexCode(forexId) {
            const forexObj = this.forexList.find(d => d.id == forexId);
            if (forexObj)
                return forexObj.text;
            return '';
        },
        getFirmName(firmId) {
            const firmData = this.firms.find(d => d.id == firmId);
            if (firmData)
                return firmData.text;
            return '';
        },
        getFirmExpanded(firmId) {
            const firmData = this.firms.find(d => d.id == firmId);
            if (firmData)
                return firmData.expanded ?? true;

            return false;
        },
        getFirmForOrderExpanded(firmId) {
            const firmData = this.firms.find(d => d.id == firmId);
            if (firmData)
                return firmData.orderExpanded ?? true;

            return false;
        },
        getFirmPriceOfDetail(detail, firmId) {
            let priceExists = true;
            if (detail.firmPrices && detail.firmPrices.length > 0) {
                const currentPrice = detail.firmPrices.find(d => d.firmId == firmId);
                if (!currentPrice) {
                    priceExists = false;
                }
                else
                    return currentPrice;
            }
            else {
                priceExists = false;
            }

            if (!priceExists) {
                const newPrice = {
                    firmId: firmId,
                    forexId: null,
                    forexRate: null,
                    unitPrice: null,
                    subTotal: null,
                    subForexTotal: null,
                    overallTotal: null,
                    overallForexTotal: null,
                    isFirmSelected: false,
                };

                if (!detail.firmPrices)
                    detail.firmPrices = [];

                detail.firmPrices.push(newPrice);
                return newPrice;
            }
        },
        getFirmOfferSelected(detail, firm) {
            if (detail) {
                return detail.acceptedFirmId == firm;
            }

            return false;
        },
        getChoosenFirms() {
            const choosenFirms = [];
            const selectedDetails = this.formData.details.filter(d => d.acceptedFirmId != null);
            for (let i = 0; i < selectedDetails.length; i++) {
                const detail = selectedDetails[i];
                if (!choosenFirms.some(d => d.id == detail.acceptedFirmId)) {
                    const firmObj = this.firms.find(d => d.id == detail.acceptedFirmId);
                    if (firmObj)
                        choosenFirms.push(firmObj);
                }
            }

            return choosenFirms;
        },
        getOrderDetailsByFirm(firmId) {
            return this.formData.details.filter(d => d.acceptedFirmId == firmId);
        },
        sumOfFirmDetails(firmId, isAccepted) {
            const forexSummaries = [{ forexId: null, forexCode: 'TL', overallTotal: 0 }];

            for (let i = 0; i < this.formData.details.length; i++) {
                const detail = this.formData.details[i];

                if ((isAccepted && detail.acceptedFirmId == firmId) || !isAccepted) {
                    const firmPrice = this.getFirmPriceOfDetail(detail, firmId);
                    if (firmPrice) {
                        let relatedForex = forexSummaries.find(d => d.forexId == firmPrice.forexId);
                        if (!relatedForex) {
                            const forexObj = this.forexList.find(d => d.id == firmPrice.forexId);
                            relatedForex = { forexId: firmPrice.forexId, forexCode: forexObj?.text, overallTotal: 0 };
                            forexSummaries.push(relatedForex);
                        }

                        if (firmPrice.forexId != null)
                            relatedForex.overallTotal += firmPrice.overallForexTotal;
                        else
                            relatedForex.overallTotal += firmPrice.overallTotal;

                        forexSummaries[0].overallTotal += firmPrice.overallTotal;
                    }
                }
            }

            return forexSummaries;
        },
        sumOfOrder() {
            const forexSummaries = [{ forexId: null, forexCode: 'TL', overallTotal: 0 }];
            const acceptedDetails = this.formData.details.filter(d => d.acceptedFirmId != null);

            for (let i = 0; i < acceptedDetails.length; i++) {
                const detail = acceptedDetails[i];

                const firmPrice = this.getFirmPriceOfDetail(detail, detail.acceptedFirmId);
                if (firmPrice) {
                    let relatedForex = forexSummaries.find(d => d.forexId == firmPrice.forexId);
                    if (!relatedForex) {
                        const forexObj = this.forexList.find(d => d.id == firmPrice.forexId);
                        relatedForex = { forexId: firmPrice.forexId, forexCode: forexObj?.text, overallTotal: 0 };
                        forexSummaries.push(relatedForex);
                    }

                    if (firmPrice.forexId != null)
                        relatedForex.overallTotal += firmPrice.overallForexTotal;
                    else
                        relatedForex.overallTotal += firmPrice.overallTotal;

                    forexSummaries[0].overallTotal += firmPrice.overallTotal;
                }
            }

            return forexSummaries;
        },
        onChangeFirmOfferSelection(val, detail, firm) {
            if (val) {
                detail.acceptedFirmId = firm;
                const firmPrice = this.getFirmPriceOfDetail(detail, firm);
                if (firmPrice)
                    firmPrice.isFirmSelected = true;

                if (detail.firmPrices) {
                    for (let i = 0; i < detail.firmPrices.length; i++) {
                        if (detail.firmPrices[i].firmId != firm)
                            detail.firmPrices[i].isFirmSelected = false;
                    }
                }
            }
            else {
                detail.acceptedFirmId = null;
                const firmPrice = this.getFirmPriceOfDetail(detail, firm);
                if (firmPrice)
                    firmPrice.isFirmSelected = false;
            }
        },
        expandToggleFirm(firmId) {
            const firmData = this.firms.find(d => d.id == firmId);
            if (firmData) {
                firmData.expanded = !firmData.expanded;
            }
        },
        expandForOrderToggleFirm(firmId) {
            const firmData = this.firms.find(d => d.id == firmId);
            if (firmData) {
                firmData.orderExpanded = !firmData.orderExpanded;
            }
        },
        showNotification(text, pos, status, persistent) {
            var config = {};
            config.timeout = persistent ? !persistent : 3000;
            if (status) {
                config.status = status;
            }
            if (pos) {
                config.pos = pos;
            }
            UIkit.notification(text, config);
        },
        clickDetail: function (e, dt, type, indexes) {
            try {
                this.selectedOrderDetail = { ...this.details[indexes[0]] };
            } catch (error) {

            }
        },
        deselectDetail: function () {
            this.selectedOrderDetail = { id: 0 };
        },
        hasViewAuth(sectionKey) {
            if (process.client) {
                const session = useUserSession();
                if (session && session.checkAuthSection)
                    return session.checkAuthSection(sectionKey);
            }
            return false;
        },
        async updateLiveForexRate(val, detail, firmId) {
            const firmPrice = this.getFirmPriceOfDetail(detail, firmId);

            const reqUri = 'http://hasanadiguzel.com.tr/api/kurgetir';

            try {
                // US DOLLAR, EURO
                const api = axios.create();
                const data = (await api.get(reqUri)).data;

                firmPrice.forexId = val.toString();

                const selectedForex = this.forexList.find(d => d.id == parseInt(val));

                const searchCode = selectedForex.text == 'EUR' ? 'EURO' :
                    selectedForex.text == 'USD' ? 'US DOLLAR' : selectedForex.text;

                const foundForex = data.TCMB_AnlikKurBilgileri.find(d => d.CurrencyName == searchCode);
                if (foundForex) {
                    firmPrice.forexRate = foundForex.ForexSelling;
                    this.calculateTotal(detail, firmId);
                }
            } catch (error) {
                firmPrice.forexRate = null;
            }
        },
        calculateTotal(detail, firmId, calculateForDetail = false) {
            try {
                const firmPrice = this.getFirmPriceOfDetail(detail, firmId);
                if (firmPrice) {
                    const subTotal = detail.quantity * firmPrice.unitPrice;

                    let forexRate = 1;
                    if (firmPrice.forexId && firmPrice.forexId > 0)
                        forexRate = firmPrice.forexRate;

                    const subTotalLocal = subTotal * forexRate;

                    firmPrice.subTotal = subTotalLocal;
                    firmPrice.subForexTotal = subTotal;
                    firmPrice.overallForexTotal = subTotal;
                    firmPrice.overallTotal = firmPrice.overallForexTotal * forexRate;

                    if (calculateForDetail && detail.firmPrices) {
                        if (detail.firmPrices) {
                            for (let i = 0; i < detail.firmPrices.length; i++) {
                                const otherFirmId = detail.firmPrices[i].firmId;
                                this.calculateTotal(detail, otherFirmId);
                            }
                        }
                    }
                }
            } catch (error) {

            }
        },
        firmIsOrdered(firmId) {
            return this.formData && this.formData.details && this.formData.details.some(d => d.acceptedFirmId == firmId && d.orderDetail);
        },
        getFirmOrderNo(order) {
            console.log(order);
            let orderNo = '';
            try {
                orderNo = order.receiptNo;
                // const orderedDetail = this.formData.details.find(d => d.acceptedFirmId == firmId);
                // if (orderedDetail.orderDetail)
                //     orderNo = orderedDetail.orderDetail.receiptNo;
            } catch (error) {

            }

            return orderNo;
        },
        showItemOrder(order) {
            try {
                this.$router.push('/purchasing/item-order?id=' + order.itemOrderId);
                // if (orderedDetail.orderDetail){
                //     window.open('/purchasing/item-order?id=' + orderedDetail.orderDetail.itemOrderId, '_blank');
                // }
            } catch (error) {

            }
        },
        showDemandDetails(item) {
            this.currentDetail = item;

            const modalElement = document.getElementById('dlgDemandDetails');
            modalElement.width = window.innerWidth * 0.7;
            modalElement.height = window.innerHeight * 0.8;
            UIkit.modal(modalElement).show();
        }
    },
    watch: {
        recordId: async function (newVal, oldVal) {
            this.formData.id = this.recordId;
            await this.bindModel();
        },
    }
}
</script>

<style lang="scss">
@import '~scss/vue/_pretty_checkboxes';
@import "~scss/plugins/datatables";
</style>
<style type="text/css">
.bg-success {
    background-color: #11bf48;
}

.no-top-margin .select2-container {
    margin-top: 0px;
    z-index: 1300;
}

.blue-header {
    background-color: #8dc6ec;
    border-radius: 5px;
    padding: 5px;
}

.selected-offer,
.selected-offer td {
    background-color: rgba(17, 191, 72, 0.5);
}

.firm-summary {
    background-color: #b5d2e6;
    border-radius: 5px;
    border: 1px solid #888;
    padding: 2px 5px 2px 5px;
    margin-left: 5px;
}
</style>