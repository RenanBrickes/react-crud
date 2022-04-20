import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        justify-content: end;
        display : grid;

        button {
            justify-self : center;
        }
    `}

`;