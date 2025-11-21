import { SuspenseWrapper } from "@/components/custom/Suspense-wrapper";
import backoffice_routes, { RouteProps } from "@/lib/routes/backoffice.routes";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
const Landing = lazy(() => import("./layouts/Landing/Landing.layout"));
const Backoffice = lazy(() => import("./layouts/Backoffice/Backoffice.layout"));

const Home = lazy(() => import("@/pages/home/Home"));
const Login = lazy(() => import("@/pages/Login/Login"));
const Register = lazy(() => import("@/pages/Register/Register"));
const NotFound = lazy(() => import("@/pages/404/404"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <SuspenseWrapper>
              <Landing />
            </SuspenseWrapper>
          }
        >
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Home />
              </SuspenseWrapper>
            }
          />
          <Route
            path="*"
            element={
              <SuspenseWrapper>
                <NotFound />
              </SuspenseWrapper>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <SuspenseWrapper>
              <Login />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <SuspenseWrapper>
              <Register />
            </SuspenseWrapper>
          }
        />
        <Route
          element={
            <SuspenseWrapper>
              <Backoffice />
            </SuspenseWrapper>
          }
        >
          {backoffice_routes.map((item: RouteProps, key) => {
            const renderRoute = (route: RouteProps, index: number) => {
              if (route.children) {
                return (
                  <Route
                    key={index}
                    element={route.layout || route.component}
                    path={route.path}
                  >
                    {route.layout ? (
                      <Route element={route.component}>
                        {route.children.map((child, childIndex) =>
                          renderRoute(child, childIndex),
                        )}
                      </Route>
                    ) : (
                      route.children.map((child, childIndex) =>
                        renderRoute(child, childIndex),
                      )
                    )}
                  </Route>
                );
              }

              if (route.layout) {
                return (
                  <Route
                    key={index}
                    element={route.layout}
                    path={route.path}
                  >
                    <Route index element={route.component} />
                  </Route>
                );
              }

              return (
                <Route
                  key={index}
                  element={route.component}
                  path={route.path}
                  index={route.path === ""}
                />
              );
            };

            return renderRoute(item, key);
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
