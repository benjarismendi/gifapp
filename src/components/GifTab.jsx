import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifTab = ({search, deleteSearch}) => {

  const {imagenes, loading} = useFetchGif(search);

  const handleDelete = (e) => {
    deleteSearch(e.target.value)
  }

  return (
    <>
        <button className="btn btn-danger" value={search} onClick={handleDelete}>Eliminar {search}</button>
        <div className="tab-panel" >
            {/* Desplegar Listado */}
            {
              loading ? 
              <div className="spinner-border"> </div> :
              imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
            }
        </div>
    </>
  )
}
