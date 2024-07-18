describe('transportFee Function', function() {

    it('should return R20 for the morning shift', () => {
      const shift = 'morning';
      const expectedFee = 'R20';
      const actualFee = transportFee(shift);
      assert.strictEqual(actualFee, expectedFee);
    });
  
    it('should return R10 for the afternoon shift', () => {
      const shift = 'afternoon';
      const expectedFee = 'R10';
      const actualFee = transportFee(shift);
      assert.strictEqual(actualFee, expectedFee);
    });
    it('should return the correct free for night shift return free', function() {
          
      assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
  })
  
  });