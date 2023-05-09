import { Link } from 'react-router-dom'

export default function Page3 () {
  return (
    <div>
      <div>page3</div>
      <Link to={`/list/${faker.lorem.word()}`}>test</Link>
    </div>
  )
}

export { default as layout } from '$c/blank'
