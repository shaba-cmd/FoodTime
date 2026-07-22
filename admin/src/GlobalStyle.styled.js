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
        html {
            font-size: 14px;
        }

        .container {
            padding-left: calc(50% - 300px);
            padding-right: calc(50% - 300px);
        }
    }

    @media (max-width: 640px) {
        .container {
            padding-left: calc(50% - 200px);
            padding-right: calc(50% - 200px);
        }
    }

    @media (max-width: 425px) {
        html {
            font-size: 12px;
        }

        .container {
            padding-left: calc(50% - 150px);
            padding-right: calc(50% - 150px);
        }
    }
`;