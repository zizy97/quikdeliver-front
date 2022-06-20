import {  React,useState } from 'react';

import {Container, Grid,Typography, TextField, Box,Rating} from '@mui/material';

import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import {blue} from '@mui/material/colors';

import { DataGrid, } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Ref', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 200,
    editable: false,
    renderCell: (params) => {
      return (
      <Rating 
        sx={{
            '& .MuiRating-iconFilled':{color:blue[700],},
        }} 
        name="read-only"
        value={params.value}
        readOnly />);
    },
  },
  {
    field:"comments",
    headerName:"Comments",
    width:300,
    renderCell:(params) => {
        return(
            <div
                style={{
                    display:'flex',
                    flexWrap:'wrap'
                }}
            >
                <Typography variant="body2" color="initial">{params.value}</Typography>
            </div>
        )
    },
    editable:false
  },
  

];

const rows = [
  { id: 'DOC1', name: 'Snow',  rating:5, comments:"Awesome service. On-time &quality deliery"},
  { id: 'DOK2', name: 'Lannister',  rating:3},
  { id: 'DOK3', name: 'Lannister', rating:4}, 
  { id: 'DOC4', name: 'Lannister', rating:2}, 
  { id: 'DOM5', name: 'Lannister', rating:3},
  { id: 'DOC6', name: 'Lannister', rating:5},
  { id: 'DOM7', name: 'Lannister',  rating:1},
];

const HistoryList = () => {

    const [pageSize, setPageSize] = useState(5);

  return (
    <Container sx={{ height: 400, width: '100%' ,m:0,mt:3}}>
      <DataGrid
        elevation={10}
        sx={{
            bgcolor:'rgba(255,255,255,0.9)',
            borderRadius:'6px',
            padding:'0 10px',
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize)=> setPageSize(newPageSize)}
        rowsPerPageOptions={[5,10,20]}
        disableSelectionOnClick
      />
    </Container>
  );
}

const History = () => {
    return (
        <Container>
            <Grid
                sx={{
                margin:0,
                padding:'6px',
                width:"100%",
                mt:8,
                mb:2,
                }}
            >
                <Typography variant="h5"  sx={{fontWeight:'bold',color:blue[900] }}>History</Typography>
            </Grid>
            <hr/>
            <Grid
                sx={{
                    mt:'30px',
                    width:"100%",
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    gap:'25px',
                    alignItems:"center",
                    bgcolor:"rgba(255,255,255,0.4)",
                    padding:"8px 12px",
                    boxShadow:"0 0 4px 0 rgba(0,0,0,0.6)",
                    borderRadius:"8px",
                }}
            >
                <Grid item
                    xs={5}
                    sx={{
                        display:{md:'flex',lg:'flex'},
                        gap:"20px"
                    }}
                >
                    <Typography 
                    variant="subtitle1"
                    sx={{
                        color:blue[700],
                        fontWeight:'bold',
                        fontSize:'16px',
                        textAlign:{xs:'center',sm:"center",md:"left",lg:"left"}
                    }}
                    >From</Typography>

                    <TextField
                        id="from"
                        variant='outlined'
                        format="dd/mm'yyyy"
                        value={"22/05/2022"}
                        inputProps={{min:0,style:{textAlign:'center',
                        height:"max-content",
                        fontSize:{xs:'10px',sm:'14px',md:'15px',lg:'15px'},
                        margin:0,
                        padding:5}}}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { border: "2px solid grey" ,
                                borderRadius:'15px',
                            },
                            },
                        }}
                    /> 
                </Grid> 
                <Grid
                    item
                    xs={2}
                >
                    <CompareArrowsIcon color='primary' sx={{mt:{xs:'25px',sm:'25px',md:'10px',lg:'0px'},marginLeft:"10px", fontSize:'36px', color:blue[700]}}/>
                </Grid>
                <Grid
                    item
                    xs={5}
                    sx={{
                        display:{md:'flex',lg:'flex'},
                        gap:"20px"
                    }}
                >
                    <Typography 
                    variant="subtitle1"
                    sx={{
                        color:blue[700],
                        fontWeight:'bold',
                        fontSize:'16px',
                        textAlign:{xs:'center',sm:"center",md:"left",lg:"left"}
                    }}
                    >To</Typography>

                    <TextField
                    id="to"
                    variant='outlined'
                    format="dd/mm'yyyy"
                    elevation={5}
                    value={"12/06/2022"}
                    inputProps={{min:0,style:{textAlign:'center',
                        height:"max-content",
                        fontSize:{xs:'13px',sm:'14px',md:'15px',lg:'15px'},
                        margin:0,
                        padding:5,
                    }}}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { border: "2px solid grey" ,
                                borderRadius:'15px',
                            },
                            },
                        }}
                    /> 
                </Grid>          
            </Grid>
            <Box
                sx={{
                    width:'100%',
                    mt:'5px',
                    padding:'5px 0',
                }}
            >
                <HistoryList/>
            </Box>
        </Container>
    );
};

export default History;