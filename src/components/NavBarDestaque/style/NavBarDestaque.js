import styled from 'styled-components';

export const NavBarDestaqueContainer = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 2.5vw;
    display: flex;


    .destaques:nth-child(1),
    .destaques:nth-child(2),
    .destaques:nth-child(3){
        margin-right: 1vw;
    }

    .destaques{
        width: 24%;
        height: 100%;
        background-color: var(--color-clear);
        border-radius: 1.2vw 1.2vw 0 0;
        transition: background-color 0.5s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        h4{
            font-size: 1.5vw;
            color:var(--color-orange);
            transition: color 0.5s;
        }

        &:hover{
            background-color: var(--background-supera);

            h4{
                color:var(--white);
            }
        }   
    }
`;