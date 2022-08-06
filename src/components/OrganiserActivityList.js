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
    console.log("loggedInUser:", loggedInUser)
    //console.log("organiser", activity)
    const organiserActivities = newActivities.filter(activity => activity.organiser === loggedInUser)
    console.log(organiserActivities)

    return (
        <>
        {(organiserActivities.length===0)?
        <div>
            <br>
            </br>
            <Typography className="main_heading" variant="p">
                            You Currently Have No Participating Activities.
            </Typography>
        </div>:
         <div>
         <Typography className="main_heading" variant="p">
                         Your Organised Activities:
         </Typography>
     </div> }
        <Container className="organiserActivityList_container">

            <Swiper className="organiserActivityList_swiper"
                    // install Swiper modules
                    modules={[Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}>

                {organiserActivities.map((activity, index) => {
                //   {console.log("id",activity.id)}
                //   {console.log("index", index)}
                //   {console.log(newActivities.indexOf(newActivities.find(({ id }) => id === activity.id)))}
                    return (
                        <SwiperSlide className="categoried_activity" key={index}>
                            <Link to={`/activities/${(newActivities.indexOf(newActivities.find(({ id }) => id === activity.id)))+1}`}>
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
                                            <Typography variant="h5">{activity.title}</Typography>
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
        </>  
    )
}

export default OrganiserActivitiesList