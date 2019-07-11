import React from 'react'

import Search20 from '@carbon/icons-react/lib/search/20'
import Notification20 from '@carbon/icons-react/lib/notification/20'
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'

import {
	Header,
	HeaderGlobalAction,
	HeaderGlobalBar,
	HeaderMenu,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	SideNav,
	SideNavItems,
	SideNavLink,
	SideNavMenu,
	SideNavMenuItem,
	Tile,
} from 'carbon-components-react'

import { Grid } from '../components'

import '../styles/Dashboard.scss'
import companylogo from '../assets/WC_Logo.png'
import map from '../assets/map.png'

const Fade16 = () => (
	<svg
		width='16'
		height='16'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		aria-hidden='true'
	>
		<path d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z' />
	</svg>
)

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
			<HeaderGlobalBar>
				<HeaderGlobalAction aria-label='Search' onClick={() => { }}>
					<Search20 />
				</HeaderGlobalAction>
				<HeaderGlobalAction aria-label='Notifications' onClick={() => { }}>
					<Notification20 />
				</HeaderGlobalAction>
				<HeaderGlobalAction aria-label='App Switcher' onClick={() => { }}>
					<AppSwitcher20 />
				</HeaderGlobalAction>
			</HeaderGlobalBar>
		</Header>
		<SideNav
			isFixedNav
			expanded
			isChildOfHeader={false}
			aria-label='Side navigation'
		>
			{/* <div><h2 className='sideNavtitle'></h2></div> */}
			{/* <span></span> */}
			<div><p className='sideNavtitle'>My Devices</p></div>
			<SideNavItems className='navSpace'>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavLink renderIcon={Fade16} href='#'>
					Link
				</SideNavLink>
				<SideNavLink renderIcon={Fade16} href='#'>
					Link
				</SideNavLink>
			</SideNavItems>
			<div><p className='sideNavMtitle'>My Protocols</p></div>
			<SideNavItems className='navSpace'>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavMenu renderIcon={Fade16} title='Category title'>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
					<SideNavMenuItem aria-current='page' href='#'>
						Link
					</SideNavMenuItem>
					<SideNavMenuItem href='#'>Link</SideNavMenuItem>
				</SideNavMenu>
				<SideNavLink renderIcon={Fade16} href='#'>
					Link
				</SideNavLink>
				<SideNavLink renderIcon={Fade16} href='#'>
					Link
				</SideNavLink>
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
