var numeral = require("numeral");
import Vue from 'vue';

Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0,00"); // displaying other groupings/separators is possible, look at the docs
});