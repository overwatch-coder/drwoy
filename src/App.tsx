import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./Home"

const App = () => {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App