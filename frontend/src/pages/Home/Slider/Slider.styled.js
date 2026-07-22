import styled, { keyframes } from "styled-components";

export const SSlider = styled.section `
    display: flex;
    flex-direction: column;
    gap: 105px;
    padding-top: 105px;
    padding-bottom: 105px;

    @media (max-width: 640px) {
        gap: 25px;
        padding-bottom: 50px;
    }

    @media (max-width: 425px) {
        padding-top: 50px;
    }
`

export const SliderBtn = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 29px;

    @media (max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
        
        & article:last-child {
            grid-column: 1/3;
        }
    }

    @media (max-width: 840px) {
        grid-template-columns: repeat(1, 1fr);

        & article:last-child {
            grid-column: 1;
        }
    }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Iamge = styled.div `
    background-image: ${({$type}) => 'url(' + $type + ')'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    animation: ${fadeIn} 0.5s ease-out;
    
    & div {
        background: linear-gradient(180deg, #00000000, #396c0300, #396c0310, #396c03bd, #396C03);
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        gap: 17px;
        padding-bottom: 50px;
        padding-top: 590px;
        color: #FFFFFF;
        text-align: center;
    }

    @media (max-width: 640px) {
       height: 500px;

       & div {
        background: linear-gradient(180deg, #00000000, #396c03bd, #396C03);
        padding-top: 190px;
       }
    }

    @media (max-width: 425px) {
       & div {
        padding-top: 220px;
       }
    }
`

export const Title = styled.p `
    font-size: 2.5rem;
    font-weight: bold;
`

export const Text = styled.p `
    font-size: 1.5rem;
`