import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { CreateAdminDto } from './create-admin.dto';
import { AdminService } from '/admin.service';

@Controller('admin')
export class AdminController{
    @Post()
    async create(@Body() createdto: CreateAdminDto){
        return 'This action return create Admin';
    }
    @Get()
    FindAll(@Req() request){
        return 'This action return Admin page';
    }
    @Get(':id')
    FindOne(@Param('id') id){
        return 'This action return one of the admin'
    }
}