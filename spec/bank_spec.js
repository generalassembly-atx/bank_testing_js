var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an accounts to the bank's 'accounts' object", function() {
      var newAccount = Bank.prototype.createAccount("checking", 300);
      expect( newAccount ).toBe( "checking" );
    });

    it("sets the new account's balance to the amount specified", function() {
      //var
      expect( newAccount.amount ).toBe( 300 );
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
        var newDeposit = Bank.deposit("checking", 45);
        console.log(newDeposit);
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
