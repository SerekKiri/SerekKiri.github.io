import styled from 'styled-components'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction:column;
    box-sizing: border-box;
    padding: 58px 20%;

    @media only screen and (max-width: 1025px) {
        padding: 16px 5%;
    }
`

const Back = styled(Link)`
    color: #fff;
    font-size: 18px;
`

const Container = styled.div`
    display: flex;
    margin: 16px 0 0;

    @media only screen and (max-width: 1025px) {
       flex-direction:column;
    }
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 4px 18px;

    @media only screen and (max-width: 1025px) {
        padding: 4px 0px;
    }
`

const Screenshot = styled.img`
    width: 34vw;
    border-radius: 7px;

    @media only screen and (max-width: 1025px) {
        width: 100%;
    }
`

const Title = styled.div`
    color: #1DB954;
    font-size: 32px;
`

const Url = styled.div`
    font-size: 20px;
`

const UrlLink = styled.a`
    color: #fff;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`

const Description = styled.div`
    font-size: 20px;
    padding: 6px 0 12px;
`

const Github = styled.a`
    color: #fff;
    font-size: 18px;
`

export { Wrapper, Back, Container, Col, Screenshot, Title, Url, UrlLink, Description, Github }