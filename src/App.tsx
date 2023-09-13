import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components/layout/layout.tsx'
import { NewsPage } from '@/pages/news-page.tsx'

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
        element: <NewsPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
