import React from 'react';
import { HomeContainer } from './style/HomeStyle';
import MenuContainer from '../components/MenuContainer/MenuContainer';
import SlideBestGames from '../components/Slide/SlideBestGames';
import CarFixed from '../components/CarFixed/CarFixed';
import ConfirmLogOut from '../components/ConfirmLogOut/ConfirmLogOut';
import MoreProducts from '../components/MoreProducts/MoreProducts';
import { GlobalContext } from '../Context/GlobalContext';


const Home = () => {

    const { countCar, setClickedInCar } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        if(countCar === 0){
             setClickedInCar(false);
        }
    }, [countCar, setClickedInCar])

    return (
        <HomeContainer>

            <MenuContainer />
           
            <SlideBestGames />

            <MoreProducts />

            <CarFixed />

            <ConfirmLogOut />
            
        </HomeContainer>
    )
}

export default Home;
