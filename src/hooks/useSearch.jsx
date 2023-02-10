import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true)
  
  
    useEffect(() => {
  
      if (isFirstInput.current) {
        isFirstInput.current = search === ""
        return;
      }
  
      if (search === "") {
        setError("El campo esta vacio")
        return;
      }
  
      if (search.length < 3) {
        setError("El nombre de la pelicula debe tener mas de 3 caracteres")
        return;
      }
  
      setError(null);
  
    }, [search])
  
    return { search, setSearch, error }
  }