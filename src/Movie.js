import { useEffect, useState } from 'react';

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies);
    // 같은거!
    // useEffect(() => {
    //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`).then((response) => response.json()).then((json) => {
    //     });
    // }, []);
    return (
        <div>{loading ? <h1>Loading...</h1> : movies.map()}</div>
    );
}

export default Movie;