import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme}) => css`
        justify-content: center;
        display : grid;
        grid-template-columns : repeat(4, 250px);
        
        button {
            margin : 0 10px 0 10px;
            justify-self : center;
        }
    `}
`;