import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";
import categories from "../data/categoryList.json";

const Activities = () => {
    return (
      <Container>
        <a href = "/activity_form/all">Full Actiivity List</a>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          {categories.map((category, index) => <CategoryCard category={category} key={index} />)}
        </Grid>
      </Container>
    )
}

export default Activities