import React from 'react';
import Calculator from './Calculator';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Calculator App Using Hooks
      </Typography>
      <Calculator />
    </Container>
  );
}

export default App;
