import React from 'react'

// Styles
import { Wrapper, NameSpan } from './styles'

const Name = () => {
    return (
        <Wrapper>
            <NameSpan aria-hidden="true">Kacper Potyrała</NameSpan>
        Kacper Potyrała
            <NameSpan aria-hidden="true">Kacper Potyrała</NameSpan>
        </Wrapper>
    )
}

export { Name }