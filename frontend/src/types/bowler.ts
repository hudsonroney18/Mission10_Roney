export type bowler = {
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit?: string | null; // Optional field, can be string or null
  bowlerLastName: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  bowlerScores: any[]; // You can change 'any' to a specific type if you know the structure of 'bowlerScores'
  team: string | null; // Assuming 'team' is either a string or null
};
