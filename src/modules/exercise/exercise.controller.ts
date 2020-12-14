import {
    Body,
    Controller,

    Delete,

    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExerciseService } from './exercise.service';
import { Exercise } from './schemas/exercise.schema';
import { ExerciseDTO } from './exercise.dto';

@ApiTags('exercise')
@Controller('exercise')
export class ExerciseController {
    constructor(private exerciseService: ExerciseService) { }

    @Get()
    findAll(): Promise<any> {
        return this.exerciseService.findAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The found exercise',
        type: Exercise,
    })
    findOne(@Param('id') id: string): Promise<Exercise> {
        return this.exerciseService.findOne(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<Exercise> {
        return this.exerciseService.deleteOne(id);
    }

    @Put()
    create(@Body() exercise: any): Promise<Exercise> {
        return this.exerciseService.create(exercise);
    }

    @Post()
    update(@Body() exercise: ExerciseDTO): Promise<Exercise> {
        return this.exerciseService.update(exercise);
    }
}
