import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Workout } from './schemas/workout.schema';
import { WorkoutService } from './workout.service';

@ApiTags('workout')
@Controller('workout')
export class WorkoutController {
    constructor(private workoutService: WorkoutService) {
    }

    @Get()
    findAll(): Promise<any> {
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
    create(@Body() workout: any) {
        return this.workoutService.create(workout);
    }
}
