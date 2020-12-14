import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Workout } from './schemas/workout.schema';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDTO, WorkoutDto } from './workout.dto';

@ApiTags('workout')
@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {
  }

  @ApiOperation({ summary: 'Returns all workouts' })
  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found workout',
    type: Workout,
  })
  findOne(@Param('id') id: string): Promise<Workout> {
    return this.workoutService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new workout' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() workout: CreateWorkoutDTO): Promise<Workout> {
    return this.workoutService.create(workout);
  }
}
