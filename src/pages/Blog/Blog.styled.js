import styled from "styled-components";

export const SBlog = styled.section `
    padding-top: 232px;
    padding-bottom: 105px;
`

export const HeaderText = styled.div `
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`

export const Title = styled.h2 `
    font-size: 3.125rem;
    color: rgb(57, 108, 3);

    @media (max-width: 840px) {
        font-size: 2.8rem;
    }
`

export const Text = styled.p `
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(103, 103, 103);
    padding-top: 20px;

    @media (max-width: 840px) {
        font-size: 1.125rem;
    }
`

export const ImageBox = styled.div `
    height: 440px;
    width: 1000px;
    overflow: hidden;
    border-radius: 28px;

    & img {
        width: 100%;
    }

    @media (max-width: 1050px) {
        height: 300px;
        width: 800px;
    }

    @media (max-width: 840px) {
        height: 200px;
        width: 800px;
    }

    @media (max-width: 640px) {
        height: 200px;
        width: 100%;
    }
`
