// import { Card,  CardContent, Typography, Box } from "@mui/material"
// import { Link } from "react-router-dom"
// import Grid from "@mui/material/Grid";
// import Group from "../assets/group-running.jpg"

// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

// const Activity = ({activity}) => {
//     // const navigate = useNavigate()

//     // const handleEnquiry = () => {

//     // }

//     // const handlePayment = () => {
        
//     // }

//     return (
//         // <Grid item xs={8} sm={4} md={3} sx={{display: "flex", justifyContent: "center"}} marginTop={3}>
//         <>

//             <Swiper>
//                 <CardContent>
//                     <Link to={`/activities/${activity.id}`}>
//                     <img src={Group} alt="group running"/>

//                     <Box sx={{display: "flex", justifyContent: "center"}}>
//                             <Typography variant="p">{activity.date_time}</Typography>
//                     </Box>
//                     <Box sx={{display: "flex", justifyContent: "center"}}>
//                             <Typography variant="h5">{activity.title}</Typography>
//                     </Box>
//                     <Box sx={{display: "flex", justifyContent: "center"}}>
//                             <Typography variant="p">{activity.location}</Typography>
//                     </Box>
//                     {/* <Box sx={{display: "flex", justifyContent: "center"}}>
//                         <Button variant="contained" color="secondary" marginLeft={3} onClick={() => navigate("/messages")}>Enquiry</Button>
//                         <Button variant="contained" color="success" marginLeft={3} onClick={() => navigate("/payments")}>Register</Button>
//                     </Box> */}

//                     </Link>
//                 </CardContent>
//             </Swiper>

//         </>
//             // <Card sx={{ maxWidth: 500 }}>
//             //     <CardContent>
//             //         <Link to={`/activities/${activity.id}`}>
//             //         <img src={Group} alt="group running"/>

//             //         <Box sx={{display: "flex", justifyContent: "center"}}>
//             //                 <Typography variant="p">{activity.date_time}</Typography>
//             //         </Box>
//             //         <Box sx={{display: "flex", justifyContent: "center"}}>
//             //                 <Typography variant="h5">{activity.title}</Typography>
//             //         </Box>
//             //         <Box sx={{display: "flex", justifyContent: "center"}}>
//             //                 <Typography variant="p">{activity.location}</Typography>
//             //         </Box>
//             //         {/* <Box sx={{display: "flex", justifyContent: "center"}}>
//             //             <Button variant="contained" color="secondary" marginLeft={3} onClick={() => navigate("/messages")}>Enquiry</Button>
//             //             <Button variant="contained" color="success" marginLeft={3} onClick={() => navigate("/payments")}>Register</Button>
//             //         </Box> */}

//             //         </Link>
//             //     </CardContent>
//             // </Card>
//         // </Grid>
//     )
// }

// export default Activity