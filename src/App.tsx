import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components/layout/layout.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      // {
      //   element: <PrivateRoute />,
      //   children: [
      //     { },
      //   ],
      // },
      {
        path: '/news',
        element: (
          <div style={{ position: 'absolute', left: '40%', top: '40%', fontSize: '100px' }}>
            News Page
          </div>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
