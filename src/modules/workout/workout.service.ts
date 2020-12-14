import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Workout } from './schemas/workout.schema';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectModel(Workout.name) private workoutModel: Model<Workout>,
    ) {
    }

    async findAll(): Promise<Workout[]> {
        return this.workoutModel.find().exec();
    }

    async findOne(workoutId: string): Promise<Workout> {
        return this.workoutModel.findById(workoutId);
    }

    async create(workout: any): Promise<Workout> {
        const createdCat = new this.workoutModel(workout);
        return createdCat.save();
    }
}
