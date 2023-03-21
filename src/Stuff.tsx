import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Stuff() {
const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count+1)
}
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Hello World</Button>
      <Typography variant="h1" gutterBottom>
        {count}
      </Typography>
    </div>
  );
}