import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div>
      <Outlet />
      <Nav />
    </div>
  )
}

function Nav () {
  return (
    <div className='fixed z-50 bottom-0 flex w-full h-16 text-white bg-blue-700'>
      <NavItem text='home' path='/' />
      <NavItem text='browse' path='/browse' />
      <NavItem text='my' path='/my' />
    </div>
  )
}

function NavItem ({ text, path }) {
  const nav = useNavigate()

  const to = (p) => () => nav(p)

  return (
    <div className='flex-1 flex flex-col justify-center items-center' onClick={to(path)}>
      <div className='w-6 h-6 rounded-full bg-white'></div>
      <div>{text}</div>
    </div>
  )
}
