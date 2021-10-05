import React from 'react';

import { GlobalContext } from '../../Context/GlobalContext';
import { retornandoIdCapa } from '../../HoksAndFunctions/FunctionReturnIdCap';
import { ContainerCarItemsDiv } from './style/StyleCarContainer';

import ArrayImages from '../../arraysUsers/ArrayImages';
import IconremoveItem from '../../assets/remove.png';
import ButtonCheckOut from '../Buttons/ButtonCheckOut';

const ContainerCarItems = () => {

    const { countCar, setCountCar, arrayCar,
         clickedInCar } = React.useContext(GlobalContext);

        

 
       const total = Number(arrayCar.reduce((acc, item) => 
        acc + item.price, 0).toFixed(2))
        + Number((10 * arrayCar.length).toFixed(2));
        
        const valorDasCompras = arrayCar.reduce((acc, item) => 
        acc + item.price, 0).toFixed(2);
    
        const frete = 10 * arrayCar.length.toFixed(2);
   


    function removeItemArray(event){
            arrayCar.splice(event.target.id, 1);
            setCountCar(countCar - 1);
    }

    return (
        <>
          {arrayCar.length >= 1 && clickedInCar && (
                <ContainerCarItemsDiv className='carContainer'>

                    <h4 className='products'>Seus Produtos</h4>

                
                    {arrayCar.map((produtos, index) => 
                        <div className='wrapper' key={produtos.id + index}>
                            <div className='listProducts' >
                                <div className='imageContainer'>
                                    <img src={ArrayImages[retornandoIdCapa(produtos)]} 
                                    alt={produtos.name} />
                                </div>

                                <div className='titleAndPrice'>
                                    <h5>{produtos.name}</h5>
                                    <h6>R$:{produtos.price}</h6>

                                    <div className='remove'>
                                        <img 
                                        id={index} 
                                        src={IconremoveItem} 
                                        alt={'Remove Item'} 
                                        onClick={removeItemArray}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    )}

                    {arrayCar.length >= 1 &&  (
                        <div className='total'>
                            <h4>Valor do(s) Game(s):</h4>

                            <strong>
                                R$ {valorDasCompras}
                            </strong>
                        </div>
                    )}

                    <span></span>

                    {arrayCar.length >= 1 && (
                        <div className='total'>
                            <h4>Frete:</h4>

                            <strong>
                            {valorDasCompras <= 250 ? 'R$ ' : ''} 
                            {valorDasCompras <= 250 ? frete : 'Gratis'}
                            </strong>
                        </div>
                    )}

                    <span className='division'></span>

                    <div className='finalyTotal'>
                        <h6>
                            Total Com Frete: 
                        </h6>

                        <strong>
                            R$ {total && valorDasCompras <= 250 ? 
                            total.toFixed(2) : total - frete.toFixed(2)}
                        </strong>

                    </div>

                    <div className='moveToPayment'>

                        <ButtonCheckOut />

                    </div>

                </ContainerCarItemsDiv>
            )}  
        </>
    )
}

export default ContainerCarItems;
