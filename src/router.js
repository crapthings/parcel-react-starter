import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './composites/home'
import Browse from './composites/browse'
import My from './composites/my'

export default () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='browse' element={<Browse />} />
          <Route path='my' element={<My />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </Router>
  )
}
