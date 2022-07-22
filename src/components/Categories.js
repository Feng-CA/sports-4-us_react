import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";
import categories from "../data/categoryList.json";
import { Link } from "react-router-dom";

const Categories = () => {
   
    return (
      <Container>
        {/* <Tab label="Full Activity List" component={Link} to="/activities" /> */}
        <Box sx={{display: "flex", justifyContent: "center"}} component={Link} to="/activities">
                <Typography variant="h5" component="div">
                  Full Activities List
                </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} >
          {categories.map((category, index) => <CategoryCard category={category} key={index} />)}
        </Grid>
      </Container>
    )
}

export default Categories