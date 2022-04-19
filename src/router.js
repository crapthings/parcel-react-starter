import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/layout'

import * as composites from './composites/**/*.js'

const history = window.his

export default function Router () {
  const { home, ...routes } = composites

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route index element={(
          <Layout>
            <home.default />
          </Layout>
        )} />

        {_.map(routes, router)}

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </HistoryRouter>
  )
}

function router (element, filename) {
  const [pathname, ...params] = filename.split(':')

  let path = '/' + pathname

  if (params.length) {
    for (const param of params) {
      path += `/:${param}`
    }
  }

  return (
    <Route key={path} path={path} element={element.layout ? (
      <element.layout>
        <element.default />
      </element.layout>
    ) : (
      <Layout>
        <element.default />
      </Layout>
    )} />
  )
}
