import { useEffect, useState } from "react";

export const useSearchList = ( value, operation ) => {

    const [searches, setSearches] = useState(["Dragon Ball", "Pikachu"]);
    const [active, setActive] = useState("Dragon Ball");

    const handleAddSearch = () => {
      if (searches.find((search) => search.toLowerCase() == value.toLowerCase())) {
          alert("Ya ha buscado ese termino");
        return;
      }
      setSearches([value, ...searches]);
      setActive(searches[0])
    };
  
    const handleReload = () => {
        setSearches([])
        setActive()
    };
  
    const handleDeleteSearch = () => {
      const index = searches.findIndex((search) => search == value);
      setSearches([...searches.slice(0,index),
          ...searches.slice(index + 1, searches.length)]);
      setActive(searches.length > 1 ? searches[index] : undefined)
    };

    const handleSetActive = () => {
      setActive(value)
      
  }

  useEffect(() => {
    switch (operation) {
      case "add":
        handleAddSearch();
        break;
        case "erase":
          handleDeleteSearch();
          break;
          case "set":
            handleSetActive();
            break;
          default:
            handleReload();
            break;
    }
    console.log("List of searches:" + searches)
    console.log("Active:" + active)
  }, [])
  

  return (
    searches,
    active
  )
}
