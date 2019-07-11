import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const GridRow = ({
	condensed = false,
	className = '',
	children = null,
}) => (
	<div className={cx('bx--row', condensed && 'bx--row--condensed', className)}>
		{children}
	</div>
)

GridRow.propTypes = {
	condensed: PropTypes.bool,
	/** user defined classes to be merged into grid classes */
	className: PropTypes.string,
	/** arbitrary JSX */
	children: PropTypes.node,
}
