import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class studentDao {
    async createStudent(data: any) {
        return await prisma.student.create({ 
            data
         });
    }


    async getStudentById(id: string) {
        return await prisma.student.findUnique({
             where: { id } 
            });
    }

    async getAllStudents() {
        return await prisma.student.findMany();
    }

    async updateStudent(id: string, data: any) {
        return await prisma.student.update({
            where: { id },
            data
        });
    }

    async deleteStudent(id: string) {
        return await prisma.student.delete({
            where: { id }
        });
    }

    async getStudentByEmail(email: string) {
        return await prisma.student.findUnique({
            where: { email }
        });
    }

    async getStudentByName(name: string) {
        return await prisma.student.findUnique({
            where: { name }
        });
    }

    getStudentByDepartment(department: string) {
        return prisma.student.findMany({
            where: { department }
        });
    }

}   
