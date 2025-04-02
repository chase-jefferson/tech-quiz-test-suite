import { Schema } from 'mongoose';

interface Quiz {
  id: string;
  maskedWord: string;
  guesses: string[];
  isCorrect: boolean;
  isComplete: boolean;
  isWinner: boolean;
  solution: string;
  guessesRemaining: number;
}

interface Responses {
  [key: string]: Quiz;
}

declare module "*.json" {
  const value: any;
  export default value;
}

export type { Quiz, Responses };
