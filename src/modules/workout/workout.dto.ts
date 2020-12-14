import { WorkoutRound } from '../../models/workout.model';

export interface WorkoutDto {
  name?: string;
  description?: string;
  type?: string;
  timeCap?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CreateWorkoutDTO {
  name: string;
  description: string;
  type: string;
  timeCap: string;
  rounds: WorkoutRound[];
}
