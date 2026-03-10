import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://49e0ba3dbf0aea77d1c1082d0fd366c3@o4511019667357696.ingest.de.sentry.io/4511019683610704",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: 1.0,
  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
