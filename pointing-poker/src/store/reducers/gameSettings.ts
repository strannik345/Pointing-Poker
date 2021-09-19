import { ScramInfoAction, ScramInfoActionTypes } from "../../interfaces/IScramInfo"

const defaultSettings ={
    master: {
      id: '',
      avatar: '',
      name: 'Jhon',
      lastName: 'Doe',
      position: 'no position',
      isBlocked: false,
      isObserver: true,
    },
    lobbyLink: "",
    members:[],
    issues:[],
    scramIsPlayer: false,
    changingCardInRoundEnd: false,
    isTimerNeed: false,
    scoreType: "story point",
    scoreTypeShort: "SP",
    roundTimeMinutes: 2,
    roundTimeSeconds: 20,
    cardValues:[""] 
}
export const gameSettingsReducer =(state = defaultSettings, action: ScramInfoAction) =>{
    switch(action.type){
        case ScramInfoActionTypes.ADD_CARD_VALUE:
            return {...state, cardValues: state.cardValues.concat(action.payload)}
        // case ScramInfoActionTypes.ADD_ISSUE:
        //     return {...state, issues: state.issues.concat(action.payload) }
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