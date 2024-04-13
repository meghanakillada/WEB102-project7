import crewmatesImage from './crewmates.png';
import './Home.css'

const Home = () => {

    return (
        <div className='Home'>
            <h1>Welcome to the Crewmate Gallery!</h1>
            <h3>Here you can create your very own set of crewmates before sending them off into space!</h3>
            <img src={crewmatesImage} alt="crewmates"></img>
        </div>
    )
}

export default Home