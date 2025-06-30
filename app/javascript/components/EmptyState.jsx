import React from 'react'

export default function EmptyState() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        color: '#ff9800',
        background: '#fff8f2',
        borderRadius: '20px',
        boxShadow: '0 2px 16px #ffb74d22',
        margin: '0 auto',
        maxWidth: 600,
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}>
        <span style={{ fontSize: '4rem', marginBottom: '1.2rem' }}>🍰🥕🍳</span>
        <h2 style={{ fontWeight: 900, fontSize: '2.3rem', margin: 0 }}>No recipes found!</h2>
        <p style={{ fontSize: '1.25rem', margin: '1.2rem 0 0 0', color: '#b85c00', textAlign: 'center' }}>
          Sorry, we couldn't find any recipes for your search.<br />
          Try another keyword or category!
        </p>
        <span style={{ fontSize: '2.5rem', marginTop: '1.2rem' }}>🥲</span>
      </div>
    </div>
  )
}
