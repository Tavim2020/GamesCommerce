import React from 'react';
import ButtonCar from '../Buttons/ButtonCar';
import ArrayImages from '../../arraysUsers/ArrayImages';


import { ContainerListMoreGames, DivGames, Container } from './style/ListMoreGamesStyle';
import { retornandoIdCapa } from '../../HoksAndFunctions/FunctionReturnIdCap';
import { GlobalContext } from '../../Context/GlobalContext';



const ListMoreGames = () => {

    const { setDataResponse, normalState, 
        crescenteState, priceState, dataResponse, 
        popularidadeState, arraySearch, arrayTrueOrFalse } = React.useContext(GlobalContext);
    

    
    React.useCallback(()=> {
         async function loadData(){
            const response = await fetch('http://localhost:3535/server');
            const data = await response.json();
            setDataResponse(data);  
        }

        loadData();
    }, [setDataResponse]);

    


    return (
        <ContainerListMoreGames>

            <Container>

                
                {normalState || crescenteState || priceState || popularidadeState ? dataResponse.map((game, index) =>(
                    <DivGames key={game.id}>
                        <div>

                            <img className={'capa'} src={ArrayImages[retornandoIdCapa(game)]} alt={game.name} />

                        </div>

                        <h5>{game.name.toLowerCase()}</h5>

                        <div className='twoDiv'>

                            <h6>R$: {game.price.toFixed(2)}</h6>

                            <h6>{game.score}</h6>

                        </div>

                        <ButtonCar index={index} />

                    </DivGames>
                )) : null}


                {arrayTrueOrFalse &&  arraySearch.map((game, index) =>(
                    <DivGames key={game.id}>
                        <div>

                            <img className={'capa'} src={ArrayImages[retornandoIdCapa(game)]} alt={game.name} />

                        </div>

                        <h5>{game.name.toLowerCase()}</h5>

                        <div className='twoDiv'>

                            <h6>R$: {game.price.toFixed(2)}</h6>

                            <h6>{game.score}</h6>

                        </div>

                        <ButtonCar index={index} />

                    </DivGames>
                ))}


            </Container>
            
        </ContainerListMoreGames>
    )
}

export default ListMoreGames;
