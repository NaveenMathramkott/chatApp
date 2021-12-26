const faker = require("faker/locale/en_IND");

class User {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.name.firstName();
    this.avatar = faker.internet.avatar();
    // this.date = Date().toLocaleString();
  }
}
export class Message {
  constructor(isMainUser, msg, date) {
    this.id = faker.random.uuid();
    this.msg =
      msg ||
      faker.lorem.sentence(faker.helpers.randomize([...Array(20).keys()]));
    this.isMainUser = isMainUser;
    this.date = date || faker.date.recent();
  }
}

export const mainUser = new User();

export const contacts = [...Array(10).keys()].map(() => new User());
// export const contacts = [
//   {
//     name: "naveen",
//   },
// ];

export const contactsMessages = contacts.map((contact) => {
  return {
    contact,
    messages: [...Array(15).keys()]
      .map((_, i) => {
        return (i + 1) % 2 === 0 ? new Message(true) : new Message(false);
      })
      .filter((m) => m.msg),
  };
});
