let apiBaseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
let queryFilter = '&safeSearch=strict&key=';
require('dotenv').config();

export const urlBuilder = (query) => {
    if (query !== '') {
        const urlSafeQuery = urlify(query);
        console.log(`utils.urlBuilder urlSafeQuery ${urlSafeQuery}`);
        return `${apiBaseUrl}${urlSafeQuery}${queryFilter}AIzaSyDx3QIDNlSTTnSRjjK8a4F8AmexEbkNsUg`
    } else {
        throw Error("query is null");
    }
};

export const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
};

const urlify = (query) => {
    console.log(`utils.urlify param ${query}`);
    return query.trim().replace(/\s/g, '%20');
};