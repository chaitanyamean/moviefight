
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6f9ad6ff',
            s: searchTerm
        }
    })

    if(response.data.Error) {
        return [];
    }
    return response.data.Search

}

const onInput = async event => {
    let moviesList = await fetchData(event.target.value);
    console.log(moviesList);

    for(let movie of moviesList) {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${movie.Poster}"/>
        <h1>${movie.Title}</h1>
        `
        document.querySelector('#target').appendChild(div);
    }
}

const input = document.querySelector('input');
let timerId;
input.addEventListener('input', debounce(onInput))


// called a debounce function and and return the a function