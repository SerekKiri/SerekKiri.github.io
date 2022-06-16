import styled from 'styled-components'

// Components
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
    color: #fff;
    margin: 6px 12px;
    text-decoration: none;
`

const Screenshot = styled.img`
    width: 250px;
    border-radius: 4px;

    @media only screen and (max-width: 1024px) {
       width: 100%;
    }
`

const Name = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

export { Wrapper, Screenshot, Name }