import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './index'
import Detail from './detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'detail',
    element: <Detail />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
