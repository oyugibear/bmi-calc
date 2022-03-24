const {bmi} = require('./index');

test.each([183, 100, 29.9], [153, 85, 36.3], [170, 91, 31.5])(
    '%i / (%i * %i) equals %i', (weight, height, expected) => {
        expect(bmi(weight, height).toBe(expected))        
    }
)