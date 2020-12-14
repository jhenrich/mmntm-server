import { Test } from '@nestjs/testing';
import { MemberService } from '../../../../modules/member/member.service';
import { MemberController } from '../../../../modules/member/member.controller';
import { MemberDto } from '../../../../modules/member/member.dto';

describe('MemberController', () => {
  let service: MemberService;
  let controller: MemberController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [MemberController],
      providers: [{
        provide: MemberService,
        useValue: {
          findAll: jest.fn().mockResolvedValue([mockedMember1, mockedMember2]),
          findOne: jest.fn().mockImplementation(() => Promise.resolve(mockedMember1)),
          create: jest.fn().mockImplementation((member: MemberDto) =>
            Promise.resolve({ _id: 'a uuid', ...member }),
          ),
          deleteOne: jest.fn().mockResolvedValue(deleteMemberDto),
        },
      },
      ],
    }).compile();

    controller = module.get<MemberController>(MemberController);
    service = module.get<MemberService>(MemberService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of exercises', () => {
      expect(controller.findAll()).resolves.toEqual([
        mockedMember1, mockedMember2,
      ]);
    });
  });

  describe('getById', () => {
    it('should get a single member', () => {
      expect(controller.findOne('member id')).resolves.toEqual(
        mockedMember1,
      );
    });
  });

  describe('createMember', () => {
    it('should create a member', () => {
      expect(controller.create(createMemberDto)).resolves.toEqual(createMemberDto);
    });
  });

  describe('deleteMember', () => {
    it('should return that it deleted a cat', () => {
      expect(controller.deleteOne('a uuid that exists')).resolves.toEqual(deleteMemberDto);
    });
  });
});

const mockedMember1 = {
  _id: 'id1',
  email: 'test@mail.de',
  firstName: 'test',
  lastName: 'user',
  password: 'password',
  dateOfBirth: new Date(),
  gender: 'm',
  houseNr: 0,
  state: 'Teststate',
  street: 'Teststrasse',
  zip: '64646',
  city: 'Teststadt',
};
const mockedMember2 = {
  _id: 'id2',
  email: 'test2@mail.de',
  firstName: 'test2',
  lastName: 'user2',
  password: 'password2',
  dateOfBirth: new Date(),
  gender: 'm',
  houseNr: 0,
  state: 'Teststate',
  street: 'Teststrasse',
  zip: '64646',
  city: 'Teststadt',
};
const createMemberDto: MemberDto = {
  _id: 'a uuid',
  email: 'test2@mail.de',
  firstName: 'test2',
  lastName: 'user2',
  password: 'password2',
  dateOfBirth: new Date(),
  gender: 'm',
  houseNr: 0,
  state: 'Teststate',
  street: 'Teststrasse',
  zip: '64646',
  city: 'Teststadt',
};
const deleteMemberDto: MemberDto = {
  _id: 'a uuid',
  email: 'test2@mail.de',
  firstName: 'test2',
  lastName: 'user2',
  password: 'password2',
  dateOfBirth: new Date(),
  gender: 'm',
  houseNr: 0,
  state: 'Teststate',
  street: 'Teststrasse',
  zip: '64646',
  city: 'Teststadt',
};
