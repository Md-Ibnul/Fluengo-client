import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import React from "react";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routes/Routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" reverseOrder={false}/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
