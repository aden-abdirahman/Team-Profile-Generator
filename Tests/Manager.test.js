const Manager = require('../team/manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        const manager = new Manager('Jake', 777)
        it('Should create an object with an id and name', () => {

            expect(manager.name).toEqual('Jake');
            expect(manager.id).toEqual(777);
        });
        it("Should return the Employee name when requested", () => {
            expect(manager.getName()).toBe('Jake');
          });
        
          it("Should return the Employee id when requested", () => {
            expect(manager.getId()).toBe(777);
          });
    });
});