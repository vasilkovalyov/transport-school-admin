import { AxiosPromise } from 'axios';
import { LessonScheduleProps, LessonScheduleEditableProps } from './components';
import api from '@/src/api/axios';

enum EndpointLessonScheduleEnum {
  CREATE = 'lesson-schedule-create',
  UPDATE = 'lesson-schedule-update',
  DELETE = 'lesson-schedule-delete',
  DELETE_STUDENT = 'lesson-schedule-student',
  GET_POSTS = 'lesson-schedules',
}

class LessonScheduleService {
  async create(
    params: LessonScheduleEditableProps
  ): AxiosPromise<{ message: string }> {
    const response = await api.post(EndpointLessonScheduleEnum.CREATE, {
      ...params,
    });
    return response;
  }

  async update(params: LessonScheduleProps): AxiosPromise<{ message: string }> {
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

  async getPosts(): AxiosPromise<LessonScheduleProps[]> {
    const response = await api.get(EndpointLessonScheduleEnum.GET_POSTS);
    return response;
  }

  async getPost(id: string): AxiosPromise<LessonScheduleProps> {
    const response = await api.get(
      `${EndpointLessonScheduleEnum.GET_POSTS}/${id}`
    );
    return response;
  }
}

export default LessonScheduleService;
