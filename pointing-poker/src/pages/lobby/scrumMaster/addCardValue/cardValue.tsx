import { Typography, TextField, IconButton, Paper, makeStyles, Theme, createStyles} from "@material-ui/core";
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { useState } from "react";
import { ICardValueProp } from "../../../../interfaces/ICardValueProp"
import { useTypedSelector } from "../../../../store/hooks/hooks";
import CreateIcon from '@material-ui/icons/Create';
import { ScramInfoActionTypes } from "../../../../interfaces/IScramInfo";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
        width:"80px",
        height: "120px",
    }
}));
export const CardValue: React.FC<ICardValueProp>=(prop: ICardValueProp)=> {
    const { scoreTypeShort} = useTypedSelector(state => state.gameSettings);
    const {cardValue, index, isSmall} = {...prop};
    const [editMode, enableEditMode] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();
    const hadleChange = (text: string) =>{
        dispatch({type: ScramInfoActionTypes.EDIT_CARD_VALUE, id: index, text}); 
    }
    return <div className = {`game-card `}>
                <Paper className = {`card ${isSmall && classes.small}`} onClick = {() => editMode && enableEditMode(editMode => !editMode)}> 
                {
                    editMode 
                    ? <TextField autoFocus = {true} value={cardValue} required type='text' 
                    style={{width: '40%'}}
                    onChange ={(e) => {hadleChange(e.target.value)}}/> 
                    : <span 
                    style={{width: '40%'}}> {cardValue} </span>
                }
                {
                    !isSmall &&
                
                    <IconButton aria-label="edit" style={{marginLeft: "10px"}}>
                        <CreateIcon  onClick = {() => enableEditMode(editMode => !editMode)}/>
                    </IconButton>
                }
                    <Typography style={{ fontSize: (isSmall) ? 40 : 60,  marginLeft: "10px" }}
                    onClick = {() => {
                       !isSmall && setIsBreak(isBreak => !isBreak)
                        }}>{!isBreak ? scoreTypeShort : <FreeBreakfastIcon style={{fontSize: (isSmall) ? 40 : 60, marginLeft: "10px" }}/> }
                    </Typography>
                
                
                </Paper>
            </div>
}