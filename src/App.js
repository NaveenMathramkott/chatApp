import React, { useState, useEffect } from "react";

import { contactsMessages, Message } from "./generateFakeData";
import Avatar from "./components/Avatar";
import ContactBox from "./components/ContactBox";
import MessagesBox from "./components/MessagesBox";
import ChatInputBox from "./components/ChatInputBox";
// import Search from "./components/Search";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  const [data, setData] = useState(contactsMessages);
  const [appLoaded, setAppLoaded] = useState(false);
  const [contactSelected, setContactSelected] = useState({});
  const [currentMessages, setCurrentMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilterContacts] = useState([]);

  useEffect(() => {
    const currContact = data.find((d) => d.contact.id === contactSelected.id);
    setCurrentMessages((currContact && currContact.messages) || []);
    filterContacts(data, search);
  }, [contactSelected, data, search]);
  useEffect(() => {
    stopLoad();
  }, []);

  function pushMessage() {
    const index = data.findIndex((d) => d.contact.id === contactSelected.id);
    const newData = Object.assign([], data, {
      [index]: {
        contact: contactSelected,
        messages: [
          ...data[index].messages,
          new Message(true, message, new Date()),
        ],
      },
    });

    setData(newData);
    setMessage("");

    localStorage.setItem(
      `message to ${contactSelected.name} `,
      JSON.stringify(message)
    );
  }

  const stopLoad = () => {
    setTimeout(() => setAppLoaded(true), 3000);
  };

  function filterContacts(data, search) {
    const result = data.filter(({ contact }) => {
      return (
        !search || contact.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterContacts(result);
  }

  if (!appLoaded) return <Loader />;
  return (
    <>
      <p className="textD">Only work in Desktop</p>

      <div className="world">
        <Navbar search={search} setSearch={setSearch} />
        <div className="app">
          <aside>
            <div className="contact-boxes">
              {filteredContacts.map(({ contact, messages }) => (
                <ContactBox
                  contact={contact}
                  key={contact.id}
                  setContactSelected={setContactSelected}
                  messages={messages}
                />
              ))}
            </div>
          </aside>
          {contactSelected.id ? (
            <main>
              <header className="header-class">
                <Avatar user={contactSelected} showName />
                <Navbar2 />
              </header>
              <MessagesBox messages={currentMessages} />
              <ChatInputBox
                message={message}
                setMessage={setMessage}
                pushMessage={pushMessage}
              />
            </main>
          ) : (
            <Welcome />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
