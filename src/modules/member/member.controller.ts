import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MemberService } from './member.service';
import { Member } from './schemas/member.schema';
import { MemberDto } from './member.dto';

@ApiTags('member')
@Controller('member')
export class MemberController {
    constructor(private memberService: MemberService) { }

    @Get()
    findAll(): Promise<any> {
        return this.memberService.findAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The found member',
        type: Member,
    })
    findOne(@Param('id') id: string): Promise<Member> {
        return this.memberService.findOne(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<Member> {
        return this.memberService.deleteOne(id);
    }

    @Put()
    create(@Body() member: MemberDto): Promise<Member> {
        return this.memberService.create(member);
    }
}
