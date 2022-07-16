import home from "../assets/home.png"
import "../styles.css"
const Home = () => {
    return(
        <div className="home"> 
            <h2>Welcome to Sports 4 Us!</h2>
            <img src={home} alt="landing"/>
            <button>Sign up</button>
            <button>Log in</button>
            <button>Explore all activities</button>
        </div>
    )

}

export default Home