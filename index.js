const accounts = [
  {
    application: 1,
    emails: ["a@gmail.com", "b@gmail.com"],
    name: "A",
  },
  {
    application: 1,
    emails: ["c@gmail.com", "d@gmail.com"],
    name: "C",
  },
  {
    application: 2,
    emails: ["a@yahoo.com"],
    name: "A",
  },
  {
    application: 3,
    emails: ["a@gmail.com", "a@yahoo.com"],
    name: "A",
  },
];

function mergeAccounts(accounts) {
  let people = {};
  accounts.forEach((account) => {
    if (account.name in people) {
      let person = people[account.name];
      person.applications.push(account.application);
      person.emails = [...new Set([...person.emails, ...account.emails])];
    } else {
      people[account.name] = {
        applications: [account.application],
        emails: account.emails,
        name: account.name,
      };
    }
  });
  return Object.values(people);
}

let mergedAccounts = mergeAccounts(accounts);
console.log(JSON.stringify(mergedAccounts));

///OUTPUT
// [
//   {
//     applications: [1, 2, 3],
//     emails: ["a@gmail.com", "b@gmail.com", "a@yahoo.com"],
//     name: "A",
//   },
//   { applications: [1], emails: ["c@gmail.com", "d@gmail.com"], name: "C" },
// ];
