import { create } from 'zustand'

export const useStore = create(() => ({
  text: 'parcel react starter',
  todos: [],
  loading: false,
}))

export const updateText = () => {
  useStore.setState({
    text: faker.lorem.words()
  })
}

export const getTodos = async () => {
  useStore.setState({ loading: true })
  const { data } = await axios.get('/api/todos')
  useStore.setState({ loading: false, todos: data })
}
