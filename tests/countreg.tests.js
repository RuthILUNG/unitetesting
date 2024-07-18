describe('countRegNumber Function Test', function() {
    it('should count the number of registration number', function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
        
    });
    it('should return 0 if the registration string is empty', function() {
        const regCount = countRegNumber('');
        assert.equal(regCount, 1);
    });
})