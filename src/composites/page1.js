import { useStore, getTodos } from '$s'

export default function Page1 () {
  const loading = useStore((state) => state.loading)
  const todos = useStore((state) => state.todos)

  useEffect(() => {
    getTodos()
  }, [])

  if (loading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  )
}
