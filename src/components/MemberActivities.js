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

const MemberActivities = () => {
    const {store} = useGlobalState()
    const {bookingsList, loggedInUser, activities } = store

    let newActivities;
    
    if(typeof(activities) === "string") {
        newActivities = JSON.parse(activities)
    } else {
        newActivities = activities;
    }

   
    let newBookingsList;
    
    if(typeof(bookingsList) === "string") {
        newBookingsList = JSON.parse(bookingsList)
    } else {
        newBookingsList = bookingsList;
    }

   
    // get all organiser activities
    console.log("loggedInUser:", loggedInUser)
    //console.log("organiser", activity)
    const memberActivities = newBookingsList.filter(booking => booking.member === loggedInUser)
    console.log(memberActivities)

    return (
        <Container className="organiserActivityList_container">

            <Swiper className="organiserActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>

                {memberActivities.map((activity, index) => {
                    return (
                          
                        <SwiperSlide className="categoried_activity" key={index}>
                            <Link to={`/activities/${(newActivities.indexOf(newActivities.find(({ id }) => id === activity.activity_id)))+1}`}>
                                <Card>
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
                                            <Typography variant="h5">{activity.activity_title}</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="p">{activity.location}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        
        </Container>
        
    )
}

export default MemberActivities