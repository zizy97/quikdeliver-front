import HttpService from './HttpService';
import AUTH from '../utils/constants';

export default class AllocationService {

  httpService = new HttpService();

  createAllocation(allocation) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.post('api/v1/allocations', allocation, headers);
  }

  updateAllocation(packageDelivery, duration) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem(AUTH.TOKEN)
    };
    return this.httpService.put(`api/v1/allocations?duration=${duration}`, packageDelivery, headers);
  }

  findAllAllocations(page, pageSize, from, to, driverName) {
    console.log('2222');
    let filters = "?";
    if(from) filters+=`from=${from}`;
    if(page) filters+=`${filters.length>1? '&': ''}pageNo=${page}`;
    if(pageSize) filters+=`${filters.length>1? '&': ''}pageSize=${pageSize}`;
    if(to) filters+=`${filters.length>1? '&': ''}to=${to}`;
    if(driverName) filters+=`${from?'&':''}driverName=${driverName}`;
    console.log(filters);
    return this.httpService.get(`api/v1/allocations${filters}`);
  }

  getReportData(page, pageSize, from, to, driverName) {
    let filters = "?";
    if(from) filters+=`from=${from}`;
    if(page) filters+=`${filters.length>1? '&': ''}pageNo=${page}`;
    if(pageSize) filters+=`${filters.length>1? '&': ''}pageSize=${pageSize}`;
    if(to) filters+=`${filters.length>1? '&': ''}to=${to}`;
    if(driverName) filters+=`${from?'&':''}driverName=${driverName}`;
    return this.httpService.get(`api/v1/report${filters}`);
  }

  downloadReportData(from, to, driverName) {
    let filters = "?";
    if(from) filters+=`from=${from}`;
    if(to) filters+=`${filters.length>1? '&': ''}to=${to}`;
    if(driverName) filters+=`${from?'&':''}driverName=${driverName}`;
    return this.httpService.get(`api/v1/report/export/pdf${filters}`);
  }

  findAllAllocationsWithStatus(status) {
    return this.httpService.get(`api/v1/allocations/status?status=${status}`);
  }

  findAllOngoingAllocations(date) {
    return this.httpService.get(`api/v1/allocations/ongoing?date=${date}`);
  }

  findAllUpcomingAllocations(todayDate) {
    return this.httpService.get(`api/v1/allocations/upcoming?todayDate=${todayDate}`);
  }

  findAllCompletedAllocations() {
    return this.httpService.get(`api/v1/allocations/status?status=DELIVERY_COMPLETED`);
  }

  findAllRejectedAllocations() {
    return this.httpService.get(`api/v1/allocations/status?status=ADMIN_REJECTED`);
  }

  // findAllAllocations() {
  //   return this.httpService.get('api/v1/allocations');
  // }

  findAllocation(id) {
    return this.httpService.get(`api/v1/allocations/${id}`);
  }

}
