import styled, { css } from "styled-components";
import { Button } from '../button/styles';

export const Form = styled.form`
    ${({ theme, text }) => css`
        display: grid;
    `}

    input, select, option {
        margin : 10px 0;
        height : 30px;
        padding-left : 5px;
        border-radius : 10px;
        border-color : transparent;

    }

    input :required {
     border: 1px solid red;
    }

    ${Button} {
        justify-self: center;
        margin-top : 10px;
    }

    
`;