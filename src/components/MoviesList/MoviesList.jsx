import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query = '' }) => {
  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = movies.filter(movie => {
    const title = movie.title.toLowerCase().trim();
    const description = movie.description.toLowerCase().trim();

    if (!normalizedQuery) return true;

    const exactMatchTitle = title === normalizedQuery;
    const partiaMatchDescription = description.includes(normalizedQuery);

    return exactMatchTitle || partiaMatchDescription;
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
