describe('isWeekday function', function() {
    it('should return true for weekdays (Monday to Friday)', function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

    it('should return false for non-weekdays', function() {
        assert.isFalse(isWeekday('Saturday'));
        assert.isFalse(isWeekday('Sunday'));
    });
});