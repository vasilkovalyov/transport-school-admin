import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { StudentType } from '@/src/types/student';

enum EndpointStudentEnum {
  GET_STUDENT = 'student',
  DELETE_STUDENT = 'student',
  GET_STUDENTS = 'students',
}

class StudentService {
  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(
      `${EndpointStudentEnum.DELETE_STUDENT}/${id}`
    );
    return response;
  }

  async getStudent(id: string): AxiosPromise<StudentType> {
    const response = await api.get(`${EndpointStudentEnum.GET_STUDENT}/${id}`);
    return response;
  }

  async getStudents(): AxiosPromise<StudentType[]> {
    const response = await api.get(EndpointStudentEnum.GET_STUDENTS);
    return response;
  }
}

export default StudentService;
