import React from 'react'

import {
	Header,
	HeaderMenu,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	SideNav,
	SideNavItems,
	SideNavMenu,
	SideNavMenuItem,
	Tile,
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
				[SOS]
			</HeaderName>
			<HeaderNavigation aria-label='IBM [Platform]'>
				<HeaderMenuItem href='#'>ABOUT US</HeaderMenuItem>
				<HeaderMenuItem href='#'>PRODUCTS</HeaderMenuItem>
				<HeaderMenuItem href='#'>CONTACT US</HeaderMenuItem>
				<HeaderMenu aria-label='Link 4'>
					<HeaderMenuItem href='#'>Sub-link 1</HeaderMenuItem>
					<HeaderMenuItem href='#'>Sub-link 2</HeaderMenuItem>
					<HeaderMenuItem href='#'>Sub-link 3</HeaderMenuItem>
				</HeaderMenu>
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
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Camera width='16' height='16' />} title='Westside Entrance'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Gauge width='16' height='16' />} title='Courtyard'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
			</SideNavItems>
			<div><p className='sideNavMtitle'>Resp. Protocols</p></div>
			<SideNavItems className='navSpace'>
				<SideNavMenu renderIcon={() => <Alert width='16' height='16' />} title='Notify Local Police'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Lock width='16' height='16' />} title='Lockdown Doors'>
					<SideNavMenuItem href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={() => <Star width='16' height='16' />} title='Notify EMS'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
			</SideNavItems>
		</SideNav>

		<main className='main'>
			<div><h1 className='title'>Emergency Response System</h1></div>
			<Grid className='grid'>
				<Grid.Row>

					<Grid.Col xlg='6'>
						<Grid.Row className='cell'>
							<Tile>
								<Grid.Row className='cell'>
									{/* <Grid.Col> */}
									<div className='colSpace'><img src={companylogo} width='100px' height='130px' alt='WC Logo' /></div>
									{/* </Grid.Col> */}
									<Grid.Col>
										<Grid.Row>
											<div>Educational Institution</div>
										</Grid.Row>
										<Grid.Row>
											<div className='tileTile'>Willow Glen City College</div>
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
								Default tile
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
