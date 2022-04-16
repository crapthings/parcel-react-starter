import {
  IoMenuOutline,
  IoQrCodeOutline,
} from 'react-icons/io5'

import Grid from '$c/grid'
import Card from '$c/card'
import List from '$c/list'

export default function Home () {
  return (
    <div className='mb-16'>
      <Menu />
      <Grid />
      <Card />
      <List />
    </div>
  )
}

function Menu () {
  return (
    <div className='sticky top-0 flex items-center h-12 border-b bg-white'>
      <div className='flex-1'>
        <div className='px-4'>
          <IoMenuOutline size='1.2rem' />
        </div>
      </div>

      <div className='flex-1 text-center'>
        <div>{faker.lorem.word(10)}</div>
        <div className='text-xs'>{faker.lorem.words(2)}</div>
      </div>

      <div className='flex-1 flex place-content-end'>
        <div className='px-4'>
          <IoQrCodeOutline size='1.2rem' />
        </div>
      </div>
    </div>
  )
}
