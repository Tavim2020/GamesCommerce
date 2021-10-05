import styled from 'styled-components';

export const CarFixedContainer = styled.div`
    position: fixed;
    width: 8vw;
    height: 8vw;
    bottom: 3%;
    right: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--background-supera);
    cursor: pointer;

    img{
        width: 3.5vw;

        animation: ${({effectaddtocar}) => effectaddtocar ? 'animateCar' : ''};
        animation-duration: 1s;
        animation-delay: 100ms;
        transition: transform 1s;
        @keyframes animateCar{
            30%{
                transform: translateY(-1vw);
            }
            50%{
                transform: translateY(0vw);
            }
            70%{
                transform: translateX(1vw);
            }
        }

    }
`;