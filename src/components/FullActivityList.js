import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import { useGlobalState } from "../utils/stateContext";
import running from "../assets/running.jpg";
import { useEffect } from "react";


// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { getActivities } from "../services/activitiesServices";

const ActivitiesList = () => {
    const {store, dispatch} = useGlobalState()
    const {activities} = store
   
    let newActivities;
    
    if(typeof(activities) === "string") {
        newActivities = JSON.parse(activities)
    } else {
        newActivities = activities;
    }

    useEffect(() => {
        //Get all the activities from the back end
        getActivities()
        .then(response => {
          sessionStorage.setItem("activities", JSON.stringify(response.data))
          dispatch({
            type: 'setActivities',
            data: response.data
          })
        })
    },[]);

    return (
        <Container className="fullActivityList_container">

            <Swiper className="fullActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>

                {newActivities.map((activity, index) => {
                 
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

export default ActivitiesList