// src/mocks/browser.js
import { setupWorker } from 'msw'
import { small_handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...small_handlers)
