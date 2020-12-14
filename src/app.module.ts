import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { WorkoutModule } from './modules/workout/workout.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/momentum'),
    ExerciseModule,
    WorkoutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
