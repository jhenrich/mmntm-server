import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersController } from './member.controller';
import { MemberService } from './member.service';
import { Member, MemberSchema } from './schemas/member.schema';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }]),
    ],
    controllers: [MembersController],
    providers: [MemberService],
    exports: [MemberService],
})
export class MemberModule {
}
