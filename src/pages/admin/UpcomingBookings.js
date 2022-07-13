/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import JobList from '../../components/customer/JobList';
import BookingService from '../../service/BookingService';
import ContentLayout from '../../components/common/ContentLayout';

export default function UpcomingBookings() {
  const [customers, setcustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
   <ContentLayout
   header="Upcoming Bookings"
   title="Upcoming Bookings"
   loading={loading}
   Component={<JobList customers={this.state.customers} />}
 />
  )
}

