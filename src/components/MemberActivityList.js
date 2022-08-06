import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material"
import { useGlobalState } from "../utils/stateContext";
import running from "../assets/running.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const MemberActivitiesList = () => {
    const {store} = useGlobalState()
    const {memberActivities} = store
   
    let newActivities;
    
    if(typeof(memberActivities) === "string") {
        newActivities = JSON.parse(memberActivities)
    } else {
        newActivities = memberActivities;
    }

    return (
        <Container className="memberActivityList_container">

            <Swiper className="memberActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>

                {newActivities.map((activity, index) => {
                   {console.log("id",activity.id)}
                 
                    return (

                        <SwiperSlide className="categoried_activity" key={index}>
                         
                            <Card>
                                <Link to={`/activities/${(newActivities.indexOf(newActivities.find(({ id }) => id === activity.id)))+1}`}>
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

export default MemberActivitiesList