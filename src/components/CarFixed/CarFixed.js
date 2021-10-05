import React from 'react';
import { CarFixedContainer } from './style/CarFixedStyle';
import CarIcon from '../../assets/cart-icon.svg';
import { GlobalContext } from '../../Context/GlobalContext';



const CarFixed = () => {

    const { effectAddToCar, carPosition, setClickedInCar } = React.useContext(GlobalContext);

    function scrollToCar(){
        if(carPosition){
            window.scroll({
                top: carPosition.current.offsetTop,
                behavior: 'smooth'
            })
            setClickedInCar(true);
        }
    }

    return (
        <CarFixedContainer effectaddtocar={effectAddToCar} onClick={scrollToCar}>

            <img src={CarIcon} alt={'Icone do Carrinho'} effectaddtocar={effectAddToCar.value} />
            
        </CarFixedContainer>
    )
}

export default CarFixed;
