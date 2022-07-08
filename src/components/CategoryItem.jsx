export const CategoryItem = ({ name, featured, addSearch }) => {
  const style = {
    backgroundImage: "url(" + featured + ")",
  };

  const handleAddSearch = () => {
    addSearch(name);
  };
  return (
    <>
      <div className="category-item w-100" style={style}>
        <div className="blur">
          <a className="category-link" type="button" onClick={handleAddSearch}>
            {name}
          </a>
        </div>
      </div>
    </>
  );
};
