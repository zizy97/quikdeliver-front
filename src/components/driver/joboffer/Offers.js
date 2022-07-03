import  { React,useState } from 'react';
import {Container,Box,Grid, Typography, Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Tooltip, Fade } from '@mui/material';

import { styled } from '@mui/material/styles';

import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Offers = () => {
    const [expanded, setExpanded] = useState(false);
    // const [date, setDate] = useState("06 - May - 2022");
    const [iconColor, setIconColor] = useState("");

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const favoriteColor = () =>{
        setIconColor(blue[900]);
    }
    const defaultColor = () => {
        setIconColor("");
    }
    
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
                <Typography variant="h5" color="blue" sx={{fontWeight:'bold', color:blue[900]}}>Job Offers</Typography>
            </Grid>
            <hr/>
            <Grid sx={{display:'flex', flexDirection:'column', mt:5, paddingBottom:5, gap:2}}>
                <Grid item xs={12}>
                    <Card sx={{ maxWidth: '100%' , boxShadow:"0 0 5px 0 rgba(0,0,0,0.6)",}}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mahanati Travel Services"
                            // subheader={date}
                            subheader="06 - May - 2022"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Hello there!. We went through your profile and found that you're an excellent fit for our travel services company. So, We are pleased to provide you a job offer with exciting salary. If you wish to join with us, Please contact us before 3 weeks from the date we have sent you the request to book your interview date & time.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Add to favourites"
                            >
                                <IconButton aria-label="add to favorites" sx={{color:iconColor}} onClick={favoriteColor} onDoubleClick={defaultColor}>
                                <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Chat with us"
                            >
                                <IconButton aria-label="chat">
                                <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography variant="subtitle1" sx={{m:'5px 0'}}>Find us:</Typography>
                                <Grid
                                    sx={{
                                        margin:'0 15px',
                                    }}
                                >
                                    <Typography paragraph>
                                        Contact Us : 0212226987 , 0758964321
                                    </Typography>
                                    <Box sx={{display:'flex'}}>
                                        <Typography paragraph>
                                            Address : No.65, Old Tangalle road, Madagoda, Matara.
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Our location"
                                        >
                                            <IconButton aria-label="location"
                                            sx={{mt:'-20px'}}
                                            >
                                                <LocationOnIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ maxWidth: '100%',boxShadow:"0 0 5px 0 rgba(0,0,0,0.6)" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mahanati Travel Services"
                            // subheader={date}
                            subheader="06 - May - 2022"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Hello there!. We went through your profile and found that you're an excellent fit for our travel services company. So, We are pleased to provide you a job offer with exciting salary. If you wish to join with us, Please contact us before 3 weeks from the date we have sent you the request to book your interview date & time.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Add to favourites"
                            >
                                <IconButton aria-label="add to favorites" sx={{color:iconColor}} onClick={favoriteColor} onDoubleClick={defaultColor}>
                                <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Chat with us"
                            >
                                <IconButton aria-label="chat">
                                <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography variant="subtitle1" sx={{m:'5px 0'}}>Find us:</Typography>
                                <Grid
                                    sx={{
                                        margin:'0 15px',
                                    }}
                                >
                                    <Typography paragraph>
                                        Contact Us : 0212226987 , 0758964321
                                    </Typography>
                                    <Box sx={{display:'flex'}}>
                                        <Typography paragraph>
                                            Address : No.65, Old Tangalle road, Madagoda, Matara.
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Our location"
                                        >
                                            <IconButton aria-label="location"
                                            sx={{mt:'-20px'}}
                                            >
                                                <LocationOnIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ maxWidth: '100%',boxShadow:"0 0 5px 0 rgba(0,0,0,0.6)" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mahanati Travel Services"
                            // subheader={date}
                            subheader="06 - May - 2022"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Hello there!. We went through your profile and found that you're an excellent fit for our travel services company. So, We are pleased to provide you a job offer with exciting salary. If you wish to join with us, Please contact us before 3 weeks from the date we have sent you the request to book your interview date & time.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Add to favourites"
                            >
                                <IconButton aria-label="add to favorites" sx={{color:iconColor}} onClick={favoriteColor} onDoubleClick={defaultColor}>
                                <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Chat with us"
                            >
                                <IconButton aria-label="chat">
                                <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography variant="subtitle1" sx={{m:'5px 0'}}>Find us:</Typography>
                                <Grid
                                    sx={{
                                        margin:'0 15px',
                                    }}
                                >
                                    <Typography paragraph>
                                        Contact Us : 0212226987 , 0758964321
                                    </Typography>
                                    <Box sx={{display:'flex'}}>
                                        <Typography paragraph>
                                            Address : No.65, Old Tangalle road, Madagoda, Matara.
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Our location"
                                        >
                                            <IconButton aria-label="location"
                                            sx={{mt:'-20px'}}
                                            >
                                                <LocationOnIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ maxWidth: '100%',boxShadow:"0 0 5px 0 rgba(0,0,0,0.6)" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mahanati Travel Services"
                            // subheader={date}
                            subheader="06 - May - 2022"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Hello there!. We went through your profile and found that you're an excellent fit for our travel services company. So, We are pleased to provide you a job offer with exciting salary. If you wish to join with us, Please contact us before 3 weeks from the date we have sent you the request to book your interview date & time.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Add to favourites"
                            >
                                <IconButton aria-label="add to favorites" sx={{color:iconColor}} onClick={favoriteColor} onDoubleClick={defaultColor}>
                                <FavoriteIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip
                                arrow
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title="Chat with us"
                            >
                                <IconButton aria-label="chat">
                                <ChatIcon />
                                </IconButton>
                            </Tooltip>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography variant="subtitle1" sx={{m:'5px 0'}}>Find us:</Typography>
                                <Grid
                                    sx={{
                                        margin:'0 15px',
                                    }}
                                >
                                    <Typography paragraph>
                                        Contact Us : 0212226987 , 0758964321
                                    </Typography>
                                    <Box sx={{display:'flex'}}>
                                        <Typography paragraph>
                                            Address : No.65, Old Tangalle road, Madagoda, Matara.
                                        </Typography>
                                        <Tooltip
                                            arrow
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Our location"
                                        >
                                            <IconButton aria-label="location"
                                            sx={{mt:'-20px'}}
                                            >
                                                <LocationOnIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Offers;