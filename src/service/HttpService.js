import AUTH from '../utils/constants';
import axios, { AxiosStatic } from 'axios';

export default class HttpService {

  baseUrl = 'http://gradeamoversbackend-env.eba-dnpq5qjq.ap-southeast-1.elasticbeanstalk.com/booking-service/';

  get(url) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return axios.get(this.baseUrl + url, { headers });

  }

  post(url, body, headers) {

    return axios.post(this.baseUrl + url, body, { headers });

  }

  patch(url, body, headers) {

    return axios.patch(this.baseUrl + url, body, { headers });

  }

  put(url, body, headers) {

    return axios.put(this.baseUrl + url, body, { headers });

  }

}
