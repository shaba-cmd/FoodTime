import styled from "styled-components";

export const ModalOverlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const Modal = styled.div `
    background: white;
    padding: 30px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;

    & form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
    }
`

export const Actions = styled.div `
    display: flex;
    gap: 10px;
    margin-top: 20px;

    & button {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }
`

export const Save = styled.button `
    background: #009607;
    color: white;
`

export const Cancel = styled.button `
    background: #757575;
    color: white;
`