import { IScramInfo, ScramInfoAction, ScramInfoActionTypes } from "../../interfaces/IScramInfo"
import { CardValue } from "../../pages/lobby/scrumMaster/addCardValue/cardValue"

const defaultSettings: IScramInfo ={
    master: {
      id: '',
      avatar: '',
      name: 'Jhon',
      lastName: 'Doe',
      position: 'no position',
      isObserver: true,
    },
    lobbyLink: "",
    members: [],
    issues:[],
    scramIsPlayer: false,
    changingCardInRoundEnd: false,
    isTimerNeed: false,
    scoreType: "story point",
    scoreTypeShort: "SP",
    roundTimeMinutes: 2,
    roundTimeSeconds: 20,
    cardValues:["2", "4", "8"]
}
export const gameSettingsReducer =(state = defaultSettings, action: ScramInfoAction) =>{
    switch(action.type){
        case ScramInfoActionTypes.ADD_CARD_VALUE:
            return {...state, cardValues: state.cardValues.concat("")}
        case ScramInfoActionTypes.EDIT_CARD_VALUE:
            return {...state, 
        cardValues: state.cardValues.map((cardValue, index) => {
          if (index !== action.id) {
            return cardValue
          }
          return action.text
        })}
        case ScramInfoActionTypes.ADD_ISSUE:
            return {...state, issues: state.issues.concat(action.payload) }
        case ScramInfoActionTypes.SET_CHANGING_CARD_IN_ROUND_END:
            return {...state, changingCardInRoundEnd: action.payload}
        case ScramInfoActionTypes.SET_IS_TIMER_NEED:
            return {...state, isTimerNeed: action.payload}
        case ScramInfoActionTypes.SET_SCORE_TYPE:
            return {...state, scoreType: action.payload}
        case ScramInfoActionTypes.SET_SCORE_TYPE_SHORT:
            return {...state, scoreTypeShort: action.payload}
        case ScramInfoActionTypes.SET_SCRAM_IS_PLAYER:
            return {...state, scramIsPlayer: action.payload}
        case ScramInfoActionTypes.SET_ROUND_TIME_MINUTES:
            return {...state, roundTimeMinutes: action.payload}
        case ScramInfoActionTypes.SET_ROUND_TIME_SECONDS:
            return {...state, roundTimeSeconds: action.payload}
        default:
            return {...state}
    
    }

  }