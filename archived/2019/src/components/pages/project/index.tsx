import React from 'react'

// Styles
import {
    Wrapper,
    Back,
    Container,
    Col,
    Screenshot,
    Title,
    Url,
    Description,
    Github,
    UrlLink
} from './styles'

// Types
import Project from 'types/project'

interface Props {
    year: string,
    project: Project
}

export const ProjectComponent: React.FC<Props> = ({ year, project }) => {
    return (
        <Wrapper>
            <Back to="/projects">Go back</Back>

            <Container>
                <Screenshot src={project.screenshot ? `/projects/${year}/${project.screenshot}.png` : '/no_image.png'} alt={project.name} />
                <Col>
                    <Title>{project.name}</Title>
                    {project.url ? <Url>Website: <UrlLink href={project.url}>{project.url.replace(/(^\w+:|^)\/\//, '')}</UrlLink></Url> : ''}
                    <Description>{project.description}</Description>
                    {project.github ? <Github href={project.github}>See it on github!</Github> : ''}
                </Col>
            </Container>
        </Wrapper>
    )
}