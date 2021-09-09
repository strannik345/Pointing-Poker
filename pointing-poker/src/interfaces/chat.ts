export interface IMessage{
    id: number,
    user_id: number,
    text: string
}
export interface GET200_chat{
    messages:IMessage[];
}
export interface POST_chat{
    message: IMessage
}
export interface IUser{
    id: number,
    avatar: string,
    name: string,
    position: string,
    isBlocked: boolean
}
