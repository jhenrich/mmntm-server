import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercise } from './schemas/exercise.schema';

@Injectable()
export class ExerciseService {
    constructor(
        @InjectModel(Exercise.name) private exerciseModel: Model<Exercise>,
    ) { }

    async findAll(): Promise<Exercise[]> {
        return this.exerciseModel.find().exec();
    }

    async findOne(exerciseId: string): Promise<Exercise> {
        return this.exerciseModel.findById(exerciseId);
    }

    async deleteOne(exerciseId: string): Promise<Exercise> {
        return this.exerciseModel.findByIdAndDelete(exerciseId);
    }

    async create(exercise: any): Promise<Exercise> {
        return this.exerciseModel.create(exercise);
    }

    async update(exercise: Exercise): Promise<Exercise> {
        return this.exerciseModel.findByIdAndUpdate(exercise._id, exercise);
    }
}
