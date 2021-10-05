import styled from 'styled-components';

export const UserIteratorContainer = styled.nav`
    width: 13vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h5{
        color: var(--white);
        cursor: pointer;
        transition: color 0.5s;
        font-size: 1.2vw;

        &:hover{
            color: var(--color-orange);
        }
    }

    h5:nth-child(1){
        margin-right: 2vw;
    }
`;