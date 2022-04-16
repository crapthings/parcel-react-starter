import _ from 'lodash'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { render } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import faker from '@faker-js/faker'

import Router from './router'

window._ = _

window.useState = useState
window.useEffect = useEffect
window.useLayoutEffect = useLayoutEffect
window.useRef = useRef
window.useNavigate = useNavigate

window.classNames = classNames

window.faker = faker

render(<Router />, document.querySelector('#app'))
