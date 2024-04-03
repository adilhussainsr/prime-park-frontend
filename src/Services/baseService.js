import axios from 'axios';

// universal methode to call api
export function _callApi(data, url, headerdata = '', method = 1) {
    var result;

    let defaultSetting = {
        //"_SERVERURL" :"http://localhost:8000/api/v1/",
        //"_SERVERURL" :process.env.REACT_APP_API_URL,
       }
    let siteSetting = defaultSetting;
    switch (process.env.REACT_APP_ENV) {
        case "prod" :
        case  "production":
            siteSetting = {
                "_SERVERURL" :process.env.REACT_APP_API_URL,
             }
            break;
     
        case "dev" :
        case  "development":
            siteSetting = {
                "_SERVERURL" :process.env.REACT_APP_API_LOCAL_URL,
            }
            break;
          
        case "local" :
        case  "localhost":
            siteSetting = {
                "_SERVERURL" :process.env.REACT_APP_API_LOCAL_URL,
                }
            break;
        default:
            siteSetting = defaultSetting;
    }

    if (headerdata === '') {
        headerdata = {
            'accesstoken': localStorage.getItem('accessToken'),
            'Authorization': localStorage.getItem('accessToken'),
            "Access-Control-Allow-Origin": "*",
            'crossDomain': true
        };
    }else if(headerdata === 2) {
        headerdata = {
            'accesstoken': localStorage.getItem('accessToken'),
            'Authorization': localStorage.getItem('accessToken'),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
            'crossDomain': true
        };
    }else if(headerdata === 3) {
        headerdata = {
            'accesstoken': localStorage.getItem('accessToken'),
            'Authorization':localStorage.getItem('accessToken'),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            'crossDomain': true
        };
    }
    else{
        headerdata = {
           
            "Access-Control-Allow-Origin": "*",
            'crossDomain': true
        };
    }
     const instance = axios.create({
        baseURL: siteSetting._SERVERURL,
        timeout: 30000,
        headers: headerdata
    });

    if (method === 1) {

      
        // if method post
        result = instance.post(url, data)
            .then((response) => {
               
                return response;
            })
            .catch((error) => {
                console.log(error.response)
                 if(error.response){
                    
               return error.response.data;
                }else{
                    var newData={msg:error.toString(),data:{},status:401}
                    return newData;
                }
            });
    }
    if (method === 3) {

      
        // if method post
        result = instance.put(url, data)
            .then((response) => {
               
                return response;
            })
            .catch((error) => {
              
                if(error.response){
                    return error.response.data;
                     }else{
                         var newData={msg:error.toString(),data:{},status:401}
                         return newData;
                     }
            });
    }
    if (method === 2) {

        // if method get
        result = instance.get(url, data)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                if(error.response){
                    return error.response.data;
                     }else{
                         var newData={msg:error.toString(),data:{},status:401}
                         return newData;
                     }
            });
    }
    if (method === 4) {

        // if method get
        result = instance.delete(url, data)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                if(error.response){
                    return error.response.data;
                     }else{
                         var newData={msg:error.toString(),data:{},status:401}
                         return newData;
                     }
            });
    }
     return result;

}
