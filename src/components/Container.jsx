import React from 'react'
import cx from 'classnames'

import '../styles/Container.scss'

export const Container = ({
	children,
	// content, // TODO: implement
	// fluid, // TODO: implement
	text = false, // FIXME: class doesn't apply
	// textAlign, // TODO: implement
	// className, // TODO: implement
}) => (
	<div className={cx('zh', 'container', text && 'text')}>
		{children}
	</div>
)
