import styled from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    font-size: 22px;
    margin: 8px 0 0;
    font-weight: 400;
    font-style: italic;
    justify-content: center;
`

const Link = styled.a`
    text-decoration: none;
    margin: 0 14px 0 24px;
    cursor: pointer;
    color: #FFFFFF;

    :hover {
        text-decoration: underline;
    }
`

export { Wrapper, Link }