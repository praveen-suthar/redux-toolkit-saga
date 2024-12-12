import { createRoot } from "react-dom/client"
// import "./index.css"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/store/store.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./components/SignUp.jsx"
import TableData from "./components/TableData.jsx"


  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <App />,
  //     children:[
  //       {
  //         path: '/prc',
  //         element:<SignUp/>
  //       }
  //     ]
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUp />
  //   },
  //   {
  //     path: "/tabledata",
  //     element: <TableData />
  //   },
    
  // ])


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </Provider>
)
