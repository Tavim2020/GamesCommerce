import styled from 'styled-components';

export const CapaAndTextContainer = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .capa{
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 27vw;
            height: 34vw;
            object-fit: cover;
            transition: transform 0.5s;

            &:hover{
                transform: scale3d(1.05, 1.05, 1);
                cursor: pointer;
            }
        }
    }

    .text{
        width: 35vw;
        height: 28vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--background-supera);
        border-radius: 50%;

        h2{
            color: var(--color-orange);
            font-size: 4vw;
            margin-bottom: 5vw;
        }

        h3{
            color: var(--white);
            font-size: 3.2vw;
            margin-bottom: 1.5vw;
            max-width: 35vw;
        }

        span{
            color: var(--white);
            font-size: 2.8vw;
        }
    }
`;