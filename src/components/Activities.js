import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";
import categories from "../data/categoryList.json";
import { Link} from "react-router-dom";
import { Tab } from "@mui/material"

const Activities = () => {
    return (
      <Container>
        <Tab label="Full Activity List" component={Link} to="/activitylist"/>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          {categories.map((category, index) => <CategoryCard category={category} key={index} />)}
        </Grid>
      </Container>
    )
}

export default Activities