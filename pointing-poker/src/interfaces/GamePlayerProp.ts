export interface GamePlayerProp{
    id: string;
    issues: {
      id: string,
      title: string,
      link: string,
      priority: string
    }[];
    isTimerNeeded: boolean;
  }