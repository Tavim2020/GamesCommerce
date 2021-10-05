import styled from 'styled-components';


export const MenuExpostoContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
    margin-top: 2vw;
    font-family: 'Lato', sans-serif;
`;

export const TextClassification = styled.div`
    width: 100%;
    height: 3vw;
    margin-bottom: 0.3vw;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 2vw;
        color: var(--white);
        transition: color 0.5s;
    }
`;

export const Sessoes = styled.nav`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;

    .containerTypeGames{
        margin: 0 auto;
        width: 15vw;
        height: 100%;
    }
`;

export const TitleTypeGames = styled.li`
    margin: 0 auto;
    width: max-content;
    color: var(--white);
    text-align: center;
    margin-bottom: 0.5vw;
    cursor: pointer;
    font-size: 1.4vw;

    &:hover{
        color: ${({color}) => color ? `${color}` : ''};
    }
`;