# Testing: Bank Software

We've been tasked with testing a new bank's software to make sure that it works. The bank's software is pretty basic right now, but so far it can:

- Create a new `Bank` instance by calling `var bank = new Bank("Name of Bank")`
- Create an account at the bank by calling `bank.createAccount("account name", 500)` (where 500 is the amount of money to start the account with).
- Deposit money in the account by calling `bank.deposit("account name", 200)` (where 200 is the amount to deposit).
- Withdraw money in the account by calling `bank.withdraw("account name", 200)` (where 200 is the amount to withdraw)
- Check the account balance by calling `bank.balance("account name")`.

We want to make sure each of these methods is working correctly, so we're going to use [jasmine](http://jasmine.github.io/2.4/introduction.html) to test these methods and make sure the output we're getting is expected.

You'll only need to work in the `spec/bank_spec.js` file for this project. Fill in the tests (the things inside the `it("does something", function() { ... })` blocks) with the jasmine expectations to test if the methods work. You may need to refer to the [jasmine matcher documentation](http://jasmine.github.io/2.4/introduction.html#section-Matchers) for a list of methods to compare results.

For some of the tests, you will need to do some "prep work" to set up the test. For example, to test if an account balance is correct, you first need to have created an account with money in it. Think about that as you're designing your tests.

## Bonus
- Write a test for a new method called `#listAccounts` that returns an array of the names of all the accounts in the bank. Then write the method in `app/bank.js` that would implement this feature. Use the "red-green-refactor" pattern.
- Write a test for a new method called `#computeInterest` that computes 3% interest for each account's value and adds that amount to each account. Then write the method in `bank.js` that would implement this feature. Use the "red-green-refactor" pattern.
