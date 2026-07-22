import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.header `
    display: flex;
    align-items: center;
    border-bottom: 1px solid #3f3f3f2c;
    padding-top: 21px;
    padding-bottom: 21px;
    background-color: transparent;  
    position: ${({$type}) => $type === 'mobile' ? 'fixed' : $type === 'scrolled' ? 'fixed' : 'absolute'};
    top: 0;
    z-index: 10;
    width: 100%;
    backdrop-filter: blur(10px);
    justify-content: space-between;
`
export const Logo = styled(Link) `
    text-decoration: none;
    cursor: pointer;
`

export const Block = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    margin-left: auto;

    @media (max-width: 1050px) {
        gap: 30px;
    }

    @media (max-width: 840px) {
        display: none;
    }
`

export const List = styled.ul `
    display: flex;
    align-items: center;
    gap: 70px;

    & a {
        color: #3f3f3f;
        font-size: 1.125rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
    }

    & select {
        background: transparent;
        border: none;    
        outline: none;
        font-size: 0.875rem;
        font-weight: 500;
        color: #3f3f3f;
        cursor: pointer;
    }

    & select option {
        background: transparent;
        color: #3f3f3f;
    }

    @media (max-width: 1050px) {
        gap: 30px;
    }
`

export const BtnBox = styled.div `
    display: flex;
    align-items: center;
    gap: 23px;
`

export const Cart = styled(Link) `
    background-color: #396C03;
    border-radius: 50%;
    border: none;
    padding: 15px 16px 8px 16px;
    cursor: pointer;
    position: relative;

    & .-counter {
        position: absolute;
        background-color: #FF8B00;
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 50%;
        top: -6px;
        right: -6px;
        width: 26px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`