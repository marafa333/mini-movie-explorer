import { Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const MotionBox = motion(Box);

const MovieModal = ({ open, handleClose, movie }) => {
    if (!movie) return null;

    return (
        <Modal open={open} onClose={handleClose}>
            <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                sx={{
                    position: 'fixed',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '80%', sm: 400 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    m:'auto',
                    p: 4,
                    zIndex: 10,
                    '& > .modal-content': {
                        maxWidth: 400,
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 3,
                        outline: 'none',
                        wordBreak: 'break-word',
                    }
                }}
            >
                <Box className="modal-content">

                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant='h6' mb={2}>
                        {movie.title}
                    </Typography>
                    <Typography variant='body1' mb={2}>
                        {movie.overview || "No description availabel."}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Rating: {movie.vote_average}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Genre: {movie.genre_ids?.map(id => genreMap[id]).join(", ") || "N/A"}
                    </Typography>
                </Box>
            </MotionBox>
        </Modal>
    )
}

export default MovieModal
