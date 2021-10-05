import React from 'react';
import { MenuExpostoContainer, TextClassification, Sessoes, 
    TitleTypeGames } from './style/MenuExpostoStyle';
import { Link } from 'react-router-dom';


const MenuExposto = ({color}) => {

    return (
        <MenuExpostoContainer color={color}>

            <TextClassification>

                <h2>Tipos de Games Mais Procurados</h2>

            </TextClassification>

            <Sessoes id='sessao'>

                <ul className='containerTypeGames'>

                    <Link to='#'><TitleTypeGames color={color}>FPS</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>Estratégia</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>Simulação</TitleTypeGames></Link>

                </ul>



                <ul className='containerTypeGames'>

                    <Link to='#'><TitleTypeGames color={color}>Luta</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>Corrida</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>RPG</TitleTypeGames></Link>

                </ul>



                <ul className='containerTypeGames'>

                    <Link to='#'><TitleTypeGames color={color}>Aventura</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>Esportes</TitleTypeGames></Link>

                    <Link to='#'><TitleTypeGames color={color}>Ação</TitleTypeGames></Link>


                </ul>


            </Sessoes>

        </MenuExpostoContainer>
    )
}

export default MenuExposto;
