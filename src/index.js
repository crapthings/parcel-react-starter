import _ from 'lodash'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { render } from 'react-dom'

import Router from './router'

window._ = _

window.useState = useState
window.useEffect = useEffect
window.useLayoutEffect = useLayoutEffect
window.useRef = useRef

render(<Router />, document.querySelector('#app'))
