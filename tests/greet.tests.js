describe('Greeting Test', function() {
    it('It should be able to greet Simone', function() {
        const greetS = greet('Simone')
        assert.equal(greetS, 'Hello, Simone')
    })

    it('It should not be able to greet empty name', function() {
        const greetS = greet()
        assert.equal(greetS, 'Hello, undefined')
    })
})