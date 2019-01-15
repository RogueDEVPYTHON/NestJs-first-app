import { Injectable } from "@nestjs/common";
import { Admin } from './interface/admin.interface';

@Injectable()
export class AdminService {
    private readonly admins: Admin[] = [];

    create(admin: Admin){
        this.admins.push(admin);
    }
    findAll(): Admin[]{
        return this.admins;
    }
}