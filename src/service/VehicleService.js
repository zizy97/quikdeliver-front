import HttpService from './HttpService';
import AUTH from '../utils/constants';

export default class VehicleService {

  httpService = new HttpService();

  addNewVehicle(vehicle) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.post('api/v1/vehicles', vehicle, headers);
  }

  getVehicle(id) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.get(`api/v1/vehicles/${id}`);
  }

  updateVehicle(vehicle) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.put('api/v1/vehicles', vehicle, headers);
  }

  deleteVehicle(id) {
    return this.httpService.delete(`api/v1/vehicles/${id}`);
  }

  getVehicles() {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.get('api/v1/vehicles/' );
  }

}
