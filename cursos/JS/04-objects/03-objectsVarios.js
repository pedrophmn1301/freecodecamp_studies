
const person = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: {
      work: "098-765-4321"
    }
  }
};

console.log(person.name);
console.log(person.contact.email);
console.log(person.contact.phone.work);

//ou

console.log(person["contact"]["phone"]["work"]);

