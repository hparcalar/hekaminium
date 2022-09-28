export function getQS(key){
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(key);
    return value;
}

export function dateToStr(dateString) {
    const moment = require('moment');

    if (dateString && dateString.length > 0) {
      try {
        const dtObj = moment(dateString);
        return dtObj ? dtObj.format('DD.MM.YYYY') : dateString;
      } catch (error) {}
    }
  
    return dateString;
  }

  export function strToDate(dateString) {
    const moment = require('moment');

    try {
        return moment(dateString);
    } catch (error) {
        
    }

    return null;
  }

  export function parseLocaleNumber(stringNumber, locale) {
    var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}