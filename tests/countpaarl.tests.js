describe('countAllPaarl Function Test', function() {
    it('should count the registration numbers from Paarl correctly when there are multiple CJ entries', function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
    it('should return 0 if no registration numbers match CJ', function() {
        const result = countAllPaarl('CL 124, CY 567, CL 345, CK 456, CL 341');
        assert.equal(result, 0);
    });
})