import React from 'react';
import './timer.scss';
import '@fontsource/ruda';
import { Card, FormControlLabel, Input } from '@material-ui/core';
import { Height } from '@material-ui/icons';
export const Timer: React.FC =()=> {
    return(<Card className="timer">
        <FormControlLabel
                label="minutes"
                className = "timer-minutes"
                control={
                <Input id="minutes" aria-describedby="minutes" value="2"
                    style = {{fontSize: "64px",
                            fontWeight: "bolder",
                            width: "50px",
                            margin: "0",
                            padding: "0"}}/>}
                labelPlacement=  "top"
                style={{fontSize: "12px", width: "50px", padding: "0"}}
            />
            <div className = "divider"><p>:</p></div>
        <FormControlLabel
            label="seconds"
            className= "timer-seconds"
            control={<Input id="seconds" aria-describedby="seconds" value="20"
                            style = {{fontSize: "64px",
                            fontWeight: "bolder",
                            width: "80px",
                            margin: "0",
                            padding: "0"}}/>}
            labelPlacement=  "top"
            style={{fontSize: "12px", width: "80px", padding: "0"}}
        />
    </Card>)
}