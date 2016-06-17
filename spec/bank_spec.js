var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an accounts to the bank's 'accounts' object", function() {
      var newAccount = Bank('Zach');
      expect(newAccount).toBe(this.name)
    });

    it("sets the new account's balance to the amount specified", function() {
      var initAmount = Bank(133700);
      expect(initAmount).toBe(this.amount)
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
      var addAmount = Bank(500);
      expect(addAmount).toBe(this.amount);
    });

  });

  describe("#withdraw", function() {

    it("withdraws the appropriate amount from the named account", function() {
      var withAmount = Bank(500);
      expect(withAmount).toBe(this.amount);
    });

  });

  describe("#balance", function() {

    it("returns the current balance of the named account", function() {
      var currAmount = this.amount;
      expect(currAmount).toBe(this.amount)
    });

  });

});
