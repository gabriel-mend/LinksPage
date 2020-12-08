import styled from 'styled-components';
import { enterAnimation } from '../../styles/GlobalStyles';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins', sans-serif;
`;

export const MainContainer = styled.div`
    width: 100%;
    max-width: 780px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    max-width: 380px;
    height: 100%;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    overflow-y: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        width: 2px;
        height: 80%;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #0C0B0B;
    }
`;

export const ButtonToogle = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    outline: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 10px;
    padding: 12px;
    border-radius: 15px;
    box-shadow: 0px 15px 20px rgba(242, 255, 65, 0.4);
    transition: all ease .3s;
    animation: ${enterAnimation} 1.5s;
    cursor: pointer;
    background-color: #F2FF41;
    border: none;

    &:hover {
        background-color: #EFCA08;
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(239, 202, 8, 0.4);
    }
`;