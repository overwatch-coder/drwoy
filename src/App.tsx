import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./Home"
import MainLayout from "./MainLayout"
// import { ContactAction } from "./components/Contact"

const App = () => {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<MainLayout />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App