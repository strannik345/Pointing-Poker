export interface IMessage{
  id: number;
  user_id: number;
  text: string;
}
export interface GET200_chat{
  messages:IMessage[];
}
export interface POST_chat{
  message: IMessage;
}
export interface IUser{
  id: number;
  avatar: string;
  name: string;
  position: string;
  isBlocked: boolean;
  isObserver: boolean;
}

export interface Game {
  id: string;
  players: IUser[];
}

export interface Card {
  issue: {
    id: string,
    title: string,
    link: string,
    priority: string
  };
  players: {
    id: number;
    avatar: string;
    name: string;
    position: string;
    isBlocked: boolean;
    isObserver: boolean;
    card: number;
    }[];
}

export interface GameProps {
  id: string;
  cards: Card[];
}

export interface Issues{
  id: string;
  issues: {
    id: string,
    title: string,
    link: string,
    priority: string
  }[];
  isTimerNeeded: boolean;
}

export interface Votes {
  id: string;
  vote: {
    desision: boolean;
    player: IUser;
  }[];
}