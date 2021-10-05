import { Typography, TextField, IconButton, Paper, makeStyles, Theme, createStyles} from "@material-ui/core";
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { useState } from "react";
import { ICardValueProp } from "../../../../interfaces/ICardValueProp"
import { useTypedSelector } from "../../../../store/hooks/hooks";
import CreateIcon from '@material-ui/icons/Create';
import { ScramInfoActionTypes } from "../../../../interfaces/IScramInfo";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
        width:"80px",
        height: "120px",
    },
    checked: {
        backgroundColor:"rgba(96, 218, 191, 0.46)"
    },
}));
export const CardValue: React.FC<ICardValueProp>=(prop: ICardValueProp)=> {
    const { scoreTypeShort, issues} = useTypedSelector(state => state.gameSettings);
    const {socketUser} = useTypedSelector(state=> state.socket);
    const player = useTypedSelector(state => state.player);
    const {cardValue, index, isSmall, isGame, nextIssueClick, activeIssue} = {...prop};
    const [editMode, enableEditMode] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const params = useParams<any>();

    const cardClick = () =>{
        if (editMode) {
            enableEditMode(editMode => !editMode);
        } else {
            setIsChecked(true); 
            sendCardValue();
            setTimeout(()=> {
                nextIssueClick();
                setIsChecked(false);
            }, 500);
        } 
    }

    const sendCardValue = () => [
        socketUser.send(JSON.stringify({
            method: 'throw-card',
            id: params.id,
            msg: {player, issue: issues[activeIssue], cardValue}
        }))
      ]
    const hadleChange = (text: string) =>{
        dispatch({type: ScramInfoActionTypes.EDIT_CARD_VALUE, id: index, text}); 
    }
    return <div className = {`game-card `}>
                <Paper className = {`card ${isSmall && classes.small} ${isChecked && classes.checked}`} onClick = {() => cardClick()}> 
                {
                    editMode 
                    ? <TextField autoFocus = {true} value={cardValue} required type='text' 
                    style={{width: '40%'}}
                    onChange ={(e) => {hadleChange(e.target.value)}}/> 
                    : <span 
                    style={{width: '40%'}}> {cardValue} </span>
                }
                {
                    (!isSmall && !isGame) &&
                
                    <IconButton aria-label="edit" style={{marginLeft: "10px"}}>
                        <CreateIcon  onClick = {() => enableEditMode(editMode => !editMode)}/>
                    </IconButton>
                }
                    <Typography style={{ fontSize: (isSmall) ? 40 : 60,  marginLeft: "10px" }}
                    onClick = {() => {
                        (!isSmall && !isGame) && setIsBreak(isBreak => !isBreak)
                        }}>{!isBreak ? scoreTypeShort : <FreeBreakfastIcon style={{fontSize: (isSmall) ? 40 : 60, marginLeft: "10px" }}/> }
                    </Typography>
                
                
                </Paper>
            </div>
}