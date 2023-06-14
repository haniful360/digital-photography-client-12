import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers";
import ManagesClasses from "../Pages/DashBoard/Admin/ManagesClasses";
import MyEnrolledClass from "../Pages/DashBoard/Students/MyEnrolledClass";
import MySelectedClass from "../Pages/DashBoard/Students/MySelectedClass";
import AddClass from "../Pages/DashBoard/Instructors/AddClass";
import MyClass from "../Pages/DashBoard/Instructors/MyClass";
import UpdateClass from "../Pages/DashBoard/Instructors/UpdateClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/Students/PaymentHistory";
import FeedBack from "../Pages/DashBoard/Admin/FeedBack";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageClasses',
        element: <ManagesClasses></ManagesClasses>
      },
      {
        path: 'feedback/:id',
        element: <FeedBack></FeedBack>,
        loader: ({ params }) => fetch(`http://localhost:5000/addClass/${params.id}`)
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: 'updateClass/:id',
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`http://localhost:5000/addClass/${params.id}`)
      },
      {
        path: 'enrolledClasses',
        element: <MyEnrolledClass></MyEnrolledClass>
      },
      {
        path: 'selectedClasses',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: 'payment/:id',
        element: <Payment />,
        loader: ({ params }) => fetch(`http://localhost:5000/selectedClass/${params.id}`)
      },
    ]
  }
]);

export default router;