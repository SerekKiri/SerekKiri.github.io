import React from 'react'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper, Note } from './styles'

// Components
import { Timeline } from 'components/pages/projects/timeline'

export const Projects: React.FC = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Projects</title>
            </Helmet>

            <Timeline />

            <Note>
                Wait! Some of those projects are not mine and I was only taking part in them, keep that in mind!
            </Note>
        </Wrapper>
    )
}
