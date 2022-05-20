export default function Page1 () {
  const [todo, setTodo] = useState({})

  useEffect(async () => {
    const { data } = await axios.get('/api/todos/1')
    setTodo(data)
  }, [])

  return (
    <>
      <div>page1</div>
      <div>{todo.title}</div>
    </>
  )
}
