var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an account to the bank's 'accounts' object", function(accountName) {
      var newAccount = Bank("Bob");
      expect(newAccount).toBe(this.name);
    });

    it("sets the new account's balance to the amount specified", function(amount) {
      var newAmount = Bank(400);
      expect(newAmount).toBe(this.amount);
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
      var newDeposit = Bank("Chase", 400);
      var currentAmount = this.amount + newDeposit;
      expect(this.amount).toBe(400);
    });

  });

  describe("#withdraw", function() {

    it("withdraws the appropriate amount from the named account", function() {

    });

  });

  describe("#balance", function() {

    it("returns the current balance of the named account", function() {

    });

  });

});
