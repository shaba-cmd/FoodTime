import styled from "styled-components";

export const CardContainer = styled.article `
    background-color: #9e9e9e33;
    border-radius: 20px;
    width: 400px;

    @media (max-width: 1280px) {
        width: 316px;
    }

    @media (max-width: 1050px) {
        width: 387px;
    }

    @media (max-width: 840px) {
        width: 287px;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`

export const ImgBox = styled.div `
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    cursor: pointer;

    & img {
        width: 100%;
    }

    @media (max-width: 1280px) {
        height: 316px;
    }

    @media (max-width: 1050px) {
        height: 387px;
    }

    @media (max-width: 840px) {
        height: 287px;
    }

    @media (max-width: 640px) {
        height: 400px;
    }

    @media (max-width: 425px) {
        height: 300px;
    }
`

export const TextBox = styled.div `
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Title = styled.h4 `
    font-size: 1.3rem;
    color: rgb(57, 108, 3);
`

export const Text = styled.p `
    font-size: 1rem;
    color: rgb(103, 103, 103);
`

export const PriceBox = styled.div `
    display: flex;
    justify-content: space-between;

    & p {
        font-size: 1rem;
        font-weight: 700;
        color: rgb(57, 108, 3);
    }

    & button {
        border: none;
        background-color: black;
        color: white;
        font-size: 1rem;
        border-radius: 10px;
        padding: 10px 40px;
        font-weight: 600;
        cursor: pointer;
    }
`

