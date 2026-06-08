import styled from "styled-components";

export const SHero = styled.section `
    background-color: #6b91421a;
    display: flex;
    align-items: center;
    padding-top: 232px;
    padding-bottom: 68px;
`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    gap: 27px;
    position: relative;

    & .leaf {
        position: absolute;
        top: -270px;
        left: -225px;
        z-index: -1;
    }

    @media (max-width: 1280px) {
        width: 500px;
    }

    @media (max-width: 1050px) {
        width: 100%;
    }
`

export const Title = styled.h1 `
    font-size: 4rem;
    color: #396C03;

    & span {
        color: #FF8B00;
    }
`

export const Text = styled.p `
    font-size: 1.5rem;
    font-weight: 600;
    color: #676767;
`

export const SearchContainer = styled.div `
    display: flex;
    border: 2px solid #396c033c;
    border-radius: 50px;
`

export const LocationIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9.5px;
    background: #ff9800;
    border-radius: 50%;
    margin: 8px 16px 8px 8px;
`

export const SearchInput = styled.input `
    border: none;
    background: transparent;
    font-size: 1.3rem;  
    outline: none;
    margin-right: auto;

    &::placeholder {
        color: #b0b8a4;
    }
`

export const SearchBtn = styled.button `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px 50px;
    background: #396C03;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1.3rem;
    cursor: pointer;
    flex-shrink: 0;
`

export const ImgBox = styled.div `
    position: relative;

    & .hero__img-before {
        position: absolute;
        z-index: -1;
        left: -70px;
        top: -20px;
    }

    & .leaf-sec {
        position: absolute;
        top: -110px;
        right: -90px;
        z-index: -1;
    }

    @media (max-width: 1050px) {
        display: none;
    }
`

export const AfterBox = styled.div `
    position: absolute;
    top: -65px;
    right: 130px;
    padding: 12px 28px;
    width: 245px;
    background: linear-gradient(180deg, #FFFFFF, #ffffff64);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid #ffffff00;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3px;

    & p {
        font-size: 1.3rem;
        font-weight: bold;
        color: #838383;
    }

    @media (max-width: 1280px) {
        right: 130px;
    }
`

export const ImgAfter = styled.div `
    display: flex;
    align-items: center;
    gap: 13px;

    & p {
        font-size: 2.5rem;
        color: #FF8B00;
        font-weight: bold;
    }
`