import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Styles
import { Wrapper, Loading, Span, NotFound } from './styles'

// Components
import { ProjectComponent } from 'components/pages/project'

// Types
import Project from 'types/project'

interface Params {
    year: string,
    name: string
}

interface Item {
    year: string,
    projects: Project[]
}

export const ProjectPage: React.FC = () => {
    const [data, setData] = useState<Project | null>(null)
    const [loading, setLoading] = useState(true)
    const params: Params = useParams()



    useEffect(() => {
        const getTimeline = () => {
            fetch('/list.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => {
                return res.json()
            }).then(json => {
                const item = json.find((i: Item) => i.year === params.year)
                if (!item) return
                const found = item.projects.find((p: Project) => p.name === params.name)
                if (!found) return
                setData(found)
                setLoading(false)
            })
        }

        getTimeline()
    }, [params])

    return (
        <Wrapper>
            <Helmet>
                <title>{loading ? 'Loading...' : data ? data.name : 'Not found'}</title>
            </Helmet>

            {loading ? <Loading>Loading </Loading> : data ? <ProjectComponent year={params.year} project={data} /> : <NotFound>Project <Span>{params.name}</Span> from <Span>{params.year}</Span> was not found.</NotFound>}
        </Wrapper>
    )
}