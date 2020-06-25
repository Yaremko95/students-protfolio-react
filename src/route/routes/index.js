import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";

export default [
  {
    path: "/",
    exact: true,
    layout: MainLayout,
    component: Home,
  },
  {
    path: "/students/:studentId",
    exact: true,
    layout: MainLayout,
    component: Home,
  },
  {
    path: "/projects",
    exact: true,
    layout: MainLayout,
    component: Projects,
  },
  {
    path: "/projects/:projectID",
    exact: true,
    layout: MainLayout,
    component: Home,
  },
];
