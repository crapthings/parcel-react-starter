import axios from 'axios'

import _ from 'lodash'
import moment from 'moment'

import { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'

import classNames from 'classnames'

import { faker } from '@faker-js/faker'

window.axios = axios

window._ = _
window.moment = moment

window.useRef = useRef
window.useState = useState
window.useEffect = useEffect

window.useNavigate = useNavigate
window.useLocation = useLocation
window.useParams = useParams
window.useSearchParams = useSearchParams

window.classNames = classNames

window.faker = faker
