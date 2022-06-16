import React from 'react'

// Styles
import { Wrapper, Link } from './styles'

const Links = () => {
    return (
        <Wrapper>
            <Link href="https://github.com/SerekKiri">Github</Link>
            <Link href="https://www.linkedin.com/in/kiri">Linkedin</Link>
            <Link href="/projects">Open source projects</Link>
        </Wrapper>
    )
}

export { Links }