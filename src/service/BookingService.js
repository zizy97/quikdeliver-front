import HttpService from './HttpService';

export default class BookingService {

  httpService = new HttpService();

  findUpcomingBookings() {
    return this.httpService.get('api/v1/jobs');
  }

  findOnGoingBookings() {
    return this.httpService.get('api/v1/jobs');
  }

}
