import DoctorList from "Dashboard/Doctor/DoctorList";
import UserList from "Dashboard/User/UserList";
import DoctorAccount from "Dashboard/doctor-account/DoctorAccount";
import MyAccount from "Dashboard/user-account/MyAccount";
import BookAppointment from "Pages/Booking/BookAppointment";

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
                element: <PrivateRoute allowedRoles={["patient"]}>
                        <DoctorDetails />,
                        </PrivateRoute>
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            
            {
                path: "/users/profile/me",
                element: <PrivateRoute allowedRoles={["patient"]}>
                <MyAccount />,
                </PrivateRoute>
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },            
            {
                path: "/doctors/profile/me",
                element: <PrivateRoute allowedRoles={["doctor"]}>
                        <DoctorAccount />
                        </PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            
            {
                path: "/dashboard/doctors",
                element: <PrivateRoute allowedRoles={["doctor"]}>
                        <DoctorList />
                        </PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/dashboard/users",
                element: <PrivateRoute allowedRoles={["patient"]}>
                        <UserList />
                        </PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/doctor/:id/bookAppointment",
                element: <PrivateRoute allowedRoles={["patient"]}>
                        <BookAppointment />
                        </PrivateRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
    ])

    export default router