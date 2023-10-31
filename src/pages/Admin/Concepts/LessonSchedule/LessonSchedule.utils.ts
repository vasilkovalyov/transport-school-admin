export function adaptObjectDaysToArray(
  object: Record<number, boolean>
): number[] {
  let array: number[] = [];
  for (let key in object) {
    if (object[key]) {
      array.push(parseInt(key));
    }
  }
  return array;
}

export function adaptArrayDaysToObject(
  days: number[]
): Record<number, boolean> {
  let object: Record<number, boolean> = {};
  days.forEach((day) => (object[day] = true));
  return object;
}
