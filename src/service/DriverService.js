import HttpService from './HttpService';
import AUTH from '../utils/constants';

export default class DriverService {

  httpService = new HttpService();

  addNewDriver(driver) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.post('api/v1/drivers', driver, headers);
  }

  updateNewDriver(driver) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.put('api/v1/drivers', driver, headers);
  }

  getDriver(id) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.get(`api/v1/drivers/${id}`);
  }

  deleteDriver(id) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.delete(`api/v1/drivers/${id}`);
  }

  getDrivers() {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.get('api/v1/drivers/' );
  }

}
