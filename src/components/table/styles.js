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