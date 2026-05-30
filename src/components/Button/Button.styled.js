import styled from "styled-components";

export const SButton = styled.button `
    background-color: ${({$type}) => {
        return ($type === 'slider-btn' ? '#FF8B00' : '#396C03')
    }};
    border-radius: 225px;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;

    & a {
        color: #FFF;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: ${({$type}) => {
            return ($type === 'header-btn' ? '17.5px 51px' : '22px 60px')
        }};
    }
`