import styled from 'styled-components';


export const ButtonAddCar = styled.button`
        margin: 0 auto;
        width: 80%;
        height: 4vw;
        border-radius: 2vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 1.5vw;
        background-color: var(--color-orange);
        margin-bottom: 2vw;
        border: 0;
        filter: brightness(0.8);
        transition: filter 0.5s;
        cursor: pointer;
        

        span{
            color: var(--white);
            font-size: 1.3vw;
        }

        img{
            width: 3.5vw;
        }

        &:hover{
            filter: brightness(1);
        }
`;