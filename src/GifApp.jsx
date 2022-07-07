import React, { useState } from "react";

import { CategoryGrid, TrendingTab, SearchWindow } from "./components";

export const GifApp = () => {

  return (
    <div id="pagina" className="">

      {/* Header?? */}

      {/* Categories */}
      <div className="categories">
        <CategoryGrid />
      </div>

      {/* Search window */}
      <div className="results">
        <SearchWindow />
      </div>
        
      {/* Trending */}
      <div className="trending">
        <TrendingTab />
      </div>
        
    </div>
    
  );
};
