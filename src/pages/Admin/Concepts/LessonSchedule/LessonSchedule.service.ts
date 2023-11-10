import { AxiosPromise } from 'axios';
import api from '@/src/api/axios';
import { StudentType } from '@/src/types/student';
import { LessonEditProps, LessonType } from '@/src/types/lesson';

enum EndpointLessonScheduleEnum {
  CREATE = 'lesson-schedule-create',
  UPDATE = 'lesson-schedule-update',
  DELETE = 'lesson-schedule-delete',
  DELETE_STUDENT = 'lesson-schedule-student',
  GET_POSTS = 'lesson-schedules',
  GET_STUDENTS_FROM_LESSON = 'lesson-schedule-students',
}

class LessonScheduleService {
  async create(params: LessonEditProps): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointLessonScheduleEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(
    params: LessonEditProps & { _id: string }
  ): AxiosPromise<{ message: string }> {
    const response = await api.patch(EndpointLessonScheduleEnum.UPDATE, {
      ...params,
    });
    return response;
  }

  async delete(id: string): AxiosPromise<{ message: string }> {
    const response = await api.delete(
      `${EndpointLessonScheduleEnum.DELETE}/${id}`
    );
    return response;
  }

  async deleteStudent(isLesson: string, idStudent: string) {
    const response = await api.delete(
      `${EndpointLessonScheduleEnum.DELETE_STUDENT}`,
      {
        params: {
          id_lesson: isLesson,
          id_student: idStudent,
        },
      }
    );
    return response;
  }

  async getPosts(): AxiosPromise<LessonType[]> {
    const response = await api.get(EndpointLessonScheduleEnum.GET_POSTS);
    return response;
  }

  async getPost(id: string): AxiosPromise<LessonType> {
    const response = await api.get(
      `${EndpointLessonScheduleEnum.GET_POSTS}/${id}`
    );
    return response;
  }

  async getStudentsFromLesson(id: string): AxiosPromise<StudentType[]> {
    const response = await api.get(
      `${EndpointLessonScheduleEnum.GET_STUDENTS_FROM_LESSON}/${id}`
    );
    return response;
  }
}

export default LessonScheduleService;
