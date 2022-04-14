import styled, { css } from "styled-components";

const changeColor = (theme, text) => {
    switch (text) {
        case "adicionar":
            return theme.colors.create;
        case "atualizar":
            return theme.colors.update;
        case "excluir":
            return theme.colors.delete;
        case "cancelar":
            return theme.colors.cancel;
        default:
            return theme.colors.create;
    }
}

export const Button = styled.button`
    ${({ theme, text }) => css`
        background-color : ${changeColor(theme, text)};
        padding : 10px;
        color : ${theme.colors.primary};
        text-align: center;
        word-break: break-all;
        width: ${theme.sizes.xxlarge};
        border-radius : 50px;
        font-size: 16px;
        font-family : ${theme.font.family};
        border: none;
        transition: all 300ms ease-in-out;

        :hover {
            transform: scale(1.1);
            transition: ease-in 300ms;
        }
    `}
`;