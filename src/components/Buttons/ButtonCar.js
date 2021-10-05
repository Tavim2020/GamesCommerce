import React from 'react';
import { ButtonAddCar } from './style/ButtonCarStyle';
import CarIcon from '../../assets/cart-icon.svg';
import { GlobalContext } from '../../Context/GlobalContext';




const ButtonCar = ({index}) => {

    const { setArrayCar, countCar, arrayCar, setCountCar, dataResponse, effectAddToCar, setEffectAddCar } = React.useContext(GlobalContext)

    function addToCar(){
        setArrayCar([...arrayCar, dataResponse[index]]);
        setCountCar(countCar + 1);
        setEffectAddCar(true);
    }


    React.useEffect(()=>{
        if(effectAddToCar === true){
            setTimeout(()=>{
                setEffectAddCar(false);
            }, 1000)
        }
    }, [effectAddToCar, setEffectAddCar])

    return (
        <ButtonAddCar onClick={addToCar}>

            <span>Adicionar</span>

            <img src={CarIcon} alt='Car Icon' />
            
        </ButtonAddCar>
    )
}

export default ButtonCar;
