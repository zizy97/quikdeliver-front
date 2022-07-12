import { Helmet } from 'react-helmet';
import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import AllocationService from '../../service/AllocationService';
import { useEffect } from 'react';
import PackageService from '../../service/PackageService';
import { DownloadIcon } from '../../components/common/icons/Icons';
import { Tooltip } from '@mui/material';
import ReportTableTest from '../../components/report/ReportTableTest';


const Reports = () => {
  const [loading, setLoading] = useState(false);
  const [allocations, setAllocations] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedDriver, setSelectedDriver] = useState();
  const [selectedDriverName, setSelectedDriverName] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const allocationService = new AllocationService();

  // useEffect(async () => {
  //   setLoading(true);
  //   console.log('iiii', page);
  //   const allocationsRes = await allocationService.getReportData(page, limit, fromDate, toDate, selectedDriverName);
  //   console.log(allocationsRes.data);
  //   setTotal(allocationsRes.data.total);
  //   setAllocations(allocationsRes.data.allocations);
  //   setLoading(false);
  // }, [fromDate, toDate, selectedDriverName, page, limit]);

  // useEffect(async () => {
  //   const packageService = new PackageService();
  //   const driversRes = await packageService.findAllDrivers();
  //   const driversDrop = driversRes.data.filter(driver => !driver.currentAllocationStatus).map(driver => {
  //     return {
  //       ...driver,
  //       label: driver.name
  //     };
  //   });
  //   console.log(driversDrop);
  //   setDrivers(driversDrop);
  // }, []);

  const handleFromDateChange = (e)=>{
    console.log(e.target.value);
    setFromDate(e.target.value);
    setToDate(e.target.value);
    setPage(0);
  };

  const handleToDateChange = (e)=>{
    console.log(e);
    setToDate(e.target.value);
    setPage(0);
  };

  // const applyFilters = async () => {
  //   setLoading(true);
  //   console.log('iiii');
  //   const allocationsRes = await allocationService.findAllAllocations(fromDate, toDate, selectedDriver);
  //   console.log(allocationsRes.data);
  //   setAllocations(allocationsRes.data);
  //   setLoading(false);
  // };  

  const clearFilters = () => {
    setFromDate('');
    setToDate('');
    // applyFilters();
  };

  const handleDownload = async () => {
    const downloadReportRes = await allocationService.downloadReportData(fromDate, toDate, selectedDriverName);
    console.log(downloadReportRes.data);
    var downloadLink = document.createElement('a')
    downloadLink.target = '_blank'
    downloadLink.download = 'new_pdf_haha.pdf'
    var blob = new Blob([downloadReportRes.data], { type: 'application/pdf' })
    var URL = window.URL || window.webkitURL
    var downloadUrl = URL.createObjectURL(blob)
    downloadLink.href = downloadUrl
    document.body.append(downloadLink) // THIS LINE ISN'T NECESSARY
    downloadLink.click()
    document.body.removeChild(downloadLink);  // THIS LINE ISN'T NECESSARY
    URL.revokeObjectURL(downloadUrl);
  }

  return (<>
    <Helmet>
      <title>Reports</title>
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
              <CardHeader style = {{display: 'inline-block'}}
                title='Reports'
              />
              <CardActions style = {{display: 'inline-block', float: 'right'}} >
                    <Tooltip title="Download"><Button onClick={handleDownload} size="small" ><DownloadIcon height="48" width="48"/></Button></Tooltip>
                </CardActions>
            </Card>
          </Box>
        </Box>
        <CardContent>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >

              <TextField
                // error={Boolean(touched.pickupDate && errors.pickupDate)}
                fullWidth
                // helperText={touched.pickupDate && errors.pickupDate}
                label='From'
                margin='normal'
                name='fromDate'
                id='fromDate'
                // onBlur={handleBlur}
                onChange={handleFromDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                type='date'
                value={fromDate}
                variant='outlined'
              />
              <TextField
              style={{marginLeft:'5px'}}
              disabled={!fromDate}
                // error={Boolean(touched.pickupDate && errors.pickupDate)}
                fullWidth
                // helperText={touched.pickupDate && errors.pickupDate}
                label='To'
                margin='normal'
                name='toDate'
                id='toDate'
                // onBlur={handleBlur}
                onChange={handleToDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                type='date'
                value={toDate}
                variant='outlined'
              />
            </Grid>
            {/* <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <FormControl variant="outlined">
                  <InputLabel htmlFor="pickupTime" id="demo-simple-select-helper-label">Date Range</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={'last-7-days'} >
                    <MenuItem value={'last-7-days'}>Last 7 days</MenuItem>
                    <MenuItem value={'last-month'}>Last Month</MenuItem>
                    <MenuItem value={'last-3-months'}>Last 3 Months</MenuItem>
                  </Select>
              </FormControl>
            </Grid> */}
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Autocomplete
                style={{marginTop:'8px'}}
                autoHighlight
                disablePortal
                onChange={(event, value) => {
                  console.log(value);
                  if(value){
                    setSelectedDriverName(value.name);
                    setPage(0);
                  }else {
                    setSelectedDriverName('');
                    setPage(0);
                  }
                  
                  // setSelectedDriver(value);
                }}
                id="combo-box-demo"
                options={drivers}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={'Driver Name'} />}
              />
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              {/* <Button
                color='primary'
                variant='contained'
                onClick={() => applyFilters()}
              >
                Filter
              </Button>
              <Button
                color='primary'
                variant='contained'
                onClick={() => clearFilters()}
              >
                Clear
              </Button> */}
            </Grid>
          </Grid>
        </CardContent>
        {loading && (
          <CircularProgress
            size={100}
            sx={{
              color: 'primary',
              position: 'fixed',
              top: '50%',
              left: '47%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
        <Box sx={{ pt: 3 }}>
          {/* <ReportTable allocations={allocations} setLimit={setLimit} setPage={setPage} limit={limit} page={page}/> */}
          <ReportTableTest allocations={allocations} />
        </Box>
        <Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardHeader
                style={{display:'inline-block'}}
                title='Total (Rs)'
              />
              <CardContent style={{float: 'right', display: 'inline', fontWeight:'bolder', marginRight: '7%'}}>{parseFloat(total).toFixed(2)}</CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  </>

  )
};

export default Reports;
