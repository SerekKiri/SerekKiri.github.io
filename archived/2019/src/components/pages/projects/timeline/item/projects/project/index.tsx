import React from 'react'

// Styles
import { Wrapper, Screenshot, Name } from './styles'

// Types
import Project from 'types/project'

interface Props {
    year: string,
    project: Project
}

export const ProjectItem: React.FC<Props> = ({ year, project }) => {
    return (
        <Wrapper to={`/projects/${year}/${project.name}`}>
            <Screenshot src={project.screenshot ? `/projects/${year}/${project.screenshot}.png` : '/no_image.png'} alt={project.name} />
            <Name>{project.name}</Name>
        </Wrapper>
    )
}