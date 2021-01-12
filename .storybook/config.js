import { addDecorator } from '@storybook/react'
import ThemeDecorator from './ThemeDecorator'
import '../src/assets/css/globals.css'
import '../src/assets/css/normalize.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'
addDecorator(ThemeDecorator)

global.__PATH_PREFIX__ = ''
// window.___push was renamed to window.___navigate, have to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}