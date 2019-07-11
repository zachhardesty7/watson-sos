import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { GridCol } from './GridCol'
import { GridRow } from './GridRow'

// functionality mostly handled by scss here: https://github.com/carbon-design-system/carbon-elements/blob/master/packages/grid/scss/_mixins.scss
export const Grid = ({
	noGutter = false,
	aspectRatio = undefined,
	fullWidth = false,
	condensed = false,
	className = '',
	children = null,
}) => (
	<div className={cx(
		'bx--grid',
		fullWidth && 'bx--grid--full-width',
		condensed && 'bx--grid--condensed',
		aspectRatio && 'bx--aspect-ratio',
		aspectRatio && `bx--aspect-ratio--${aspectRatio[0]}x${aspectRatio[1]}`,
		noGutter === true && 'bx--no-gutter',
		noGutter !== true && noGutter && `bx--no-gutter--${noGutter}`,
		className
	)}
	>
		{children}
	</div>
)

Grid.Col = GridCol
Grid.Row = GridRow

Grid.propTypes = {
	/** remove horizontal padding and negative margins on child rows */
	noGutter: PropTypes.bool,
	/** input as [width, height] */
	aspectRatio: PropTypes.oneOf([16, 9], [2, 1], [4, 3], [1, 1]),
	fullWidth: PropTypes.bool,
	condensed: PropTypes.bool,
	/** user defined classes to be merged into grid classes */
	className: PropTypes.string,
	/** arbitrary JSX */
	children: PropTypes.node,
}
