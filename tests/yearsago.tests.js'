describe('yearsAgo function', () => {
    it('should return the correct number of years ago from a given year', function() {
        assert.equal(yearsAgo(1976), new Date().getFullYear() - 1976);
        assert.equal(yearsAgo(2000), new Date().getFullYear() - 2000);
    });
    
    it('should return the correct number of years ago for a past year', () => {
      const year = 2020;
      const expectedYearsAgo = new Date().getFullYear() - year;
      const actualYearsAgo = yearsAgo(year);
      assert.strictEqual(actualYearsAgo, expectedYearsAgo);
    });
  
    it('should return 0 for the current year', () => {
      const currentYear = new Date().getFullYear();
      const expectedYearsAgo = 0;
      const actualYearsAgo = yearsAgo(currentYear);
      assert.strictEqual(actualYearsAgo, expectedYearsAgo);
    });
  
    
  });