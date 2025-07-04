import React, { useState } from "react";

const categories = [
  { label: "All", query: "" },
  { label: "Appetizers", query: "appetizer" },
  { label: "Asian", query: "asian" },
  { label: "BBQ", query: "bbq" },
  { label: "Breads", query: "bread" },
  { label: "Breakfast", query: "breakfast" },
  { label: "Brazilian", query: "brazilian" },
  { label: "Cakes", query: "cake" },
  { label: "Cookies", query: "cookie" },
  { label: "Desserts", query: "dessert" },
  { label: "Dinner", query: "dinner" },
  { label: "Drinks", query: "drink" },
  { label: "Fitness", query: "fitness" },
  { label: "French", query: "french" },
  { label: "Gluten Free", query: "gluten free" },
  { label: "Holiday", query: "holiday" },
  { label: "Italian", query: "italian" },
  { label: "Kids", query: "kids" },
  { label: "Lactose Free", query: "lactose free" },
  { label: "Low Carb", query: "low carb" },
  { label: "Lunch", query: "lunch" },
  { label: "Mexican", query: "mexican" },
  { label: "Pasta", query: "pasta" },
  { label: "Quick", query: "quick" },
  { label: "Rice", query: "rice" },
  { label: "Salads", query: "salad" },
  { label: "Sandwiches", query: "sandwich" },
  { label: "Seafood", query: "seafood" },
  { label: "Slow Cooker", query: "slow cooker" },
  { label: "Snacks", query: "snack" },
  { label: "Soups", query: "soup" },
  { label: "Vegan", query: "vegan" },
  { label: "Vegetarian", query: "vegetarian" },
];

export default function QuickMenu({ onQuickSearch, activeCategory }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.label}
          onClick={() => onQuickSearch(cat.query)}
          className={
            "quickmenu-btn" +
            (activeCategory === cat.query ? " quickmenu-btn-active" : "")
          }
          aria-label={`Show ${cat.label.toLowerCase()} recipes`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
