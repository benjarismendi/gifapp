import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifTab = ({ search, deleteSearch, handleReload }) => {
  const { imagenes, loading } = useFetchGif(search);

  const handleDelete = (e) => {
    deleteSearch(e.target.value);
  };

  return (
    <>

      <button
        className="btn btn-danger w-100 m-1"
        value={search}
        onClick={handleDelete}
      >
        Eliminar {search}
      </button>

      {/* Reset Button */}
      {
        <button className="btn btn-danger btn-reset w-100 m-1 " onClick={handleReload}>
          Borrar todas las busquedas
        </button>
      }

      <div className="tab-panel p-1">
        {/* Desplegar Listado */}
        {loading ? (
          <div className="spinner-border"> </div>
        ) : (
          imagenes.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};
