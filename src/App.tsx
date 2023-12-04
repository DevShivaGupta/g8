import "@mantine/core/styles.css";
import React from "react";
import "@mantine/carousel/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/Header/HeaderMenu";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import classes from "./App.module.css";

const LazyMainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const LazyContactPage = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const LazyAboutPage = React.lazy(() => import("./pages/AboutUs/AboutUs"));

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div className={classes.app}>
        <HeaderMenu />
        <BrowserRouter>
          <Routes>
            <Route index element={<LazyMainPage />} />
            <Route
              path="*"
              element={
                <React.Suspense>
                  <LazyContactPage />
                </React.Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <React.Suspense>
                  <LazyContactPage />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense>
                  <LazyAboutPage />
                </React.Suspense>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}
