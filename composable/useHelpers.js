export function getQS(key){
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(key);
    return value;
}