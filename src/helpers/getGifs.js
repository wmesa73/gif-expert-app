
export const getGifs = async(category)=>{
    // const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=kenEIvLEd7dtdbvW46SfVpTo8dEuK2MT`;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kenEIvLEd7dtdbvW46SfVpTo8dEuK2MT`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            //el signo de interrogacion es para que lo utilice solo si trae la imagen
            url: img.images?.downsized_medium.url
        }
    })
    //como es async no devuelve los gifs, sino una promesa.
    return gifs;

}