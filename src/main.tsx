import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newrelic: {
      noticeError: (e: Error, customObj?: Record<string, unknown>) => void
    }
    NREUM: {
      loader_config: unknown
      info: unknown
    }
  }
}

if (
  typeof window !== 'undefined' &&
  Object.prototype.hasOwnProperty.call(window, 'NREUM')
) {
  window.NREUM.loader_config = {
    accountID: '3066873',
    trustKey: '3066873',
    agentID: 1103207852,
    licenseKey: 'NRJS-58092b9e4fd15f33c73',
    applicationID: 1103207852,
  }
  window.NREUM.info = {
    beacon: 'bam.nr-data.net',
    errorBeacon: 'bam.nr-data.net',
    licenseKey: 'NRJS-58092b9e4fd15f33c73',
    applicationID: 1103207852,
    sa: 1,
  }
} else {
  console.error('unable to load newrelic')
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
