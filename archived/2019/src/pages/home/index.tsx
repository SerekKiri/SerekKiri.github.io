import React from 'react'
import { Helmet } from 'react-helmet'

// Components
import { Name } from 'components/pages/home/name'
import { Links } from 'components/pages/home/links'
import { Description } from 'components/pages/home/description'

// Styles
import { Wrapper } from './styles'

export const Home: React.FC = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Kacper Potyrała</title>
            </Helmet>

            <Name />
            <Description />
            <Links />
        </Wrapper>
    )
}
