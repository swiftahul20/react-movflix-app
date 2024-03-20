import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  let token = sessionStorage.getItem("token");

  //   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  //     <Outlet />
  //   ) : auth?.user ? (
  //     <Navigate to="/unauthorized" state={{ from: location }} replace />
  //   ) : (
  //     <Navigate to="/login" state={{ from: location }} replace />
  //   );
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
