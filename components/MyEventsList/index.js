import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const EventCard = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: #d1c4e9;
  margin: 30px;
  padding: 15px;
  width: 250px;
  height: 400px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent, onSave }) {
  if (!ownEvents || ownEvents.length === 0) {
    return <p>You have not added any events yet </p>;
  }
  return (
    <>
      {ownEvents.map((event) => (
        <EventCard key={event.id}>
          <Title>{event.title}</Title>
          <StyledList>
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
            <li>{event.description}</li>
          </StyledList>
          <EditEvent key={event.id} event={event} onSave={onSave} />
          <DeleteButton
            id={event.id}
            onDeleteEvent={() => onDeleteEvent(event.id)}
            confirmMessage="Are you sure you want to delete this event?"
          />
        </EventCard>
      ))}
    </>
  );
}
