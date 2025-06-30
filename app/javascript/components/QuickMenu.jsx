import React, { useState } from 'react'

const categories = [
    { label: 'All', query: '' },
    { label: 'Vegan', query: 'vegan' },
    { label: 'Vegetarian', query: 'vegetarian' },
    { label: 'Italian', query: 'italian' },
    { label: 'Brazilian', query: 'brazilian' },
    { label: 'Desserts', query: 'dessert' },
    { label: 'Breakfast', query: 'breakfast' },
    { label: 'Lunch', query: 'lunch' },
    { label: 'Dinner', query: 'dinner' },
    { label: 'Fitness', query: 'fitness' },
    { label: 'Gluten Free', query: 'gluten free' },
    { label: 'Lactose Free', query: 'lactose free' },
    { label: 'Quick', query: 'quick' },
    { label: 'Low Carb', query: 'low carb' },
    { label: 'Soups', query: 'soup' },
    { label: 'Salads', query: 'salad' },
    { label: 'Snacks', query: 'snack' },
    { label: 'Appetizers', query: 'appetizer' },
    { label: 'BBQ', query: 'bbq' },
    { label: 'Asian', query: 'asian' },
    { label: 'French', query: 'french' },
    { label: 'Mexican', query: 'mexican' },
    { label: 'Seafood', query: 'seafood' },
    { label: 'Pasta', query: 'pasta' },
    { label: 'Rice', query: 'rice' },
    { label: 'Breads', query: 'bread' },
    { label: 'Cakes', query: 'cake' },
    { label: 'Cookies', query: 'cookie' },
    { label: 'Drinks', query: 'drink' },
    { label: 'Kids', query: 'kids' },
    { label: 'Holiday', query: 'holiday' },
    { label: 'Slow Cooker', query: 'slow cooker' },
    { label: 'Sandwiches', query: 'sandwich' },
]

export default function QuickMenu({ onQuickSearch, activeCategory }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
      {categories.map(cat => (
        <button
          key={cat.label}
          onClick={() => onQuickSearch(cat.query)}
          className={
            'quickmenu-btn' + (activeCategory === cat.query ? ' quickmenu-btn-active' : '')
          }
          aria-label={`Show ${cat.label.toLowerCase()} recipes`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
