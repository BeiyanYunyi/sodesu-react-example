import { FC, Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import Comments from "./components/Comments";

const Layout: FC = () => (
  <>
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "black" : undefined,
        textDecoration: isActive ? "none" : "underline",
      })}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "black" : undefined,
        textDecoration: isActive ? "none" : "underline",
        marginLeft: "1rem",
      })}
      to="/guide/get-started/"
    >
      Page 1
    </NavLink>
    <Outlet />
    <Suspense fallback={<p>Comments Loading...</p>}>
      <Comments />
    </Suspense>
  </>
);

export default Layout;
