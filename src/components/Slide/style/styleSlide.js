import styled from 'styled-components';
import { ArrayDestaquesGames } from '../../../Object/ArrayDestaqueGames';

export const SlideBestGamesContainer = styled.section`
    width: 100%;
    height: 55vw;
    position: relative;
    background-image: url(${ArrayDestaquesGames[0].background});
    background-size: cover;
    object-fit: cover;
    font-family: var(--font);
    
    img{
        width: 100%;
        object-fit: cover;
        image-rendering: optimizeQuality;
    }
`;


export const TreeBallMoveImage = styled.div`
    margin: 0 auto;
    width: 12vw;
    height: 3vw;
    margin-top: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ball{
        width: 2vw;
        height: 2vw;
        border-radius: 50%;
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.5s;

        .center{
            width: 1.25vw;
            height: 1.25vw;
            border-radius: 50%;
            background-color: var(--background-supera);

        }

        &:hover{
            transform: scale3d(1.15, 1.15, 1);
        }

    }
`;