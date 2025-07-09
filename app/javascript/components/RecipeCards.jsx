import React from "react";

export default function RecipeCards({ recipes, query }) {
  function highlightQuery(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "ig");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span
          key={i}
          style={{
            fontWeight: "bold",
            background: "#ffe082",
            borderRadius: "3px",
            padding: "0 2px",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <>
      {recipes
        .reduce((acc, curr, idx) => {
          if (idx % 3 === 0) acc.push([curr]);
          else acc[acc.length - 1].push(curr);
          return acc;
        }, [])
        .map((cards, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
          >
            {cards.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  flex: 1,
                  border: "2px solid #ff9800",
                  padding: "1rem",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#fff3e0",
                  boxSizing: "border-box",
                  margin: "0 0.5rem",
                }}
              >
                <h3>{recipe.title}</h3>
                {recipe.image_url && (
                  <div
                    style={{
                      position: "relative",
                      width: "300px",
                      height: "300px",
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-4px",
                        left: "-4px",
                        width: "308px",
                        height: "308px",
                        borderRadius: "8px",
                        background:
                          "linear-gradient(135deg, rgba(255,140,0,0.75), rgba(255,255,255,0.75), rgba(255,140,0,0.75))",
                        zIndex: 1,
                      }}
                    />
                    <img
                      src={recipe.image_url}
                      alt={recipe.title}
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        position: "relative",
                        zIndex: 2,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.3rem",
                        boxSizing: "border-box",
                        zIndex: 3,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255,255,255,0.65)",
                          borderRadius: "6px",
                          padding: "0.2rem 0.5rem",
                          fontSize: "0.95rem",
                          marginRight: "0.3rem",
                          minWidth: "70px",
                          textAlign: "center",
                        }}
                      >
                        <strong>Prep:</strong> {recipe.prep_time} min
                      </div>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.65)",
                          borderRadius: "6px",
                          padding: "0.2rem 0.5rem",
                          fontSize: "0.95rem",
                          minWidth: "70px",
                          textAlign: "center",
                        }}
                      >
                        <strong>Cook:</strong> {recipe.cook_time} min
                      </div>
                    </div>
                  </div>
                )}
                <p>
                  <strong>Ingredients</strong>
                </p>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>a {highlightQuery(ingredient, query)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
    </>
  );
}
