import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function JjinMovie({ coverImg, title, genres, summary }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres && genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

JjinMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default JjinMovie;