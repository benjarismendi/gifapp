import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifTab = ({search, deleteSearch}) => {

  const {imagenes, loading} = useFetchGif(search);

  const handleDeleteSearch = () => {
    deleteSearch(search);
  }


  return (
    <>
      
        <button className="btn btn-danger" onClick={deleteSearch(search, del)}>Eliminar {search}</button>
          <div className="tab-pane fade show active" >
            {/* Desplegar Listado */}
            {
              loading ? <div className="spinner-border">
              <span className="visually-hidden">Loading...</span>
              </div> :
              imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
            }
          </div>
               
    </>
  )
}
