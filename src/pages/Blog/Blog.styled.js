import styled from "styled-components";

export const SBlog = styled.section `
    padding-top: 232px;
    padding-bottom: 105px;
`

export const HeaderText = styled.div `
    display: flex;
    align-items: center;
    gap: 50px;
`

export const Title = styled.h2 `
    font-size: 3.125rem;
    color: rgb(57, 108, 3);
`

export const Text = styled.p `
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(103, 103, 103);
    padding-top: 20px;
`

export const ImageBox = styled.div `
    height: 440px;
    width: 1000px;
    overflow: hidden;
    border-radius: 28px;

    & img {
        width: 100%;
    }
`
