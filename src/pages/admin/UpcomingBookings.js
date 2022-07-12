import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import { Box, Card, CardHeader, Container } from '@mui/material';
import JobList from '../../components/customer/JobList';
import BookingService from '../../service/BookingService';

export default function UpcomingBookings() {
  const [customers, setcustomers] = useState([])
  return (
    <>
    <Helmet>
      <title>Upcoming Bookings</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader
                title="Upcoming Bookings"
              />
            </Card>
          </Box>
        </Box>
        <Box sx={{ pt: 3 }}>
          <JobList customers={this.state.customers} />
        </Box>
      </Container>
    </Box>
  </>
  )
}

