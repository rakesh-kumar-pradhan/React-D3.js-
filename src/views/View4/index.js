import React, { Component, useState } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

const status = [
    {
      value: 'today',
      label: 'Today'
    },
    {
      value: 'month',
      label: 'This Month'
    },
    {
      value: 'year',
      label: 'This Year'
    }
  ];


const View4=(props)=>  {
    const {user} = props;
    const width = 1100;
    const height = 250;
    const [value, setValue] = useState('today');


        return (
            <div id='view4' className='pane' >
            <div className='header'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
              <Typography variant="h6">Checking account</Typography>
                </Grid>

                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
          </Grid>
            </Grid>
            </Grid>
            </div>
              <div></div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <LineChart data={user} width={width} height={height}/>
                </div>
            </div>
        )
    }

export default  View4;