import { Outlet } from 'react-router-dom'

export default function Comp () {
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
      {_.times(4, (n) => (
        <div key={n} className='flex-1 flex flex-col justify-center items-center'>
          <div>icon</div>
          <div>text</div>
        </div>
      ))}
    </div>
  )
}
