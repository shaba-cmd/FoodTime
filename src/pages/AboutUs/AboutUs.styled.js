import styled from "styled-components";

export const About = styled.section `
    padding-top: 232px;
`

export const AboutBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;

    & div {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
`

export const Title = styled.h2 `
    font-size: 3.125rem;
    color: rgb(57, 108, 3);
`

export const Text = styled.p `
    font-size: 1.125rem;
    color: rgb(103, 103, 103);
`

export const ImageBox = styled.div `
    width: 600px;

    & img {
        border-radius: 28px;
    }
`

export const MissionBox = styled.section `
    padding-top: 105px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    & h2 {
        text-align: center;
    }
`

export const ImgMiss = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    overflow: hidden;
    margin-top: 20px;   
    border-radius: 28px;

    & img {
        width: 100%;
    }
`

export const ContactBox = styled.section `
    padding-top: 105px;
    padding-bottom: 105px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    & h2 {
        text-align: center;
    }

    & span {
        font-weight: 600;
    }
`

export const ContactContainer = styled.div `
    display: flex;
    gap: 50px;
`

export const ImgContainer = styled.div `
    width: 700px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 28px;
`

export const ContactTextBox = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ContactLink = styled.div `
    display: flex;
    gap: 20px;

    & a {
        color: rgb(57, 108, 3);
        text-decoration: none;
    }
`