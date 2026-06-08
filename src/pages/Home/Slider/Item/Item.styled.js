import styled from "styled-components";

export const SItem = styled.article `
    background-color: ${({$type}) => $type ? '#396c0310' : 'transparent'};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 60px 55px 40px 55px;
    cursor: pointer;
`

export const Title = styled.p `
    font-size: 1.8rem;
    color: #3F3F3F;
`

export const Text = styled.p `
    font-size: 1.125rem;
    color: #676767;
`