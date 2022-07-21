import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import { useNavigate } from "react-router-dom";
// import { useGlobalState } from "../utils/stateContext";

export default function CategoryCard({category}) {
  // const {dispatch} = useGlobalState
  // const navigate = useNavigate()

  // const handleCard = (e) => {
  //   e.preventDefault()
  //   dispatch({
  //           type: "setCategory",
  //           data: category.name
  //   })
  //   navigate("/activitiesList")   
  // }

  return (
    <Grid item xs={8} sm={4} md={3} sx={{display: "flex", justifyContent: "center"}} marginTop={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image={category.image}
          alt="activity category"
          />
          <CardContent>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Typography variant="h5" component="div">
                  {category.name}
                </Typography>
            </Box>
            <Box sx={{display: "flex", alignItems: "center"}} marginTop={3}>
              <Rating name="read-only" value={category.rating} readOnly precision={0.5} size="small" />          
              <Typography variant="body2" component="p" marginLeft={0.5} color="text.secondary">
              {category.rating}  
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5} color="text.secondary">
                {category.numberOfReviews}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

