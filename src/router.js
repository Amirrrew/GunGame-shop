import Home from "./components/Home"
import Allprd from "./Pages/Products"
import Mainpost from "./Pages/Mainpost"
import AllServices from "./Pages/AllServices"
import Contactus from "./Pages/Contactus"
import Allgames from "./Pages/Allgames"

let routes = [
    {path: '/' ,element: <Home/>},
    {path: '/Products' ,element: <Allprd/>},
    {path: '/Products/:Id' ,element: <Mainpost/>},
    {path: '/Services' ,element: <AllServices/>},
    {path: '/Contact' ,element: <Contactus/>},
    {path: '/Games' ,element: <Allgames/>}
]

export default routes