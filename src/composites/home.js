import { useSnapshot } from 'valtio'

import store from '$stores'

export default function Comp () {
  const { list, text } = useSnapshot(store)

  useEffect(() => {
    store.list.push(3)
    store.text = 'ttt'
  }, [])

  return (
    <>
      <div className='grid grid-cols-5 gap-4'>
        {list.map((n) => (
          <div key={n} className='h-24 bg-red-900'>{n}</div>
        ))}
      </div>

      <Comp2 />
    </>
  )
}

function Comp2 () {
  //const [state, setState] = useState(null)

  //useEffect(() => {
    //
  //}, [])

  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button">
          open modal
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Interner user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription to use
              Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
    </div>
  )
}
