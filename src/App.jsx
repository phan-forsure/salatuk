import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Call from "./components/Call.jsx";
import Clock from "./components/Clock.jsx";
import Calendar from "./components/Calendar.jsx";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="app m-5 mx-80 bg-neutral-900 text-slate-300 max-lg:mx-40 max-md:mx-8 max-sm:mx-4">
      <h1 className="p-8 font-bold text-2xl text-center bg-neutral-700">
        Islamic Prayer Times Application
      </h1>
      <QueryClientProvider client={queryClient}>
        <Clock />
        <Call />
        <Calendar />
      </QueryClientProvider>
    </div>
  );
}
