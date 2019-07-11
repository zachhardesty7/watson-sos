import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import {
	DashboardPage,
	HomePage,
} from './pages'

import './styles/global.scss'
import 'carbon-components/scss/globals/scss/styles.scss'

export const App = () => (
	<Router>
		<Route exact path='/' component={HomePage} />
		<Route exact path='/dashboard' component={DashboardPage} />
	</Router>
)
