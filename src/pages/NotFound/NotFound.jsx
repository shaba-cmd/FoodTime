import styled from "styled-components"

const NotFoundContainer = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 232px;
    padding-bottom: 232px;

    & h1 {
        font-size: 6rem;
        color: rgb(57, 108, 3);
    }

    & p {
        font-size: 2.3rem;
        font-weight: 600;
        color: rgb(103, 103, 103);
    }
`

const NotFound = () => {
  return (
    <NotFoundContainer>
        <h1>404</h1>
        <p>Not Found</p>
    </NotFoundContainer>
  )
}

export default NotFound