export interface GameProps {
      players: {
        id: number;
        avatar: string;
        name: string;
        position: string;
        isBlocked: boolean;
        isObserver: boolean;
        card: number;
      }[];
      issue: {
        id: string;
        title: string;
        link: string;
        priority: string;
      }
  }