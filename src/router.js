import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './composites/home'
import About from './composites/about'

export default () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </Router>
  )
}
