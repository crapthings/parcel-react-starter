import { Outlet } from 'react-router-dom'

import Nav from './nav'

export default function Layout ({ children }) {
  return (
    <>
      {children ? children : <Outlet />}
      <Nav />
    </>
  )
