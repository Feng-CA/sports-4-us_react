import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import running from "../assets/running.jpg";

export default function CategoryCard() {
  return (  
    <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Typography variant="h5" component="div">
                    Cycling
                </Typography>
            </Box>
            <CardMedia
            component="img"
            height="140"
            image={running}
            alt="activity"
            />
            <CardContent>
            <Box sx={{display: "flex", alignItems: "center"}} marginTop={3}>
              <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />          
              <Typography variant="body2" component="p" marginLeft={0.5} color="text.secondary">
                  4.5
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5} color="text.secondary">
                  (625 reviews)
              </Typography>
            </Box>
            </CardContent>
        </CardActionArea>
        </Card>
    </Grid>
  );
}

