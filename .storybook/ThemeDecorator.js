import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '../src/Layout'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider.Provider>
    {storyFn()}
  </ThemeProvider.Provider>
)
ThemeDecorator.propTypes = {
  storyFn: PropTypes.any
}

export default ThemeDecorator