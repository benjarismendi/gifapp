export const getTrending = async () => {
  
    const API_KEY = 'qX40XdVsBBQ8NJqo7yhe108Xblr4GNoA';

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${8}&offset=0&rating=g`;

    const resp = await fetch(url);

    const {data} = await resp.json();
  
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        fixed_height_still: img.images.fixed_height_still.url,
        fixed_height: img.images.fixed_height.url,
        original: img.images.original.url
    }))
  
    return gifs;
}
