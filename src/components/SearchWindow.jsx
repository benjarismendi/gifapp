import { useSearchList } from "../hooks/useSearchList"
import { GifTab, SearchBar } from "./index";


export const SearchWindow = () => {
    // const [searches, setSearches] = useState([]);
    // const [active, setActive] = useState();

    // const handleAddSearch = (value) => {
    //     if (searches.find((search) => search.toLowerCase() == value.toLowerCase())) {
    //         alert("Ya ha buscado ese termino");
    //       return;
    //     }
    //     setSearches([value, ...searches]);
    //   };
    
    //   const handleReload = () => {
    //       setSearches([])
    //       setActive()
    //   };
    
    //   const handleDeleteSearch = (value) => {
    //     const index = searches.findIndex((search) => search == value);
    //     setSearches([...searches.slice(0,index),
    //         ...searches.slice(index + 1, searches.length)]);
    //   };

    //   const handleSetActive = (e) => {
    //     setActive(e.target.value)
        
    // }

    const {searches, active} = useSearchList("Boca juniors", "add");

    const handleReset = () => {
        useSearchList();
    }

    
  return (
    <>
    {/* Search Bar */}
    <nav className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand">GIF SEARCH APP</a>
            <SearchBar addSearch={useSearchList} />
        </div>

    {/* Reset Button */}
    <button className="btn btn-danger btn-reset" onClick={handleReset}>Borrar todas las busquedas</button>
    </nav>
    <p>{active}</p>

    {/* Pestañas */}
    <ul className="nav nav-tabs" id="myTab" role="tablist">
        {/* {
        searches.map((search) => {
            const target = "#" + search;

            let classNames = "nav-link"
            if (active == search) {
                classNames += " active"
            }
            const id = search + "-tab"
            const selected = active == search ? "true" : "false";

            return <li className={classNames} role="presentation">
                <button className="nav-link"
                id={id} data-bs-toggle="tab" data-bs-target={target} type="button" role="tab" aria-controls={search} aria-selected={selected} onClick={() => useSearchList(search, set)} value={search}>{search}</button>
            </li>
        })
        } */}
    </ul>

    {/* Active tab */}
    {
        active ? <GifTab search={active} deleteSearch={useSearchList}/> : <h1>Aqui veras los resultados</h1>
    }

    </>
  )
}
