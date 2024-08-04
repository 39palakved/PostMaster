
import axios from 'axios';

import {  getHeadersAndParams } from '../utils/Commonutils';

export const getData = async (formdata, jsonText, paramData, headerData) => {
    
    const apiType = formdata.type.toLowerCase(); 
    const apiUrl = formdata.url;
    const apiHeaders = getHeadersAndParams(headerData);
    const apiParams = getHeadersAndParams(paramData);

    try {
        return await axios({
            method: apiType,
            url: apiUrl,
            body: jsonText,
            headers: apiHeaders,
            params: apiParams
        })
    } catch (error) {
        console.log('Error while getting the response ', error);
        return 'error';
    }
}

