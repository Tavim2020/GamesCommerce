import styled from 'styled-components';

export const Button = styled.button`
    margin: 0 auto;
    width: 12vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(0.8);
    cursor: pointer;
    border-radius: 2vw;
    transition: filter 0.5s;
    font-family: 'Lato', sans-serif;
    font-size: 1vw;


    img{
        width: 3vw;
    }

    &:hover{
        filter: brightness(1);
    }
`;


export const NameUserContainer = styled.div`
    margin: 0 auto;
    width: 26vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;


    .avatarAndName{
        width: 12.5vw;
        height: 100%;
        display: flex;
        align-items: center;

        img{
            border-radius: 50%;
            width: 4vw;
            margin-right: 1vw;
        }
    }

    h4{
        color: var(--white);
        font-size: 1.3vw
    }

    button{
        width: 50%;
        height: 80%;
        align-items: center;
        justify-content: center;
        border-radius: 2vw;
        cursor: pointer;
        transition: background-color 0.5s;
        background-color: var(--color-clear);
        color: var(--background-supera);
        font-size: 1.1vw;
        font-weight: 600;

        &:hover{
            background-color: var(--color-orange);
            color: var(--white);
        }
    }

`;