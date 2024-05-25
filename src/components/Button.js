import { CircularProgress, Button as MatButton, makeStyles } from '@mui/material';

export const Button = ({ loading, text, ...props }) => {
  return (
    <MatButton variant="contained" {...props}>
      {loading ? (
        <span className="white items-center justify-center flex gap-2">
          <CircularProgress sx={{ color: 'white' }} color="info" size={20} />
          <span> Loading... </span>
        </span>
      ) : (
        <span> {text}</span>
      )}
    </MatButton>
  );
};
