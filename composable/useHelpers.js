export function getQS(key){
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(key);
    return value;
}

export function numberToStr(numberData){
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(numberData);
}

export function dateToStr(dateString, format) {
    const moment = require('moment');

    if (dateString && dateString.length > 0) {
      try {
        const dtObj = moment(dateString);
        const result = dtObj ? dtObj.format(format ?? 'DD.MM.YYYY') : dateString;
        return result;
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

  export function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
 }

 export function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

 export function uint8ArrayToBase64(array){
  var decoder = new TextDecoder('utf8');
  var b64encoded = Buffer.from(array).toString('base64'); //btoa(decoder.decode(array));
  return b64encoded;
 }

  export function parseLocaleNumber(stringNumber, locale) {
    var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}