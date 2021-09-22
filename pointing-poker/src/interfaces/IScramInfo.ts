import { IUser } from "../shared/membersList/membersList";
export interface IIssue{
    id: string,
    title: string,
    link: string,
    priority: string
}

export interface IScramInfo{
    master: IUser,
    lobbyLink: string,
    members:IUser[],
    issues:IIssue[],
    scramIsPlayer: boolean,
    changingCardInRoundEnd: boolean,
    isTimerNeed: boolean,
    scoreType: string,
    scoreTypeShort: string,
    roundTimeMinutes: number,
    roundTimeSeconds: number,
    cardValues:string[]
}

export enum ScramInfoActionTypes {
    ADD_ISSUE = 'ADD_ISSUE',
    SET_SCRAM_IS_PLAYER = 'SET_SCRAM_IS_PLAYER',
    SET_CHANGING_CARD_IN_ROUND_END = 'SET_CHANGING_CARD_IN_ROUND_END',
    SET_IS_TIMER_NEED = 'SET_IS_TIME_NEED',
    SET_SCORE_TYPE = "SET_SCORE_TYPE",
    SET_SCORE_TYPE_SHORT = "SET_SCORE_TYPE_SHORT",
    SET_ROUND_TIME_MINUTES = "SET_ROUND_TIME_MINUTES",
    SET_ROUND_TIME_SECONDS = "SET_ROUND_TIME_SECONDS",
    ADD_CARD_VALUE = "ADD_CARD_VALUE",
    EDIT_CARD_VALUE = "EDIT_CARD_VALUE",
}
    interface AddIssueAction {
        type: ScramInfoActionTypes.ADD_ISSUE,
        payload:IIssue,
    }
    interface SetScramIsPlayer {
        type: ScramInfoActionTypes.SET_SCRAM_IS_PLAYER,
        payload: boolean,
    }
    interface SetChangingCardInRoundEnd {
        type: ScramInfoActionTypes.SET_CHANGING_CARD_IN_ROUND_END,
        payload: boolean,
    }
    interface SetIsTimeNeed {
        type: ScramInfoActionTypes.SET_IS_TIMER_NEED,
        payload: boolean,
    }
    interface SetScoreType {
        type: ScramInfoActionTypes.SET_SCORE_TYPE,
        payload: string,
    }
    interface SetScoreTypeShort {
        type: ScramInfoActionTypes.SET_SCORE_TYPE_SHORT,
        payload: string,
    }
    interface SetRoundTimeMinutes {
        type: ScramInfoActionTypes.SET_ROUND_TIME_MINUTES,
        payload: number
    }
    interface SetRoundTimeSeconds {
        type: ScramInfoActionTypes.SET_ROUND_TIME_SECONDS,
        payload: number
    }
    interface AddCardValue {
        type: ScramInfoActionTypes.ADD_CARD_VALUE,
        id: number,
        payload: string
    }
    interface EditCardValue {
        type: ScramInfoActionTypes.EDIT_CARD_VALUE,
        id: number,
        payload: string
    }

    export type ScramInfoAction =
        AddIssueAction |
        SetScramIsPlayer |
        SetChangingCardInRoundEnd |
        SetIsTimeNeed |
        SetRoundTimeMinutes |
        SetRoundTimeSeconds |
        SetScoreType |
        SetScoreTypeShort |
        EditCardValue |
        AddCardValue;
