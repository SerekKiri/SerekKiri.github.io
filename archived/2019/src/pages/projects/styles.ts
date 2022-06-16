import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    background: #000000;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    font-family: 'Patrick Hand', cursive;

    @media only screen and (max-width: 1024px) {
        height: auto;
        padding: 0;
    }
`

const Note = styled.div`
    font-size: 14px;
    margin: 24px auto;

    @media only screen and (max-width: 1024px) {
        margin: 24px 5%;
    }
`

export { Wrapper, Note }