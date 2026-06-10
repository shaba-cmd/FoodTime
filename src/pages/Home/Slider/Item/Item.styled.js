import styled from "styled-components";

export const SItem = styled.article `
    background-color: ${({$type}) => $type ? '#396c0310' : 'transparent'};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 60px 55px 40px 55px;
    cursor: pointer;
    transition: all .3s;

    @media (max-width: 640px) {
        padding: 30px 25px 20px 25px;
    }

    @media (max-width: 425px) {
       & img {
        width: 50px;
       }
    }

    &:hover {
        transform: scale(1.05);
        background-color: rgba(107, 145, 66, 0.02);
    }
`

export const Title = styled.p `
    font-size: 1.8rem;
    color: #3F3F3F;
`

export const Text = styled.p `
    font-size: 1.125rem;
    color: #676767;
`