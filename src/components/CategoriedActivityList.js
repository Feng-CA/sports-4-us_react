import { useParams, Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import group from "../assets/group-running.jpg";
import "../style.css";

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

//This form lists all the activities in a particular sporting category
//By clicking each category you can also navigate to the individual category page.
const CategoriedActivityList = () => {
    const {store} = useGlobalState()
    const {activities} = store
    const params = useParams()
    // const navigate = useNavigate()
    console.log((params.id)) 

    // const handleClick = (e) => {
    //     console.log(e.target.value)
    //     navigate(`/activities/${Number(e.target.value)}`)
    // }

    return (
        <Container className="categoriedActivityList_container">

            <Swiper className="categoriedActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>
                
                {/* eslint-disable-next-line */}
                {activities.map((activity) => {
                    if (activity.category_id === Number(params.id))
                    return (
                        <SwiperSlide className="categoried_activity">
                            <Card>
                                <Link to={`/activities/${activity.id}`}>
                                <CardMedia
                                    className="category_avatar"
                                    component="img"
                                    image={group}
                                    alt="group running"
                                    />
                                <CardContent>
                                    {/* <Box className="category_avatar">
                                        <img src={group} alt="group running"/>
                                    </Box> */}
                                    <Box>
                                        <Typography variant="p">{activity.date_time}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5">{activity.title}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="p">{activity.location}</Typography>
                                    </Box>
                                </CardContent>
                                    </Link>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        
        </Container>
            
        
        

    
    //     <ul>          
    //         {activities.map((activity) => (activity.category_id === Number(params.id))&&
    //         <li><button value={activity.id} onClick ={(e)=>handleClick(e)}>{activity.title}</button></li>
    //         )}        
    //    </ul>
    
    // <Grid>
    
    //     {activities.map((activity) => (activity.category_id === Number(params.id))&&
    //     <Card value={activity.id} onClick = {(e) => handleClick(e)}>
    //         <Activity key={activity.id} activity={activity} />
    //     </Card>
    //     )}
    
    // </Grid>
    )
}

export default CategoriedActivityList