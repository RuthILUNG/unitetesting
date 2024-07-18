describe('isFromBellville function', function() {
    it('should return true for items starting with "CY"', function() {
        assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);

    });

    it('should return false for items not starting with "CY"', function() {
        const result = isFromBellville('CJ 987654');
        assert.isFalse(result);
    });
});