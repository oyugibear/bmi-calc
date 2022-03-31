const {bmi_calc} = require('./calculate');

test.each([[1.83, 95,'overweight'], [1.53, 85, 'Obese'], [1.74, 71, 'normal'],[1.75,45,'underweight']])(
    '%i and %i equals %i bmi', (height, weight, expected) => {
        expect(bmi_calc(height, weight)).toBe(expected);        
    }
)
