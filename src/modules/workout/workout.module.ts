import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './schemas/workout.schema';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }]),
    ],
    controllers: [WorkoutController],
    providers: [WorkoutService],
    exports: [WorkoutService],
})
export class WorkoutModule {
}
