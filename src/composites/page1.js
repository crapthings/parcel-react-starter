import { Virtuoso } from 'react-virtuoso'
import { useQuery } from '@tanstack/react-query'

import axios from '$l/axios'

export default function Page1 () {
  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      return await axios.get('/todos')
    }
  })

  if (isLoading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div className='flex-1'>
      <Virtuoso
        totalCount={data.length}
        itemContent={List(data)}
        className='min-h-screen'
      />
    </div>
  )
}

const List = (data) => (index) => {
  return (
    <div>{data[index].title}</div>
  )
}
