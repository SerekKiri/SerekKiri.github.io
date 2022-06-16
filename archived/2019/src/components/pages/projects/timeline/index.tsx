import React, { useState, useEffect } from 'react'

import { Wrapper } from './styles'

// Components
import { ItemList } from './item'

interface List {
    year: string,
    projects: []
}

export const Timeline: React.FC = () => {
    const [list, setList] = useState([])

    const getTimeline = () => {
        fetch('/list.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(json => {
            setList(json)
        })
    }

    useEffect(() => {
        getTimeline()
    }, [])

    return (
        <Wrapper>
            {list.map((y: List) => <ItemList item={y} key={y.year} />)}
        </Wrapper>
    )
}