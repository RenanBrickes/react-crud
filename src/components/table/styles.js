import styled, { css } from "styled-components";

export const Table = styled.table`
    ${({ theme }) => css`
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        background : ${theme.colors.primary};

        td, th {
        border: 2px solid #000000;
        padding: 8px;
        text-align: center;
        }

        thead > tr {
            background-color : green;
        }

        tr:nth-child(even){background-color: ${theme.colors.background};}
        tbody > tr:hover {background-color: #ddd;}
    `}
`;

export const Carregando = styled.div`
    ${(theme) => css`
        border : 2px solid blue;
        border-bottom:transparent;
        border-left:transparent;
        width : 50px;
        height : 50px;
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        left: 50%;
        border-radius: 50%;
        animation: is-rotating 1s infinite;

        @keyframes is-rotating {
            to {
                transform: rotate(1turn);
            }
        }
    `}
`;