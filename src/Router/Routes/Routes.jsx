const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { Home, Contact, Login, Signup, DoctorDetails, Doctors, Services } = require("../../Pages");
const { default: PrivateRoute } = require("../PrivateRoute/PrivateRoute");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: "/doctors/:id",
                element: <DoctorDetails />,
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            /*{
                path: "/doctors/:id",
                element: <PrivateRoute>
                        <DoctorDetails />
                        </PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },*/
        ]
    }
    ])

    export default router