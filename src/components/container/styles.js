import elemento, { css } from "styled-components";

export const Container = elemento.div`
    ${({theme}) => css`
        max-width : 120rem;
        margin : 0 auto;
        padding : 50px;
    `}
`;