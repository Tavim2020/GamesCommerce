import styled from 'styled-components';


export const ContainerMoreProducts = styled.section`
    width: 100vw;
    height: 100%;
    background-color: var(--color-clear);
    font-family: 'Lato', sans-serif;
    padding-bottom: 4vw;
    

    .containerMore{
        margin: 0 auto;
        width: 30vw;
        height: 4vw;
        padding-top: 3vw;
        margin-bottom: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 4vw;
        }

    }
`;

export const MoreGames = styled.h3`
    font-size: 2.5vw;
    color: var(--color-orange);
    text-align: center;

    strong{
        font-size: 2.5vw;
        color: var(--background-supera)
    }
`;

export const SearchContainer = styled.div`
    width: 100vw;
    height: 100%;

    .inputAndImg{
        margin: 0 auto;
        width: 80%;
        height: 4vw;
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            width: 60%;
            height: 100%;
            padding: 1vw;
            font-size: 1.3vw;
            border-radius: 1.2vw 0 0 1.2vw;
            outline: none;
            border: 0;
            color: var(--background-supera);
            letter-spacing: 0.08vw;
        }

        .busca{
            width: 7%;
            height: 100%;
            background-color: var(--color-orange);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 1.2vw 1.2vw 0;
            filter: brightness(0.8);
            transition: filter 0.5s;
            cursor: pointer;

            &:hover{
                filter: brightness(1);
            }

            img{
                width: 3vw;
            }
        }
    }

    > h4{
        text-align: center;
        margin-top: 2.5vw;
        color: var(--background-supera);
        font-size: 1.5vw;
    }

    .inputSort{
        margin: 0 auto;
        margin-top: 0.4vw;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        .check{
            margin: 0 auto;
            display: flex;

            input{
                width: 1.3vw;
                height: 1.3vw;
                cursor: pointer;
            }
            span{
                font-size: 1.1vw;
                margin-left: 0.5vw;
                cursor: pointer;
            }
        }
    }
`;