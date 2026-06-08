import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
        font-family: "Poppins", sans-serif;
        font-style: normal;
    }

    h1,h2 {
        font-family: "Merienda", cursive;
        font-optical-sizing: auto;
        font-style: normal;
    }

    main {
        overflow: hidden;
    }

    .container {
        padding-left: calc(50% - 626px);
        padding-right: calc(50% - 626px);
    }

    @media (max-width: 1280px) {
        .container {
            padding-left: calc(50% - 500px);
            padding-right: calc(50% - 500px);
        }
    }

    @media (max-width: 1050px) {
        .container {
            padding-left: calc(50% - 400px);
            padding-right: calc(50% - 400px);
        }
    }

    @media (max-width: 840px) {
        .container {
            padding-left: calc(50% - 300px);
            padding-right: calc(50% - 300px);
        }
    }
`;