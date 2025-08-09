import { createBrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import App from '../App.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'project', element: <Projects /> },
          { path: 'contact', element: <Contact /> },
        ],
    },
])

export default router;
