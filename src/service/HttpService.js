import AUTH from '../utils/constants';
import axios from 'axios';
// { AxiosStatic }

export default class HttpService {

  baseUrl = 'https://quik-booking-platform.herokuapp.com/booking-service/';

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
