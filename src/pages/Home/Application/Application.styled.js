import styled from "styled-components";

export const SApplication = styled.section `
    background-color: #ff8c0018;
    padding-top: 38px;
    padding-bottom: 38px;
    display: flex;
    align-items: center;
    gap: 28px;

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`

export const TextBox = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 1050px) {
        align-items: center;
    }
`

export const Title = styled.h3 `
    font-size: 2.5rem;
    color: #396C03;
    text-align: center;
`

export const Text = styled.p `
    font-size: 1.25rem;
    width: 447px;
    color: #676767;
    padding: 12px 0 30px 0;
    text-align: center;
`

export const BtnBox = styled.div `
    display: flex;
    gap: 20px;
`

export const Iamge = styled.img `
    border-radius: 28px;
    
    @media (max-width: 1280px) {
        width: 480px;
    }
`