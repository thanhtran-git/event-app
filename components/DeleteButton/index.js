import styled from "styled-components";
import React from "react";

const StyledDeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
`;

export default function DeleteButton({ id, onDeleteEvent, confirmMessage }) {
  const confirmDelete = () => {
    const isConfirmed = window.confirm(confirmMessage);
    if (isConfirmed) {
      onDeleteEvent(id);
    }
  };

  return (
    <StyledDeleteButton onClick={confirmDelete}>Delete</StyledDeleteButton>
  );
}
