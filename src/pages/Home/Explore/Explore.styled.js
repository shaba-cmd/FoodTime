import styled from "styled-components";

export const SExplore = styled.section `
    background-color: #FFF9F2;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: calc(50% - 626px);
    padding-top: 78px;
    padding-bottom: 49px;

    @media (max-width: 1280px) {
        padding-left: calc(50% - 500px);

        & .delivery {
            width: 550px;
        }
    }

    @media (max-width: 1050px) {
        padding-left: calc(50% - 400px);

        & .delivery {
            width: 500px;
        }
    }
`
export const Box = styled.div `
    width: 553px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
`
export const Title = styled.h2 `
    font-size: 3.125rem;
    color: #396C03;
`

export const Text = styled.p `
    font-size: 1.125rem;
    color: #676767;
`