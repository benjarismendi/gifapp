export const CategoryItem = ( {name, featured, addSearch} ) => {

  const style = {
    backgroundImage: "url(" + featured + ")"
  }

  const handleAddSearch = () => {
    addSearch(name)
  }
  return (
    <>
      <div className="category-item" style={style} >
        <a type="button" onClick={handleAddSearch} className="category-title">{name}</a>
      </div>
        
    </>
  )
}
