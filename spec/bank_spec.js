var Bank = require('../app/bank');

describe("Bank", function() {

  describe("#createAccount", function() {

    it("adds an accounts to the bank's 'accounts' object", function() {
      // var  = bank.adds(accounts);
      // expect( add ).toBe(true);
      var accountName = Bank("xixi");
      accountName.createAccount("mino",100);
      expect(accountName.accounts).toBe({"mino": 100})

    });

    it("sets the new account's balance to the amount specified", function() {
        // var create = bank.createAccount(accountName)
        // var setamount = bank.createAccount(amount);
        // expect(create).toEqual(setamount);
      var accountName = Bank("xixi");
      accountName.createAccount("mino",100);
      var money = accountName.accounts["mino"]
      expect(money).toBe(100);
    });

  });

  describe("#deposit", function() {

    it("adds the appropriate amount to the named account", function() {
      // var = bank.deposit();
      // expect().
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
