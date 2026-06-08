import styled from "styled-components";

export const SButton = styled.button `
    background-color: ${({$type}) => {
        return ($type === 'slider-btn' ? '#FF8B00' : $type === 'faq-btn' ? 'transparent' : '#396C03')
    }};
    border-radius: 225px;
    border: ${({$type}) => $type === 'faq-btn' ? '1px solid #396C03' : 'none'};
    font-size: 1.25rem;
    cursor: pointer;

    & a {
        color: ${({$type}) => $type === 'faq-btn' ? '#396C03' : '#FFFFFF'};
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: ${({$type}) => $type === 'header-btn' ? '17.5px 51px' : '20px 60px'};
    }
`