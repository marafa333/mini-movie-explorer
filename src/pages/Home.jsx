import { Box, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import { fetchMovies } from '../api/tmdb';
import useDebounce from '../hooks/useDebounce';


const Home = () => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ["movies", search],
        queryFn: () => fetchMovies(search),
        enabled: !!debouncedSearch,
    });

    return (
        <>
            <Container sx={{ py: 4 }}>
                <TextField
                    label='Search movies...'
                    fullWidth
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value)} />

                {isLoading && (
                    <Box mt={4} textAlign='center'>
                        <CircularProgress />
                    </Box>
                )}

                {error && (
                    <Box mt={4} textAlign='center'>
                        <Typography color='error'>Something went wrong!</Typography>
                    </Box>
                )}

                <Grid container spacing={2} mt={2}>
                    {data?.results?.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <MovieCard
                                movie={movie}
                                onClick={() => {
                                    setSelectedMovie(movie);
                                    setModalOpen(true);
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>

                {selectedMovie && (
                    <MovieModal
                        open={modalOpen}
                        handleClose={() => setModalOpen(false)}
                        movie={selectedMovie}
                    />
                )}
            </Container>
        </>
    )
}

export default Home