const Engineer = require('../team/engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        const engineer = new Engineer('Aden', 777)
        it('Should create an object with an id and name', () => {

            expect(engineer.name).toEqual('Aden');
            expect(engineer.id).toEqual(777);
        });
        it("Should return the Employee name when requested", () => {
            expect(engineer.getName()).toBe('Aden');
          });
        
          it("Should return the Employee id when requested", () => {
            expect(engineer.getId()).toBe(777);
          });
    });
});