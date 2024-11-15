import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import Call from "./components/Call.jsx";
import Clock from "./components/Clock.jsx";
import Calendar from "./components/Calendar.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      casheTime: 1000 * 60 * 60 * 24,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export default function App() {
  return (
    <div className="app m-4 p-2 bg-neutral-900 text-slate-300 h-full grid grid-cols-2 grid-rows-3">
      <PersistQueryClientProvider
        persistOptions={{ persister }}
        client={queryClient}
      >
        <Clock />
        <Calendar />
        <Call />
      </PersistQueryClientProvider>
    </div>
  );
}
