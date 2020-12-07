import styled, { createGlobalStyle, keyframes } from 'styled-components';

const enterAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

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

export const MainContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    min-height: 300px;
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

    &:hover strong, &:hover p {
        color: #Ff2;
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

export const ButtonsContainer = styled.div`
    width: 100%;
    max-width: 380px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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

export const Button = styled.a`
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #F2FF41;
    color: #000;
    font-size: 14px; 
    font-weight: 500;
    text-decoration: none;
    border-radius: 20px;
    box-shadow: 0px 15px 20px rgba(242, 255, 65, 0.4);
    transition: all ease .3s;
    animation: ${enterAnimation} 1.5s;

    &:first-child {
        margin-top: 40px;
    }

    & img {
        position: absolute;
        left: 20px;
    }

    &:hover {
        background-color: #EFCA08;
        transform: translateY(-3px);
        box-shadow: 0px 8px 15px rgba(239, 202, 8, 0.4);
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