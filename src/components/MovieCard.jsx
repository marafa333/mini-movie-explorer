import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
const MovieCard = ({ movie, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <Card onClick={onClick} sx={{ cursor: 'pointer', height: '100%' }}>
                <CardMedia
                    component='img'
                    height='300'
                    image={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/300x450?text=No+Image"
                    }
                    alt={movie.title}
                />
                <CardContent>
                    <Typography variant='h6' noWrap>
                        {movie.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {movie.release_date?.split("-")[0] || "N/A"}
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default MovieCard