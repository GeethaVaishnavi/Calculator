import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <TextField
        label="Input"
        value={input}
        fullWidth
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        label="Result"
        value={result}
        fullWidth
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <Box mt={2}>
        <Grid container spacing={1}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((char) => (
            <Grid item xs={3} key={char}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => (char === '=' ? handleCalculate() : handleClick(char))}
              >
                {char}
              </Button>
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" fullWidth onClick={handleClear}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Calculator;
