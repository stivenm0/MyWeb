import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";


const router = createBrowserRouter([
    {
        path: "/",
        element:  <Layout/>,
        // errorElement: "NOT FOUND",
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/proyectos",
                element: <Projects/>
            },
            {
                path:"/habilidades",
                element: <Skills/>
            },
            {
                path:"/formacion",
                element: <Certifications/>
            },
        ]

    },
    
]);

export default router;