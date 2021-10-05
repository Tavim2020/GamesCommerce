import React from 'react';
import { CapaAndTextContainer } from './style/CapaAndTextStyle';
import { ArrayDestaquesGames } from '../../Object/ArrayDestaqueGames';

const CapaAndText = ({id}) => {
    return (
            <CapaAndTextContainer>

            <div className='capa'>

                <img src={ArrayDestaquesGames[id].capa} 
                alt={ArrayDestaquesGames[id].title} 
                title={ArrayDestaquesGames[id].title} />

            </div>

            <div className='text'>

                <h2>{ArrayDestaquesGames[id].destaque}</h2>

                <h3>{ArrayDestaquesGames[id].title}</h3>

                <span>{ArrayDestaquesGames[id].valor}</span>

            </div>

        </CapaAndTextContainer>
    )
}

export default CapaAndText;
