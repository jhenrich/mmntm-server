import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { Exercise, ExerciseSchema } from './schemas/exercise.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }]),
    ],
    controllers: [ExerciseController],
    providers: [ExerciseService],
    exports: [ExerciseService],
})
export class ExerciseModule {
}
