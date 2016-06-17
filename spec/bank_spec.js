var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an accounts to the bank's 'accounts' object", function() {
      var addAccount = Bank("Bank of America");
      expect(addAccount).toBe(this.name);
    });

    it("sets the new account's balance to the amount specified", function() {
    var accountAmount = Bank(200);
    expect(accountAmount).toBe(this.amount);
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
      var deposit = Bank("BOA", 200);
      var currentAmount = this.accounts + 200;
      expect(this.amount).toBe(200);
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
