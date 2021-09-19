import { IUser } from "../shared/membersList/membersList";
export interface IIssue{
    id: string,
    text: string
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