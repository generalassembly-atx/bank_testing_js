var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an accounts to the bank's 'accounts' object", function() {
        var newAccount = Bank('BoA');
        expect(newAccount).toBe(this.accountName);
    });

    it("sets the new account's balance to the amount specified", function() {
        var newAmount = Bank(200);
        expect(newAmount).toBe(this.amount);
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
        var deposit = Bank('BoA', 200);
        expect(deposit).toBe(this.amount);
    });

  });

  describe("#withdraw", function() {

    it("withdraws the appropriate amount from the named account", function() {
        var withdraw = Bank('BoA', 150);
        expect(withdraw).toBe(this.amount);
    });

  });

  describe("#balance", function() {

    it("returns the current balance of the named account", function() {

    });

  });

});
