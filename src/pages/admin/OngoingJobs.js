/* eslint-disable no-unused-vars */
import JobList from '../../components/customer/JobList';
import React,{useState} from 'react';
import BookingService from '../../service/BookingService';
import ContentLayout from '../../components/common/ContentLayout';

export default function OngoingJobs() {
  const [loading, setloading] = useState(false)
  const [customers, setcustomers] = useState([])
  return (
    <ContentLayout
    header="Ongoing Bookings"
    title="Ongoing Bookings"
    loading={loading}
    Component={<JobList customers={customers} />}
  />
  )
}
