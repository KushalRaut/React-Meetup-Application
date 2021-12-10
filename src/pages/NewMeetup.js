import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-6bc30-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
