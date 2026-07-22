import styled from "styled-components"

export const QuestionCard = styled.article`
    display: inline-block;
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 10px;
    padding: 0 11px 0 31px;
    cursor: pointer;
    break-inside: avoid;
`

export const QuestionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Question = styled.h4`
    font-size: 1.125rem;
    font-weight: 500;
    padding: 23px 0;
`

export const Answer = styled.div`
    max-height: ${props => props.$isOpen ? '500px' : '0'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    padding-bottom: ${props => props.$isOpen ? '94px' : '0'};
    overflow: hidden;
    color: #525252;
    font-size: 1.125rem;
    padding-right: 46px;
    transition: all .5s ease-in-out;
`