describe('fromWhere function', function() {
    it('should return registration numbers starting with "CY"', function() {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

    it('should return "Some other place!" for registration numbers not starting with "CY", "CJ", or "CA"', function() {
        const result = fromWhere('GP 123456');
        assert.equal(result, 'Some other place!');
    });
});