import { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .text-dark {
        color: #fff;
    }

    .text-light {
        color: #000;
    }

    .background-light {
        background: #fff;   
    }

    .background-light-main {
        background: #FFFAFB;
    }

    .background-dark {
        background: #000501;
    }

    .background-dark-main {
        background: #333333;
    }
`;

export const enterAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;