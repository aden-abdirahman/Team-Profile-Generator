const Intern = require('../team/intern')

describe('Intern Class', () => {
    describe('Initialization', () => {
        const intern = new Intern('Ahmed', 777)
        it('Should create an object with an id and name', () => {

            expect(intern.name).toEqual('Ahmed');
            expect(intern.id).toEqual(777);
        });
        it("Should return the Employee name when requested", () => {
            expect(intern.getName()).toBe('Ahmed');
          });
        
          it("Should return the Employee id when requested", () => {
            expect(intern.getId()).toBe(777);
          });
    });
});