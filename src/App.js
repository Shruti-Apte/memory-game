import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Howler } from "howler";
import { SharedProvider } from "./Context/SharedContext";
import AppWrapper from "./Components/AppWrapper";
import "../src/assets/css/App.css";

const ErrorFallback = ({ error }) => {
  return (
    <div className="theme h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl text-center text-red">
        Oops! An error occurred{" "}
      </h2>
      <h2>{error.message}</h2>
    </div>
  );
};

function App() {
  document.addEventListener("click", () => {
    if (Howler.ctx.state === "suspended") {
      Howler.ctx.resume();
    }
  });
  return (
    <SharedProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppWrapper />
      </ErrorBoundary>
    </SharedProvider>
  );
}

export default App;
