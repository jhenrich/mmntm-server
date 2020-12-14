import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from './schemas/member.schema';

@Injectable()
export class MemberService {
    constructor(@InjectModel(Member.name) private memberModel: Model<Member>) { }

    async findAll(): Promise<Member[]> {
        return this.memberModel.find().exec();
    }

    async findOne(memberId: string): Promise<Member> {
        return this.memberModel.findById(memberId);
    }

    async findByEmail(email: string): Promise<Member> {
        return this.memberModel.findOne({ email: email });
    }

    async deleteOne(memberId: string): Promise<Member> {
        return this.memberModel.findByIdAndDelete(memberId);
    }

    async create(member: any): Promise<Member> {
        return this.memberModel.create({
            firstName: member.firstName,
            lastName: member.lastName,
            dateOfBirth: new Date(member.dateOfBirth),
            email: member.email,
            street: member.street,
            houseNr: member.houseNumber,
            zip: member.zip,
            state: member.state,
            gender: member.gender,
            city: member.city,
            password: 'johanneshenrich',
        });
    }
}
