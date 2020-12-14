import { Test } from '@nestjs/testing';
import { ExerciseService } from '../../../../modules/exercise/exercise.service';
import { ExerciseController } from '../../../../modules/exercise/exercise.controller';
import { ExerciseDTO } from '../../../../modules/exercise/exercise.dto';

const testExercise1Name = 'Test Exercise 1';
const testExercise1Description = 'Test Exercise 1';
const testExercise1Type = 1;

describe('ExerciseController', () => {
  let service: ExerciseService;
  let controller: ExerciseController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ExerciseController],
      providers: [{
        provide: ExerciseService,
        useValue: {
          findAll: jest.fn().mockResolvedValue([
            { name: 'Test Exercise 1', description: 'Test Exercise Description 1', type: 3 },
            { name: 'Test Exercise 2', breed: 'Test Exercise Description 2', type: 2 },
          ]),
          findOne: jest.fn().mockImplementation((id: string) => Promise.resolve({
            name: testExercise1Name,
            description: testExercise1Description,
            type: testExercise1Type,
            _id: id,
          })),
          create: jest
            .fn()
            .mockImplementation((exercise: ExerciseDTO) =>
              Promise.resolve({ _id: 'a uuid', ...exercise }),
            ),
          update: jest
            .fn()
            .mockImplementation((exercise: ExerciseDTO) =>
              Promise.resolve({ _id: 'a uuid', ...exercise }),
            ),
          deleteOne: jest.fn().mockResolvedValue({
            name: 'Test Exercise 1',
            description: 'Test Exercise Description 1',
            type: 3,
          }),
        },
      },
      ],
    }).compile();

    controller = module.get<ExerciseController>(ExerciseController);
    service = module.get<ExerciseService>(ExerciseService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of exercises', () => {
      expect(controller.findAll()).resolves.toEqual([
        { name: 'Test Exercise 1', description: 'Test Exercise Description 1', type: 3 },
        { name: 'Test Exercise 2', breed: 'Test Exercise Description 2', type: 2 },
      ]);
    });
  });

  describe('getById', () => {
    it('should get a single exercises', () => {
      expect(controller.findOne('exercise id')).resolves.toEqual(
        {
          _id: 'exercise id',
          name: testExercise1Name,
          description: testExercise1Description,
          type: testExercise1Type,
        },
      );
      expect(controller.findOne('exercise id 2')).resolves.toEqual(
        {
          _id: 'exercise id 2',
          name: testExercise1Name,
          description: testExercise1Description,
          type: testExercise1Type,
        },
      );
    });
  });

  describe('deleteExercise', () => {
    it('should return that it deleted a cat', () => {
      expect(controller.deleteOne('a uuid that exists')).resolves.toEqual({
        name: 'Test Exercise 1',
        description: 'Test Exercise Description 1',
        type: 3,
      });
    });
  });
});
