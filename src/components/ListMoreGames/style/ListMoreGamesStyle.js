import styled from 'styled-components';

export const ContainerListMoreGames = styled.div`
width: 100vw;
height: 100%;
margin-top: 6vw;
`;


export const DivGames = styled.div`
margin: 0 auto;
width: 19vw;
height: 100%;
border-right: 0.2vw solid var(--color-orange);
border-left: 0.2vw solid var(--color-orange);
border-top: 2vw solid var(--color-orange);
border-bottom: 2vw solid var(--color-orange);
border-radius: 0.4vw;


div:nth-child(1){
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2vw;
    margin-top: 1vw;
}

h5{
    margin: 0 auto;
    font-size: 1.4vw;
    max-width: 10vw;
    max-width: 80%;
    text-align: center;
    margin-bottom: 1vw;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 2vw;
}

.capa{
    width: 12vw;
}

.twoDiv{
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6{
        font-size: 1.2vw;
    }
}
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 85vw;
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 2vw;
`;