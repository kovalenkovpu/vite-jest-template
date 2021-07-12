// src/mocks/browser.js
import { setupWorker } from "msw";
import { userMocks } from "../components/Header/mocks/user-mock";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...userMocks);
