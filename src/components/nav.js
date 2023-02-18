function NavItem ({ text, path }) {
  const nav = useNavigate()

  const routeTo = (path) => () => nav(path)

  return (
    <div className='flex-1 flex flex-col justify-center items-center space-y-1' onClick={routeTo(path)}>
      <div className='w-6 h-6 rounded-full bg-white'></div>
      <div className='text-xs'>{text}</div>
    </div>
  )
}

export default function Nav () {
  return (
    <div className='fixed z-50 bottom-0 flex w-full h-14 text-white bg-blue-700'>
      <NavItem text={faker.lorem.word(7)} path='/' />
      <NavItem text={faker.lorem.word(5)} path='/page1' />
      <NavItem text={faker.lorem.word(6)} path='/page2' />
      <NavItem text={faker.lorem.word(3)} path='/page3' />
    </div>
  )
}
