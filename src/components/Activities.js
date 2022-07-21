import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";
import categories from "../data/categoryList.json";
import { useGlobalState } from "../utils/stateContext";
import { useNavigate } from "react-router-dom";

const Activities = () => {
    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

    const handleCategory = ({category}) => {
      dispatch({
              type: "setSelectesCategory",
              data: category.name
      })
      navigate("/activitiesList") 
    }

    return (
      <Container>
        <Grid container spacing={{ xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} >
          {categories.map((category, index) => <CategoryCard category={category} key={index} handleCategory={handleCategory}/>)}
        </Grid>
      </Container>
    )
}

export default Activities