import React from 'react'

// Styles
import { Wrapper } from './styles'

// Components
import { ProjectItem } from './project'

// Types
import Project from 'types/project'

interface Props {
    year: string,
    projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({ year, projects }) => {
    return (
        <Wrapper>
            {projects.map(p => <ProjectItem key={p.name} year={year} project={p} />)}
        </Wrapper>
    )
}