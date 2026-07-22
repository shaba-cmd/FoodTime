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

    @media (max-width: 840px) {
        padding-left: calc(50% - 300px);

        & .delivery {
            display: none;
        }
    }

    @media (max-width: 640px) {
        padding-left: calc(50% - 200px);
        padding-right: calc(50% - 200px);
    }

    @media (max-width: 425px) {
        padding-left: calc(50% - 150px);
        padding-right: calc(50% - 150px);
    }

    @media (max-width: 425px) {
        padding-top: 50px;
    }
`
export const Box = styled.div `
    width: 553px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    @media (max-width: 425px) {
        width: 100%;
    }
`
export const Title = styled.h2 `
    font-size: 3.125rem;
    color: #396C03;
`

export const Text = styled.p `
    font-size: 1.125rem;
    color: #676767;
`