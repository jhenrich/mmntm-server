import { ApiProperty } from '@nestjs/swagger';

export class WorkoutRoundExerciseDetails {
  @ApiProperty()
  weight?: number;
  @ApiProperty()
  reps?: number;
  @ApiProperty()
  distance?: number;
}

export class WorkoutRoundExercise {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: number;
  @ApiProperty()
  details: WorkoutRoundExerciseDetails;
}

export class WorkoutRound {
  @ApiProperty({ type: [WorkoutRoundExercise] })
  exercises: WorkoutRoundExercise[];
}

