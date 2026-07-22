import styled from "styled-components"

export const LoginContainer = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #417e00e0;
`

export const Box = styled.div `
    background: white;
    padding: 40px;
    border-radius: 20px;
    width: 100%;
    max-width: 400px;

    & div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & h2 {
        text-align: center;
        margin-bottom: 25px;
        color: black;
    }

    & button {
        width: 100%;
        padding: 12px;
        background-color: #417e00e0;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    & button:hover {
        background-color: #417e00d0;
    }
`

export const FormGroup = styled.section `
    display: flex;
    align-items: center;
    gap: 10px;

    & input, textarea, select {
        width: 100%;
        padding: 10px;
        border: 1px solid #417e00e0;
        border-radius: 4px;
        font-size: 14px;
        outline: none;
    }

    &.img-box {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`

export const Error = styled.p `
    color: #e94560;
    font-size: 13px;
    margin-top: 5px;
`