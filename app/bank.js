function Bank(name) {
  this.name = name;
  this.accounts = {}
}

Bank.prototype.createAccount = function(accountName,
amount) {
  if (!this.accounts[accountName]) {
    this.accounts[accountName] = amount;
    return true;
  }
  return false;
}

// Bank.prototype.deposit = function(accountName, amount) {
//   if (!this.accounts[accountName]) { return false; }

//   this.accounts[accountName] += amount;
//   return true;
// }

// Bank.prototype.withdraw = function(accountName, amount) {
//   if (!this.accounts[accountName]) { return false; }

//   if (this.accounts[accountName] > amount) {
//     this.accounts[accountName] -= amount;
//     return true;
//   }
//   return false;
// }

// Bank.prototype.balance = function(accountName) {
//   if (!this.accounts[accountName]) { return false; }

//   return this.accounts[accountName];
// }

module.exports = Bank;
