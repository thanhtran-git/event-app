import EventList from "@/components/EventList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export default function HomePage({ apiData, handleLoadMore }) {
  return (
    <>
      <Wrapper>
        <title>EVENT APP</title>
        <Title>EVENT APP</Title>
        <EventList apiData={apiData} />
        <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
      </Wrapper>
    </>
  );
}