import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./JjinMovie.module.css";


function JjinMovie({ id, coverImg, title, genres, summary }) {
    return (
        <div className={styles.movies}>
            <div className={styles.eachmovie}>             
                <img className={styles.cover} src={coverImg} alt={title} />
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <ul>
                    {genres && genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

JjinMovie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default JjinMovie;