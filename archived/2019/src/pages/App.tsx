import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"

// Components
import { Home } from './home'
import { Projects } from './projects'
import { ProjectPage } from './projects/[name]'

// Google Analytics
import { useGATracker } from '../gaTracker'

const App: React.FC = () => {

  // Use Google Analytics tracking
  useGATracker()

  return (
    <Switch>
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/:year/:name" component={ProjectPage} />
      <Route path="*" component={Home} />
    </Switch>
  )
}

export default App