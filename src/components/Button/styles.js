import styled from 'styled-components';
import { enterAnimation } from '../../styles/GlobalStyles';

export const Button = styled.a`
    width: 100%;
    height: 50px;
    padding: 20px 20px;
    margin-bottom: 20px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    // Colors
    background-color: #F2FF41;
    color: #000;
    box-shadow: 0px 15px 20px rgba(242, 255, 65, 0.4);

    // Font-styles
    font-size: 14px; 
    font-weight: 500;
    text-decoration: none;
    
    // Animation
    animation: ${enterAnimation} 1.5s;
    transition: all ease .3s;

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
