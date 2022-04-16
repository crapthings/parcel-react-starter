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
      <NavItem text={faker.lorem.word(7)} path='/' />
      <NavItem text={faker.lorem.word(5)} path='/browse' />
      <NavItem text={faker.lorem.word(6)} path='/my' />
      <NavItem text={faker.lorem.word(3)} path='/' />
    </div>
  )
}

function NavItem ({ text, path }) {
  const nav = useNavigate()

  const to = (p) => () => nav(p)

  return (
    <div className='flex-1 flex flex-col justify-center items-center space-y-1' onClick={to(path)}>
      <div className='w-6 h-6 rounded-full bg-white'></div>
      <div className='text-xs'>{text}</div>
    </div>
  )
}
