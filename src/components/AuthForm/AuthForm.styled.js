import styled from "styled-components";

export const SAuth = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const SignContainer = styled.article `
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: rgba(107, 145, 66, 0.1);
    border-radius: 20px;
    padding: 30px;

    & div {
        display: flex;
        justify-content: space-between;
    }

    & div button {
        background-color: black;
        color: white;
        font-size: 1.125rem;
        border: none;
        border-radius: 10px;
        padding: 10px 30px;
        cursor: pointer;
        align-self: flex-end;
    }
`

export const Title = styled.h3 `
    font-size: 3.125rem;
    color: #396C03;
    font-weight: 600;
    text-align: center;
`

export const FormAuth = styled.form `
    display: flex;
    flex-direction: column;
    gap: 16px;  

    & input {
        outline: none;
        border: 1px solid rgb(57, 108, 3);
        padding: 10px;
        border-radius: 10px;
        width: 350px;
        font-size: 1.125rem;
    }

    & div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    & p {
        color: red;
        width: 300px;
    }
`

export const Text = styled.p `
    font-size: 0.75rem;
    color: #676767;
    width: 150px;

    & a {
        color: #676767;
        text-decoration: underline;
        cursor: pointer;
    }

    & a:hover {
        color: #3bc7ff;
    }
`