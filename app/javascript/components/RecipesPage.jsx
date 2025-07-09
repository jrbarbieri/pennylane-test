import React, { useState, useEffect } from "react";
import SearchSidebar from "./SearchSidebar";
import RecipeCards from "./RecipeCards";
import Pagination from "./Pagination";
import { fetchRecipesService } from "./recipesService";
import QuickMenu from "./QuickMenu";
import Header from "./Header";
import EmptyState from "./EmptyState";

function getInitialParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    query: params.get("query") || null,
    page: parseInt(params.get("page")) || 1,
  };
}

export default function RecipesPage() {
  const initial = getInitialParams();
  const [query, setQuery] = useState(initial.query);
  const [page, setPage] = useState(initial.page);
  const [recipes, setRecipes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasSearched, setHasSearched] = useState(Boolean(initial.query));
  const [activeCategory, setActiveCategory] = useState("");

  const updateURL = (newQuery, newPage = 1) => {
    const params = new URLSearchParams();
    if (newQuery) params.set("query", newQuery);
    if (newPage > 1) params.set("page", newPage);

    const paramString = params.toString();
    const newUrl = paramString
      ? `${window.location.pathname}?${paramString}`
      : window.location.pathname;

    window.history.pushState({}, "", newUrl);
  };

  const fetchRecipes = (
    newQuery = query,
    newPage = 1,
    fromSearch = false,
    fromQuickMenu = false
  ) => {
    fetchRecipesService({ query: newQuery, page: newPage }).then((data) => {
      setQuery(newQuery);
      setPage(newPage);
      setRecipes(data.recipes || []);
      setTotalPages(data.total_pages || 1);
      setTotalCount(data.total_recipes || 0);
      if (fromSearch || fromQuickMenu) setHasSearched(true);
      if (fromQuickMenu) {
        setActiveCategory(newQuery);
      }
      updateURL(newQuery, newPage);
    });
  };

  useEffect(() => {
    fetchRecipes(query, page);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const { query, page } = getInitialParams();
      fetchRecipes(query, page);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <Header
        page={page}
        totalPages={totalPages}
        onPageChange={(p) => fetchRecipes(query, p)}
      />
      <div style={{ display: "flex", margin: "2rem" }}>
        <div
          style={{
            width: "250px",
            marginRight: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SearchSidebar
            query={query || ""}
            onSearch={(q) => {
              setActiveCategory("");
              fetchRecipes(q, 1, true);
            }}
            resultsCount={totalCount}
            hasSearched={hasSearched}
          />
          <QuickMenu
            onQuickSearch={(q) => {
              setActiveCategory(q);
              fetchRecipes(q, 1, false, true);
            }}
            activeCategory={activeCategory}
          />
        </div>
        <div style={{ flex: 1 }}>
          {recipes.length === 0 ? (
            <EmptyState />
          ) : (
            <RecipeCards recipes={recipes} query={query} />
          )}
        </div>
      </div>
    </>
  );
}
