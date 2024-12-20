import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.tsx";
import Layout from "./Layout.tsx";
import ExamplePage from "./ExamplePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="guide/get-started/" element={<ExamplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
