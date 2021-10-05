import styled from 'styled-components';


export const LogOutContainer = styled.div`
    margin: 0 auto;
    width: 50%;
    height: 10vw;
    background-color: var(--color-clear);
    border-radius: 1.2vw;
    position: fixed;
    top: 40%;
    left: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    border: 0.16vw solid var(--background-supera);

    h5{
        text-align: center;
        font-size: 1.5vw;
        color: var(--backgroud-supera);
        letter-spacing: 0.04vw;
        font-weight: 600;
       
    }

    div{
        margin: 0 auto;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        button{
            width: 7vw;
            height: 3.5vw;
            background-color: var(--color-orange);
            border-radius: 1.2vw;
            color: var(--white);
            outline: none;
            cursor: pointer;
            border: none;
            &:hover{
                border: 0.16vw solid var(--background-supera);
            }
        }
    }
`;