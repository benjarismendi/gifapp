export const getCategories = async () => {

    const API_KEY = 'qX40XdVsBBQ8NJqo7yhe108Xblr4GNoA';

    const url = `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}&lang=es`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    console.info(data)

    const categories = data.map(category => (
        {
            id: category.name_encoded,
            name: category.name,
            featured: category.gif.images.fixed_width.url
        }
    ));

  return categories;
}
