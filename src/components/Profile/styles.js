import styled from 'styled-components';
import { enterAnimation } from '../../styles/GlobalStyles';

export const Container = styled.a`
    width: 100%;
    height: 40%;
    min-height: 300px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    animation: ${enterAnimation} 1.8s;

    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
    }

    & strong {
        margin: 12px 0;
        transition: 0.2s;
    }

    & p {
        font-size: 13px;
        transition: 0.2s;
    }

    & img {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    }
`;
