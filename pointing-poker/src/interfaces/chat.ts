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
export interface MessageState {
    messages:IMessage[],
    error: null | string,
}
export enum MessageActionTypes {
    FETCH_MESSAGES = 'FETCH_MESSAGES',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR',
}
interface FetchMessagesAction {
    type: MessageActionTypes.FETCH_MESSAGES,
  }
  interface FetchMessagesSuccessAction {
    type: MessageActionTypes.FETCH_MESSAGES_SUCCESS,
    payload:IMessage[],
  }
  interface FetchMessagesErrorAction {
    type: MessageActionTypes.FETCH_MESSAGES_ERROR,
    payload: string
  }
  export type MessageAction =
    FetchMessagesAction
    | FetchMessagesErrorAction
    | FetchMessagesSuccessAction;
