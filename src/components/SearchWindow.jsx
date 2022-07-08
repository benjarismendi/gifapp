import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useSearchList } from "../hooks/useSearchList"
import { GifTab, SearchBar, CategoryGrid, TrendingTab } from "./index";


export const SearchWindow = () => {
    const [searches, setSearches] = useState([]);
    const [active, setActive] = useState();

    const handleAddSearch = (value) => {
        if (searches.find((search) => search.toLowerCase() == value.toLowerCase())) {
            alert("Ya ha buscado ese termino");
          return;
        }
        setSearches([value, ...searches]);
        setActive(value)
      };
    
      const handleReload = () => {
          setActive()
          setSearches([])
      };
    
      const handleDeleteSearch = (value) => {
        const index = searches.findIndex((search) => search == value);
        setSearches([...searches.slice(0, index),
          ...searches.slice(index + 1, searches.length)]);
        setActive(() => {
            if (index > 0) {
                return searches[index - 1]
            }
            if (searches.length > 0) {
                return searches[index + 1]
            }
        })
      };

      const handleSetActive = (e) => {
        setActive(e.target.value)
    }
    
  return (
    <>
    {/* Category grid */}
    <div className="categoryGrid">
        <CategoryGrid className addSearch={handleAddSearch}/>
        </div>
    {/* Search Bar */}
    <nav className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand">GIF SEARCH APP</a>
            <SearchBar addSearch={handleAddSearch} />
        </div>

    {/* Reset Button */}
    {
        <button className="btn btn-danger btn-reset" onClick={handleReload}>Borrar todas las busquedas</button>
    }
    
    </nav>
    
    <div className="results">
    <ul className="nav nav-tabs">
    {/* Pestañas */}
        {
        searches.length > 0 ?
            searches.map((search) => {
            let classNames = "nav-link"
            if (active == search) {
                classNames += " active"
            }
            return <li key={search} className={classNames} >
                <button className="nav-link"
                type="button" onClick={handleSetActive} value={search}>{search}</button>
            </li>
        }) :
        <li key="trending" className="nav-link active" >
        <button className="nav-link" type="button" value="trending">trending</button>
        </li>
        }
    </ul>

    {/* Active tab */}
    {
        searches.length > 0 ? <GifTab search={active} deleteSearch={handleDeleteSearch}/> : <TrendingTab/>
    }
    </div>
    </>


  )
}
