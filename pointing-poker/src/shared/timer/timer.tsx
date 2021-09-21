import React from 'react';
import './timer.scss';
import '@fontsource/ruda';
import { Card, FormControlLabel, Input } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/hooks';
import { ScramInfoActionTypes } from '../../interfaces/IScramInfo';
export const Timer: React.FC =()=> {
    const dispatch = useDispatch();
    const gameSettings = useTypedSelector(state => state.gameSettings);
    return(<Card className="timer">
        <FormControlLabel
                label="minutes"
                className = "timer-minutes"
                control={
                <Input id="minutes" aria-describedby="minutes" value={gameSettings.roundTimeMinutes}
                    style = {{fontSize: "64px",
                            fontWeight: "bolder",
                            width: "50px",
                            margin: "0",
                            padding: "0"}}
                            onChange = {(e)=>{
                                dispatch({type: ScramInfoActionTypes.SET_ROUND_TIME_MINUTES, 
                                  payload: e.target.value})
                              }}/>}
                labelPlacement=  "top"
                style={{fontSize: "12px", width: "50px", padding: "0"}}
            />
            <div className = "divider"><p>:</p></div>
        <FormControlLabel
            label="seconds"
            className= "timer-seconds"
            control={<Input id="seconds" aria-describedby="seconds" value={gameSettings.roundTimeSeconds}
                            style = {{fontSize: "64px",
                            fontWeight: "bolder",
                            width: "80px",
                            margin: "0",
                            padding: "0"}}
                            onChange = {(e)=>{
                                dispatch({type: ScramInfoActionTypes.SET_ROUND_TIME_SECONDS, 
                                  payload: e.target.value})
                              }}/>}
            labelPlacement=  "top"
            style={{fontSize: "12px", width: "80px", padding: "0"}}
        />
    </Card>)
}