import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@blueprintjs/core'
import PropTypes from 'prop-types'
import Badge from './Badge'

const fontTypes = css`
  color: ${({theme}) => theme.grey};
  
  ${(props) => props.italic && `
    font-style: italic;
  `}
  ${(props) => props.weight === 'hairline' && `
    font-weight: 100;
  `}
  ${(props) => props.weight === 'thin' && `
    font-weight: 200;
  `}
  ${(props) => props.weight === 'light' && `
    font-weight: 300;
  `}
  ${(props) => props.weight === 'normal' && `
    font-weight: 400;
  `}
  ${(props) => props.weight === 'medium' && `
    font-weight: 500;
  `}
  ${(props) => props.weight === 'semi-bold' && `
    font-weight: 600;
  `}
  ${(props) => props.weight === 'bold' && `
    font-weight: 700;
  `}
  ${(props) => props.weight === 'extrabold' && `
    font-weight: 800;
  `}
  ${(props) => props.weight === 'black' && `
    font-weight: 900;
  `}
`

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  ${fontTypes}
`
const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  ${fontTypes}
`
const H3 = styled.h3`
  font-size: 2.25rem;
  font-weight: 400;
  ${fontTypes}
`
const H4 = styled.h4`
  font-size: 1.875rem;
  font-weight: 400;
  ${fontTypes}
`
const H5 = styled.h5`
  font-size: 1.5rem;
  font-weight: 400;
  ${fontTypes}
`
const H6 = styled.h6`
  font-size: 1.25rem;
  font-weight: 400;
  ${fontTypes}
`
const Body = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  ${fontTypes}
`
const Subtitle = styled.span`
  font-size: .875rem;
  font-weight: 400;
  ${fontTypes}
`
const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  padding-top: .5rem;
  padding-right: .75rem;

  .icon-badge {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const _Icon = ({ badgeProps, className, ...props }) => (badgeProps ? (
	<IconContainer className={className}>
		<div className="icon-badge">
			<Badge {...badgeProps} />
		</div>
		<Icon {...props} />
	</IconContainer>
) : (
	<Icon className={className} {...props} />
))
_Icon.propTypes = {
	className: PropTypes.string,
	badgeProps: PropTypes.object
}

const body = (position, iconProps, text, children) => (
	<>
		{ iconProps && position === 'left' && <_Icon {...iconProps} /> }
		{ text || children }
		{ iconProps && position === 'right' && <_Icon {...iconProps} /> }
	</>
)

const _ = ({
	variant, text, children, position, iconProps, ...props
}) => {
	switch (true) {
	case variant === 'h1':
		return <H1 {...props}>{body(position, iconProps, text, children)}</H1>
	case variant === 'h2':
		return <H2 {...props}>{body(position, iconProps, text, children)}</H2>
	case variant === 'h3':
		return <H3 {...props}>{body(position, iconProps, text, children)}</H3>
	case variant === 'h4':
		return <H4 {...props}>{body(position, iconProps, text, children)}</H4>
	case variant === 'h5':
		return <H5 {...props}>{body(position, iconProps, text, children)}</H5>
	case variant === 'h6':
		return <H6 {...props}>{body(position, iconProps, text, children)}</H6>
	case variant === 'body':
		return <Body {...props}>{body(position, iconProps, text, children)}</Body>
	case variant === 'icon':
		return <_Icon {...props} />
	case variant === 'subtitle':
	default:
		return <Subtitle {...props}>{body(position, iconProps, text, children)}</Subtitle>
	}
}
_.propTypes = {
	/** Type of tag to render (h1, h2, h3, h4, h5, h6, body, paragraph, icon) */
	variant: PropTypes.string.isRequired,
	/** Optional alternative to children prop if only text is being displayed */
	text: PropTypes.string,
	/** Optional React Node to pass into component */
	children: PropTypes.node,
	/** Enables Italic typography */
	italic: PropTypes.bool,
	/** Type of weight to use on font (thin, light, bold, extrabold, black) */
	weight: PropTypes.string,
	/** Decides if icon goes before or after text */
	position: PropTypes.string,
	/** Props defined in blueprintjs icon component. https://blueprintjs.com/docs/#core/components/icon */
	iconProps: PropTypes.object,
	/** Props to pass into Icon's badge component */
	badgeProps: PropTypes.object
}
_.defaultProps = {
	position: 'left'
}

export default _
