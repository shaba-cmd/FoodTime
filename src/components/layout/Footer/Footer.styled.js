import { Link } from "react-router-dom";
import styled from "styled-components";

export const SFooter = styled.footer `
    background-color: #224300;
    padding-top: 93px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 74px;
    color: #DEDEDE;
`

export const FooterBox = styled.div `
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 840px) {
       flex-direction: column;
       gap: 40px;
       align-items: center;
    }
`

export const LogoBox = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 485px;

    @media (max-width: 1050px) {
        width: 350px;
    }

    @media (max-width: 840px) {
       align-items: center;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`

export const Logo = styled(Link) `
    text-decoration: none;
    cursor: pointer;
`

export const Text = styled.p `
    font-size: 1.125rem;

    @media (max-width: 840px) {
       text-align: center;
    }

    
`

export const Navigate = styled.nav `
    display: flex;
    gap: 155px;

    @media (max-width: 1280px) {
        gap: 50px;
    }

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`

export const UlBox = styled.div `
    display: flex;
    gap: 66px;
`

export const Ul = styled.ul `
    align-self: center;
    display: flex; 
    flex-direction: column;
    gap: 13px;
    font-size: 1.25rem;
    text-decoration: none;

    & li:nth-child(1){
        color: white;
        font-weight: 600;
        padding-bottom: 22px;
    }

    & li {list-style: none;}

    & a {
        color: #DEDEDE;
        text-decoration: none;
    }

    @media (max-width: 1050px) {
        align-self: self-start;
    }

    @media (max-width: 840px) {
       align-self: center; 
       align-items: center;
    }
`

export const FooterText = styled.p `
    align-self: center;
`