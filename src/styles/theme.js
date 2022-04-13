import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    html {
        margin : 0;
        padding : 0;
        background-color :${(theme) => theme.theme.colors.background};
    }

    body {
        font-size: 1.6rem;
        font-family: ${(theme) => theme.theme.font.family};
    }
`;

export const theme = {
    font: {
        family: "'Montserrat', sans-serif",
        size: {
            //Padrão REM - 16px
            small: '1.6rem',
            medium: '3.2rem'
        }
    },
    colors: {
        background: "#b3b3b3",
        primary : "#FFFFFF",
        create : " #33ff33",
        update : "#3333ff",
        delete: "#ff3333",
        cancel : "#ffff33",
    },
    buttons : { 
        maxsize : '8.0rem',
    },
    sizes : {
        medium : '3.2rem',
        large : '4.8rem',
        xlarge : '6.4rem'
    }
}

