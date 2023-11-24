import React, { Component, useState } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

const View4=(props)=>  {
    const {user} = props;
    const width = 780;
    const height = 250;

        return (
            <div id='view4' className='pane' >
                <div 
                // style={{ overflowX: 'scroll',overflowY:'hidden' }}
                >
                    <LineChart data={user} width={width} height={height}/>
                </div>
            </div>
        )
    }

export default  View4;