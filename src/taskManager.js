const { addTask, getTasks, clearTasks } = require('../../src/taskManager');

describe('TaskManager Logic', () => {
  beforeEach(() => {
    clearTasks();
  });

  test('should add a new task successfully', () => {
    const task = addTask('Test Task 1');
    expect(task).toEqual({ id: 1, title: 'Test Task 1', completed: false });
  });

  test('should return all added tasks', () => {
    addTask('Task 1');
    addTask('Task 2');
    expect(getTasks().length).toBe(2);
  });

  test('should throw an error when adding a task without a title', () => {
    expect(() => addTask('')).toThrow('Task title is required');
  });
});