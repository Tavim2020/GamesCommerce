import React from 'react';
import { ContainerMoreProducts, MoreGames, SearchContainer } from './style/StyleMoreProducts';
import IconMore from '../../assets/iconsMais.svg';
import ListMoreGames from '../ListMoreGames/ListMoreGames';
import IconSearch from '../../assets/pesquisa.png';
import { GlobalContext } from '../../Context/GlobalContext';



const MoreProducts = () => {

    const { normalState,
        setNormalState,
        crescenteState,
        setCrescenteState,
        popularidadeState,
        setPopularidadeState,
        priceState,
        setPriceState, 
        dataResponse,
        setDataResponse,
        inputValue,
        setInputValue, 
        arrayTrueOrFalse,
        setArraySearch,
        setArrayTrueOrFalse} = React.useContext(GlobalContext);

    const crescenteTrueOrFalse = React.useRef(false);
    const priceTrueOrFalse = React.useRef(false);
    const popularTrueOrFalse = React.useRef(false);



        React.useEffect(()=>{

            if(!crescenteState && !priceState && !popularidadeState){
                async function loadData(){
                    const response = await fetch('http://localhost:3535/server');
                    const data = await response.json();
                    setDataResponse(data);  
                }
        
                loadData();
                
                
                setNormalState(true);  
                crescenteTrueOrFalse.current.checked = false;
                priceTrueOrFalse.current.checked = false;
                popularTrueOrFalse.current.checked = false;
                
            }
            
        }, [crescenteState, popularidadeState, priceState, setDataResponse,
            setNormalState, inputValue, setArrayTrueOrFalse]);

            
        //     React.useEffect(()=>{
        //         if(inputValue === ""){
        //              async function loadData(){
        //                  const response = await fetch('http://localhost:3535/server');
        //                 const data = await response.json();
        //                 setDataResponse(data);  
        //             }

        //             setArrayTrueOrFalse(false)
        //             loadData();
                    
        //             setNormalState(true);  
        //             crescenteTrueOrFalse.current.checked = false;
        //             priceTrueOrFalse.current.checked = false;
        //             popularTrueOrFalse.current.checked = false;
        //     }
        // }, [inputValue, setDataResponse, setNormalState, setArrayTrueOrFalse])
        

        function activeCrescente(){
            if(popularidadeState || priceState || normalState || arrayTrueOrFalse){
                setPopularidadeState(false);
                setPriceState(false);
                setNormalState(false);
                setArrayTrueOrFalse(false);
            }
            setCrescenteState(!crescenteState);
            dataResponse.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            priceTrueOrFalse.current.checked = false;
            popularTrueOrFalse.current.checked = false;
            crescenteTrueOrFalse.current.checked = true;
        }


        function activePriceOrdem(){
            if(popularidadeState || crescenteState || normalState || arrayTrueOrFalse){
                setPopularidadeState(false);
                setCrescenteState(false);
                setNormalState(false);
                setArrayTrueOrFalse(false);
            }
            setPriceState(!priceState);
            dataResponse.sort((a,b) => a.price - b.price );
            crescenteTrueOrFalse.current.checked = false;
            popularTrueOrFalse.current.checked = false;
            priceTrueOrFalse.current.checked = true;
        }


        function activePopularOrdem(){
            if(priceState || crescenteState || normalState || arrayTrueOrFalse){
                setPriceState(false);
                setCrescenteState(false);
                setNormalState(false);
                setArrayTrueOrFalse(false);
            }
            setPopularidadeState(!popularidadeState);
            dataResponse.sort((a,b) => b.score - a.score);
            crescenteTrueOrFalse.current.checked = false;
            priceTrueOrFalse.current.checked = false;
            popularTrueOrFalse.current.checked = true;
        }

        function searchArray(){
            if(inputValue.length >= 1){
                const valueCorrectWithoutSpace = inputValue.trim();
                const valueCorrectArray = valueCorrectWithoutSpace.split(" ");
                const upperCaseValue = valueCorrectArray.map((palavra) => palavra[0].toLocaleUpperCase() + palavra.substr(1));
                const completeConvertionCapitalize = upperCaseValue.join(' ');
                
                setPopularidadeState(false);
                setPriceState(false);
                setCrescenteState(false);
                setNormalState(false);
                setArraySearch(dataResponse.filter((game) => game.name.match(completeConvertionCapitalize)));
                setArrayTrueOrFalse(true)
            }
        }


        function capturarTecla(event){
            if(event.code === 'Enter') searchArray();
        }

    return (
        <ContainerMoreProducts>

            <div className='containerMore'>

                <MoreGames>
                    <strong>More</strong> Games
                </MoreGames>

                <img src={IconMore} alt={'Icone De Mais'} />

            </div>

            <SearchContainer>


                <div className={'inputAndImg'}>

                    <input 
                    type='text' 
                    value={inputValue}
                    placeholder='Search For Name' 
                    id='search'
                    onChange={({target}) => setInputValue(target.value)}
                    onKeyDown={capturarTecla}/>

                    <div className={'busca'} onClick={searchArray}>

                        <img src={IconSearch} alt={'Search Icon'} />

                    </div>

                </div>


                <h4>Organizar Lista de Games</h4>


                <div className={'inputSort'}>

                    <div className={'check'} onClick={activeCrescente}>
                        <input type='checkbox'ref={crescenteTrueOrFalse}/>
                        <span>A-Z</span>
                    </div>

                    <div className={'check'} onClick={activePriceOrdem}>
                        <input type='checkbox' ref={priceTrueOrFalse}/>
                        <span>Price</span>
                    </div>

                    <div className={'check'} onClick={activePopularOrdem}>
                        <input type='checkbox' ref={popularTrueOrFalse}/>
                        <span>Score</span>
                    </div>

                </div>


            </SearchContainer>

            <ListMoreGames />

            
        </ContainerMoreProducts>
    )
}

export default MoreProducts;
