var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an account to the bank's 'accounts' object", function(accountName) {
      var newAccount = Bank("Bob");
      expect(newAccount).toBe(this.name);
    });

    it("sets the new account's balance to the amount specified", function(amount) {
      var newAmount = Bank(200);
      expect(newAmount).toBe(this.amount);
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {

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
