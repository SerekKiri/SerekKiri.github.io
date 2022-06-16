import styled from 'styled-components'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    max-width: 100%;
  
    flex-direction: column;
    justify-content: start;
    padding: 24px 20%;
    

    @media only screen and (max-width: 1024px) {
        padding: 6px 5%;
        height: auto;
        max-height: none;
    }
`

export { Wrapper }