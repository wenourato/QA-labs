const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

// let functionsJs = require('./functions.js')

    test('Return the numbers', () => {
        expect(returnTwo()).toBe(2)
    })


    test('Say the Greeting', () => {
        expect(greeting('WyGuy')).toBe('Hello WyGuy')
    })


    test('add the numbers', () => {
        expect(add(5, 5)).toEqual(10)
    })