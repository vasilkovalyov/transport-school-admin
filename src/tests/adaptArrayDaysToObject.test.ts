import { adaptArrayDaysToObject } from '../pages/Admin/Concepts/LessonSchedule/LessonSchedule.utils';

describe('AdaptObjectDaysToArray', () => {
  it('1', () => {
    const result = adaptArrayDaysToObject([0, 2, 5]);
    expect(result).toEqual({ 0: true, 2: true, 5: true });
  });
  it('2', () => {
    const result = adaptArrayDaysToObject([0, 5]);
    expect(result).toEqual({ 0: true, 5: true });
  });
  it('3', () => {
    const result = adaptArrayDaysToObject([]);
    expect(result).toEqual({});
  });
});
