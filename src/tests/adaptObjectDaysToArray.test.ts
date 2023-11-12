import { adaptObjectDaysToArray } from '../pages/Admin/Concepts/LessonSchedule/LessonSchedule.utils';

describe('AdaptObjectDaysToArray', () => {
  it('1', () => {
    const result = adaptObjectDaysToArray({ 0: true, 2: true, 5: true });
    expect(result).toEqual([0, 2, 5]);
  });
  it('2', () => {
    const result = adaptObjectDaysToArray({ 0: true, 5: true });
    expect(result).toEqual([0, 5]);
  });
  it('3', () => {
    const result = adaptObjectDaysToArray({});
    expect(result).toEqual([]);
  });
});
