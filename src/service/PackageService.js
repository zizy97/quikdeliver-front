import HttpService from './HttpService';
import AUTH from '../utils/constants';

export default class PackageService {

  httpService = new HttpService();

  createPackageDeliveryRequest(packageDeliveryRequest) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.post('api/v1/packages', packageDeliveryRequest, headers);
  }

  findPackageDeliveryRequest(packageDeliveryId) {
    return this.httpService.get(`api/v1/packages/${packageDeliveryId}`);
  }

  findPackageDeliveryRequestHash(hash) {
    return this.httpService.get(`api/v1/paymentproof/packages/hash/${hash}`);
  }

  findPackageDeliveryRequests() {
    return this.httpService.get('api/v1/packages/delivery-requests');
  }

  findOngoingPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/ongoing');
  }

  findUpcomingPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/upcoming');
  }

  findCompletedPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/completed');
  }

  findExpiredPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/expired');
  }

  findRejectedPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/rejected');
  }

  findNotAllocatedPackageDeliveryRequests() {
    return this.httpService.get('api/v1/deliveries/not-allocated');
  }

  updateDeliveryPackageStatus(id, status) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    const packageDeliveryRequest = {
      id: id,
      status: status
    };
    return this.httpService.patch(`api/v1/packages/${id}`, packageDeliveryRequest, headers);
  }

  RejectDeliveryPackageStatus(id, reason) {
    // const headers = {
    //   'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    // };
    // const packageDeliveryRequest = {
    //   id: id,
    //   status: status
    // };
    return this.httpService.get(`api/v1/packages/${id}/reject?reason=${reason}`);
  }

  paymentProofUpload(file, packageDeliveryRequestId, description) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN),
        'Content-Type': 'multipart/form-data'
    };
    const formData = new FormData();
    formData.append('file', file);
    formData.append('packageDeliveryRequestId', packageDeliveryRequestId);
    formData.append('description', description);
    return this.httpService.post('api/v1/payments/proof', formData, headers);
  }

  paymentProofDownload(id) {
    return this.httpService.get(`api/v1/payments/proof/${id}/download`);
  }

  doPayment(id, currentPaidAmount, newAddition) {
    const newTotalPaid = parseInt(currentPaidAmount)+parseInt(newAddition);
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    const packageDeliveryRequest = {
      id: id,
      paidAmount: newTotalPaid
    };
    return this.httpService.patch(`api/v1/packages/${id}/payment`, packageDeliveryRequest, headers);

  }

  packageImagesUpload(files, packageDeliveryRequestId) {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN),
      'Content-Type': 'multipart/form-data'
    };
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });
    formData.append('packageDeliveryRequestId', packageDeliveryRequestId);
    return this.httpService.post('api/v1/packages/images', formData, headers);
  }

  calculateDistance(origin, destination) {
    return this.httpService.get(`api/v1/distance?origin=${origin}&destination=${destination}`);
  }

  findAllVehicles() {
    return this.httpService.get('api/v1/vehicles');
  }

  findAllDrivers() {
    return this.httpService.get('api/v1/drivers');
  }
}
