import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import { useGlobalState } from "../utils/stateContext";
import running from "../assets/running.jpg";
import "../style.css";
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const OrganiserActivitiesList = () => {
    const {store} = useGlobalState()
    const {activities, loggedInUser } = store
   
    let newActivities;
    
    if(typeof(activities) === "string") {
        newActivities = JSON.parse(activities)
    } else {
        newActivities = activities;
    }

   
    // get all organiser activities
    const organiserActivities = newActivities.filter(activity => activity.organiser === loggedInUser)
    // console.log(organiserActivities)

    return (
        <Container className="organiserActivityList_container">

            <Swiper className="organiserActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>

                {organiserActivities.map((activity, index) => {
                 
                    return (
                        <SwiperSlide className="categoried_activity" key={index}>
                            <Card>
                                <Link to={`/activities/${activity.id}`}>
                                <CardMedia
                                    className="category_avatar"
                                    component="img"
                                    image={running}
                                    alt="group running"
                                    />
                                <CardContent>
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
        
    )
}

export default OrganiserActivitiesList