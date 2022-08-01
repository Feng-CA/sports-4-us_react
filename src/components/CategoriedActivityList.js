import { useParams, Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import group from "../assets/group-running.jpg";
// import "../style.css";
import categoryList from "../data/categoryList.json";


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

    console.log(params.id)

    let newActivities;
    
    if(typeof(activities) === "string") {
        newActivities = JSON.parse(activities)
    } else {
        newActivities = activities
    }

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
                {newActivities.map((activity, index) => {
                    if (activity.category === categoryList[Number(params.id)-1].name)
                    return (
                        <SwiperSlide className="categoried_activity" key={index}>
                            <Card>
                                <Link to={`/activities/${activity.id}`}>
                                    <CardMedia
                                        className="category_avatar"
                                        component="img"
                                        image={group}
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

export default CategoriedActivityList