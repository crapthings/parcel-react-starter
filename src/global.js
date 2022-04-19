import axios from 'axios'

import _ from 'lodash'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import createStore from 'zustand'
import classNames from 'classnames'

import { createBrowserHistory } from 'history'

import faker from '@faker-js/faker'

window.axios = axios

window._ = _
window.dayjs = dayjs
dayjs.extend(relativeTime)

window.useEffect = useEffect
window.useLayoutEffect = useLayoutEffect
window.useRef = useRef

window.useNavigate = useNavigate
window.useParams = useParams
window.useSearchParams = useSearchParams

window.createStore = createStore
window.classNames = classNames

window.his = createBrowserHistory({ window })
window.goback = () => his.back()
window.goto = (...args) => his.push(...args)

window.faker = faker
