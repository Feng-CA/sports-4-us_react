import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";
import categories from "../data/categoryList.json";
import { Link } from "react-router-dom";

const Categories = () => {
   
    return (
        <Container className='categories_container'>
        	<Box sx={{display: "flex", justifyContent: "center"}} marginTop={3} component={Link} to="/activities">
                <Button variant="contained" color="secondary" size="large" marginBottom={2}>
                  Full Activities List
                </Button>
       		</Box>
			<Grid container spacing={{ xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
			{categories.map((category, index) => <CategoryCard category={category} key={index} />)}
			</Grid>
      </Container>
    )
}

export default Categories