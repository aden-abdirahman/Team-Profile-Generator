const Employee = require('../team/employee')

describe('Employee Class', () => {
    describe('Initialization', () => {
        const employee = new Employee('Abdirahman', 777)
        it('Should create an object with an id and name', () => {

            expect(employee.name).toEqual('Abdirahman');
            expect(employee.id).toEqual(777);

        });
        it("Should return the Employee name when requested", () => {
            expect(employee.getName()).toBe('Abdirahman');
          });
        
          it("Should return the Employee id when requested", () => {
            expect(employee.getId()).toBe(777);
          });
    });
});