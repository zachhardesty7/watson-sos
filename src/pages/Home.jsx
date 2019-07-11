/* eslint-disable guard-for-in */
import React from 'react'
import {
	Button,
	Form,
	FormGroup,
	TextInput,
} from 'carbon-components-react'
import { Redirect } from 'react-router-dom'
import { Grid } from '../components'

import { login } from '../api'

import { ReactComponent as Laptop } from '../assets/laptop.svg'

import '../styles/Home.scss'

// import { safeCloneObj } from '../scripts'

const messages = {
	ibmHeader: 'IBM',
	productHeader: 'Hackathon',
	loginInstructions: 'Sign in',
	loginButton: 'Sign in',
	signInUsernameLabel: 'Username',
	signInPasswordLabel: 'Password',
}

// const getCircularReplacer = (e) => {
// 	const seen = new WeakSet()

// 	const replacer = (key, value) => {
// 		if (typeof value === 'object' && value !== null) {
// 			if (seen.has(value)) {
// 				return
// 			}
// 			seen.add(value)
// 		}

// 		if (e[key]) {
// 			try {
// 				console.log(`key: ${key}, value: ${value}`)
// 			} catch (error) {
// 				console.log('error')
// 			}
// 		}
// 		// eslint-disable-next-line consistent-return
// 		return value
// 	}

// 	return replacer
// }

export const HomePage = () => {
	const [success, setSuccess] = React.useState(false)
	const [failure, setFailure] = React.useState(false)

	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		const user = login(username, password)
		console.log(user)

		if (user) {
			setSuccess(true)
		} else {
			setFailure(true)
			setTimeout(() => {
				setFailure(false)
			}, 3000)
		}
	}

	return (
		<Grid noGutter>
			{success && <Redirect to='/dashboard' />}
			<Grid.Row className='main'>
				<Grid.Col lg='6' md='4' sm='0' className='left'>
					<Laptop />
				</Grid.Col>
				<Grid.Col lg='6' md='4' sm='4' className='right'>
					<div className='right-content'>
						<div className='heading'>
							<h1 id='ibm-header'>
								{messages.ibmHeader}
								<small className='r'>®</small>
							</h1>
							<h2 id='product-header'>{messages.productHeader}</h2>
						</div>
						<div className='login-main'>
							<div className='login-provider-instructions'>{messages.loginInstructions}</div>
							<Form onSubmit={handleLogin}>
								<FormGroup legendText=''>
									<TextInput
										id={messages.signInUsernameLabel}
										placeholder={messages.signInUsernameLabel}
										labelText={messages.signInUsernameLabel}
										autoComplete='username'
										onChange={e => setUsername(e.target.value)}
										invalid={failure}
										value={username}
										required
									/>
								</FormGroup>
								<FormGroup legendText=''>
									<TextInput
										id={messages.signInPasswordLabel}
										placeholder={messages.signInPasswordLabel}
										labelText={messages.signInPasswordLabel}
										type='password'
										onChange={e => setPassword(e.target.value)}
										invalid={failure}
										value={password}
										autoComplete='current-password'
										required
									/>
								</FormGroup>
								<Button type='submit' id='sign-in-btn'>
									{messages.loginButton}
								</Button>
							</Form>
						</div>
					</div>
				</Grid.Col>
			</Grid.Row>
		</Grid>
	)
}
