import {
    Controller,

    Get
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExerciseService } from './exercise.service';

@ApiTags('exercise')
@Controller('exercise')
export class ExerciseController {
    constructor(private exerciseService: ExerciseService) { }

    @Get()
    findAll(): Promise<any> {
        return this.exerciseService.findAll();
    }
}
