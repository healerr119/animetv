import React from 'react'

export default function Loading() {
  return (
    <div className="d-flex justify-content-center loading" style={{marginTop:'70px'}}>
        <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
