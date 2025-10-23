import React from 'react'

export default function ErrorFallback({ error }) {
  return (
    <div style={{padding:20}}>
      <h2>Something went wrong</h2>
      <pre>{error?.message}</pre>
    </div>
  )
}
