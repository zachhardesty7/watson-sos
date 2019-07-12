import React from 'react'

import {
	Checkbox,
	Header,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	SideNav,
	SideNavItems,
	SideNavMenu,
	SideNavMenuItem,
	Tile,
	ToastNotification,
} from 'carbon-components-react'

import { Grid } from '../components'

import '../styles/Dashboard.scss'
import companylogo from '../assets/WC_Logo.png'
import map from '../assets/map.png'

import { ReactComponent as Audio } from '../assets/audio.svg'
import { ReactComponent as Gauge } from '../assets/gauge.svg'
import { ReactComponent as Camera } from '../assets/camera.svg'
import { ReactComponent as Lock } from '../assets/lock.svg'
import { ReactComponent as Alert } from '../assets/alert.svg'
import { ReactComponent as Star } from '../assets/star.svg'

export const DashboardPage = () => (
	<>
		<Header>
			<HeaderMenuButton aria-label='Open menu' onClick={() => { }} />
			<HeaderName href='#'>
				Watson SOS
			</HeaderName>
			<HeaderNavigation aria-label='IBM Watson SOS'>
				<HeaderMenuItem href='/dashboard'>Dashboard</HeaderMenuItem>
				<HeaderMenuItem href='#'>Logging</HeaderMenuItem>
				<HeaderMenuItem href='#'>Support</HeaderMenuItem>
			</HeaderNavigation>
		</Header>
		<SideNav
			isFixedNav
			expanded
			isChildOfHeader={false}
			aria-label='Side navigation'
		>
			<div><p className='sideNavtitle'>My Devices</p></div>
			<SideNavItems className='navSpace'>
				<SideNavMenu renderIcon={() => <Audio width='16' height='16' />} title='Northside Lobby'>
					<SideNavMenuItem href='#'>Audio 1</SideNavMenuItem>
					<SideNavMenuItem href='#'>Audio 2</SideNavMenuItem>
					<SideNavMenuItem href='#'>Audio 3</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Camera width='16' height='16' />} title='Westside Entrance'>
					<SideNavMenuItem href='#'>Camera 1</SideNavMenuItem>
					<SideNavMenuItem href='#'>Camera 2</SideNavMenuItem>
					<SideNavMenuItem href='#'>Camera 3</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Gauge width='16' height='16' />} title='Courtyard'>
					<SideNavMenuItem href='#'>Sensor 1</SideNavMenuItem>
					<SideNavMenuItem href='#'>Sensor 2</SideNavMenuItem>
					<SideNavMenuItem href='#'>Sensor 3</SideNavMenuItem>
				</SideNavMenu>
			</SideNavItems>
			<div><p className='sideNavMtitle'>Resp. Protocols</p></div>
			<SideNavItems className='navSpace'>
				<SideNavMenu renderIcon={() => <Alert width='16' height='16' />} title='Notify Local Police'>
					<SideNavMenuItem aria-current='page' href='#'>Configuration 1</SideNavMenuItem>
					<SideNavMenuItem href='#'>Configuration 2</SideNavMenuItem>
					<SideNavMenuItem href='#'>Configuration 3</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Lock width='16' height='16' />} title='Lockdown'>
					<SideNavMenuItem href='#'>Configuration 1</SideNavMenuItem>
					<SideNavMenuItem href='#'>Configuration 2</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>Configuration 3</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Star width='16' height='16' />} title='Notify EMS'>
					<SideNavMenuItem href='#'>Configuration 1</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>Configuration 2</SideNavMenuItem>
					<SideNavMenuItem href='#'>Configuration 3</SideNavMenuItem>
				</SideNavMenu>
			</SideNavItems>
		</SideNav>

		<ToastNotification
			lowContrast
			title='Gunshot Detected'
			subtitle={(
				<ul>
					<li>- Contacted principal</li>
					<li>- Sounded alarms</li>
					<li>- Locked down doors</li>
					<li>- Turned off lights</li>
				</ul>
			)}
			caption='19 July 2019 [19:23:59]'
			className='gunshot'
		/>
		<main className='dashboard'>
			<div><h1 className='title'>Emergency Response System</h1></div>
			<Grid className='grid'>
				<Grid.Row>

					<Grid.Col xlg='6'>
						<Grid.Row className='cell'>
							<Tile>
								<Grid.Row className='cell'>
									<div className='colSpace'><img src={companylogo} width='100px' height='130px' alt='WC Logo' /></div>
									<Grid.Col>
										<Grid.Row>
											<div>Educational Institution</div>
										</Grid.Row>
										<Grid.Row>
											<div className='tileTile'>High Hill Academy</div>
										</Grid.Row>
										<Grid.Row><div className='descTile'>4584  Hinkle Lake Road</div></Grid.Row>
										<Grid.Row><div className='descTile'>Roxbury, MA, 02119</div></Grid.Row>
										<Grid.Row><div className='descTile'>Tel : 123 4567891</div></Grid.Row>
										<Grid.Row><div className='descTile'>www.wgcc.edu</div></Grid.Row>
									</Grid.Col>
								</Grid.Row>
							</Tile>
						</Grid.Row>
						<Grid.Row className='cell'>
							<Tile>
								<Grid.Row className='cellTile'>
									<Grid.Col>
										<Grid.Row>
											<div className='tileTile colSpace'>Lockdown Response Settings</div>
										</Grid.Row>
										<fieldset className='bx--fieldset'>
											<legend className='bx--label colSpace'>Select your emergency response settings</legend>
											<Checkbox defaultChecked labelText='Contact principal' id='checkbox-label-1' />
											<Checkbox defaultChecked labelText='Sound alarms' id='checkbox-label-2' />
											<Checkbox defaultChecked labelText='Lockdown doors' id='checkbox-label-3' />
											<Checkbox defaultChecked labelText='Turn off lights' id='checkbox-label-4' />
										</fieldset>
									</Grid.Col>
								</Grid.Row>
							</Tile>
						</Grid.Row>
					</Grid.Col>
					<Grid.Col xlg='6'>
						<Grid.Row className='cell'>
							<Tile className='map-con'>
								<img alt='map' className='map' src={map} />
							</Tile>
						</Grid.Row>
					</Grid.Col>
				</Grid.Row>
			</Grid>
		</main>
	</>
)
