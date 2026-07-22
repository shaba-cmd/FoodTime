import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: rgb(151, 185, 116);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 50px;

    & img {
        align-self: flex-end;
    }
`

export const List = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & a {
        color: #3f3f3f;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
    }

    & select {
        background: transparent;
        border: none;    
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        color: #3f3f3f;
        cursor: pointer;
    }

    & select option {
        background: transparent;
        color: #3f3f3f;
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