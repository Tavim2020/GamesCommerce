import styled from 'styled-components';

export const ButtonCheck = styled.button`
    width: 8vw;
    height: 4vw;
    background-color: var(--color-orange);
    margin-bottom: 2vw;
    color: var(--white);
    cursor: pointer;
    font-weight: 600;
    font-size: 1vw;
    border: 0.08vw solid var(--background-supera);
    position: relative;
    overflow: hidden;
    filter: brightness(0.8);
    transition: filter 0.5s;

    &:hover{
        filter: brightness(1);
    }
`;