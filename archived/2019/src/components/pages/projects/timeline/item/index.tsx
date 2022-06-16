import React from 'react'

// Styles
import { Wrapper, Year } from './styles'

// Components
import { ProjectsList } from './projects'

// Types
import Project from 'types/project'

interface Item {
    year: string,
    projects: Project[]
}

interface Props {
    item: Item
}

export const ItemList: React.FC<Props> = ({ item }) => {
    return (
        <Wrapper>
            <Year>{item.year}</Year>
            {item.projects.length > 0 ? <ProjectsList year={item.year} projects={item.projects} /> : 'I haven\'t made any opensource projects that year :('}
        </Wrapper>
    )
}