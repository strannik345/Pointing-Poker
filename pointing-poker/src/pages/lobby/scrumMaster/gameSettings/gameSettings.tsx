import React, { useEffect } from 'react';
import './../../lobby.scss';
import '@fontsource/ruda';
import './gameSettings';
import { Typography, Container, FormGroup, FormControlLabel, Switch,  Input, SwitchClassKey, SwitchProps, withStyles, Theme, createStyles, TextField, FormControl, FormLabel, RadioGroup, Radio, Grow, Fade } from '@material-ui/core';
import { Timer } from '../../../../shared/timer/timer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../store/hooks/hooks';
import { ScramInfoActionTypes } from '../../../../interfaces/IScramInfo';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
  }
  
interface Props extends SwitchProps {
classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 50,
      height: 26,
      padding: 3,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 3,
      '&$checked': {
        transform: 'translateX(22px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#60DABF',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 20,
      height: 20,
    },
    track: {
      borderRadius: 24 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const GameSettings: React.FC =()=> {
  const dispatch = useDispatch();
  const gameSettings = useTypedSelector(state => state.gameSettings);
  useEffect(()=>{
    if(gameSettings.votingSistem === 'fibonacci'){
      dispatch({type: ScramInfoActionTypes.SET_CARD_VALUE, payload: ["0", "1", "2", "3", "5"]});
    }
    if(gameSettings.votingSistem === 'powerOf2'){
      dispatch({type: ScramInfoActionTypes.SET_CARD_VALUE, payload: ["2", "4", "8", "16", "32"]});
    }
  }, [gameSettings.votingSistem]);
    return(<>
    <Container className = "settings-container" style={{width: '1000px', paddingTop: "100px"}}>
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Game settings:</Typography>
        </Container>
        <FormGroup className = "settings-form"
        style={{alignItems: "baseline",  width:"400px"}}>
            <FormControlLabel 
                control={<IOSSwitch color="primary" className="switch" name = "master-as-player"/>}
                label="Scram master as player:"
                labelPlacement=  "start"
                style={{display:"flex", justifyContent: "space-between",width:"380px"}}
                checked = {gameSettings.scramIsPlayer}
                onChange = {()=>{
                    dispatch({type: ScramInfoActionTypes.SET_SCRAM_IS_PLAYER, 
                        payload: !gameSettings.scramIsPlayer})}}
            />
            <FormControlLabel
                control={<IOSSwitch color="primary" className="switch" name = "changing-card"/>}
                label="Changing card in round end:"
                labelPlacement=  "start"
                style={{display:"flex", justifyContent: "space-between",width:"380px"}}
                checked = {gameSettings.changingCardInRoundEnd}
                onChange = {()=>{
                    dispatch({type: ScramInfoActionTypes.SET_CHANGING_CARD_IN_ROUND_END, 
                      payload: !gameSettings.changingCardInRoundEnd})}}
            />
            
            
            <FormControlLabel
                control={<Input id="score-type" aria-describedby="score type" 
                onChange = {(e)=>{
                  dispatch({type: ScramInfoActionTypes.SET_SCORE_TYPE, 
                    payload: e.target.value})
                }}/>}
                label="Score type:"
                labelPlacement=  "start"
                style={{display:"flex", justifyContent: "space-between",width:"380px"}}
                value = {gameSettings.scoreType}

            />
            <FormControlLabel
                label="Score type (short):"
                control={<Input id="short-score-type" aria-describedby="short-score type" 
                onChange = {(e)=>{
                  dispatch({type: ScramInfoActionTypes.SET_SCORE_TYPE_SHORT, 
                    payload: e.target.value})
                }}/>}
                labelPlacement=  "start"
                style={{display:"flex", justifyContent: "space-between",width:"380px"}}
            />
            <FormControlLabel
                control={<IOSSwitch color="primary" className="switch" name = "need-timer" />}
                label="Is timer needed:"
                labelPlacement=  "start"
                style={{display:"flex", justifyContent: "space-between",width:"380px"}}
                checked = {gameSettings.isTimerNeed}
                onChange = {()=>{
                  dispatch({type: ScramInfoActionTypes.SET_IS_TIMER_NEED, 
                    payload: !gameSettings.isTimerNeed})}}
            />
            {gameSettings.isTimerNeed && 
            <Grow in={gameSettings.isTimerNeed}>
              <FormControlLabel
                  label="Round time:"
                  control={<Timer/>}
                  labelPlacement=  "start"
                  style={{display:"flex", justifyContent: "space-between",width:"380px"}}
              />
            </Grow>
           }
            <FormControl component="fieldset" style={{marginTop: "13px", marginLeft: "13px" }}>
              <FormLabel component="legend">Voting sistem</FormLabel>
                <RadioGroup
                  aria-label="voting sistem"
                  name="controlled-radio-buttons-group"
                  value={gameSettings.votingSistem}
                  onChange={(e)=>{
                    dispatch({type: ScramInfoActionTypes.SET_VOTING_SISTEM, 
                      payload: e.target.value});
                    }}
                >
                  <FormControlLabel value="fibonacci" control={<Radio style={{color:"#60DABF"}}/>} label="fibonacci" />
                  <FormControlLabel value="powerOf2" control={<Radio style={{color:"#60DABF"}}/>} label="power of 2" />
                  <FormControlLabel value="custom" control={<Radio style={{color:"#60DABF"}}/>} label="create custom" />
                </RadioGroup>
            </FormControl>
            
            </FormGroup>
        </Container>
    </>)
}