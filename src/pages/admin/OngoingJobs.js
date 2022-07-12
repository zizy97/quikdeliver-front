import { Helmet } from 'react-helmet';
import { Box, Card, CardHeader, Container } from '@mui/material';
import JobList from '../../components/customer/JobList';
import React from 'react';
import BookingService from '../../service/BookingService';

export default class OngoingJobs extends React.Component {
  bookingService = new BookingService();

  constructor(props) {
    super(props);

    this.state = { customers: [] };
  }

  componentDidMount() {
    // this.findOnGoingBookings();
  }

  findOnGoingBookings() {
    this.bookingService.findOnGoingBookings()
      .then(response => {
        this.setState({ customers: response.data });
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Ongoing Bookings</title>
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
                    title="Ongoing Bookings"
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
    );
  }
}

