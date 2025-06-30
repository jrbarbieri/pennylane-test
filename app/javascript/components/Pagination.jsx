import React from 'react'

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  let start = Math.max(1, page - 2)
  let end = Math.min(totalPages, page + 2)
  if (page <= 3) end = Math.min(5, totalPages)
  if (page >= totalPages - 2) start = Math.max(1, totalPages - 4)

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    padding: '1px 5px',
    fontSize: '0.75em',
  }

  const activeStyle = {
    ...linkStyle,
    color: '#222',
    fontWeight: 'bold',
    cursor: 'default'
  }

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        disabled={page === i}
        className="pagination-btn"
        style={page === i ? { fontWeight: 'bold' } : {}}
        tabIndex={page === i ? -1 : 0}
      >
        {i}
      </button>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', flexWrap: 'nowrap', gap: '0.1rem', width: '100%' }}>
      <button onClick={() => onPageChange(1)} disabled={page === 1} className="pagination-btn" style={page === 1 ? { fontWeight: 'bold' } : {}}>First</button>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="pagination-btn" style={page === 1 ? { fontWeight: 'bold' } : {}}>Prev</button>
      {pages}
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="pagination-btn" style={page === totalPages ? { fontWeight: 'bold' } : {}}>Next</button>
      <button onClick={() => onPageChange(totalPages)} disabled={page === totalPages} className="pagination-btn" style={page === totalPages ? { fontWeight: 'bold' } : {}}>Last</button>
    </div>
  )
}
