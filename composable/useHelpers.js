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