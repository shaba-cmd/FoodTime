import styled from "styled-components";

export const Header = styled.header `
    background-color: #417e00e0;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    & h1 {
        font-size: 20px;
    }

    & button {
        background: #000000;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    & button:hover {
        background: #383838;
    }
`

export const Nav = styled.nav `
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    & button {
        padding: 10px 20px;
        border: none;
        background: #e0e0e0;
        cursor: pointer;
        border-radius: 4px;
        font-size: 14px;
    }

    & button.active {
        background-color: #417e00e0;
        color: white;
    }
`