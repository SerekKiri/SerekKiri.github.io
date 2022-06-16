import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
`

const Year = styled.p`
    font-size: 36px;
    margin: 18px 0 12px;

    @media only screen and (max-width: 1024px) {
       margin: 14px 0 12px;
    }
`

const Projects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export { Wrapper, Year, Projects }