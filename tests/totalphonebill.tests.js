
describe('totalPhoneBill Function', function() {
    it('should calculate the correct total cost for various call and SMS combinations', function() {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
    it('should return R0.00 for an empty string', function() {
        assert.equal(totalPhoneBill(''), 'R0.00');
    });
    });
