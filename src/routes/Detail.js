import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import JjinMovie from '../components/JjinMovie';
function Detail() {
    const [movie, setMovie] = useState('');
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);

    return (
        <div>
            <h1>Detail</h1>
            <JjinMovie                            
                key={id}
                id={id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} />
        </div>
    );
}

export default Detail;