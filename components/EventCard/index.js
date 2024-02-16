import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 380px;
  margin: 25px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 767px) {
    max-width: 444px;
    margin: 20px 10px;
  }
  @media (min-width: 768px) {
    max-width: 335px;
    margin: 20px 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.1s ease;
`;

const Title = styled.h3`
  margin: 10px;
`;

const DetailsContainer = styled.div`
  margin: 10px;
  line-height: 1.3rem;
  margin-top: auto;
`;

const DetailsRows = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Location = styled.p`
  font-size: 1.2rem;
`;

const Row2 = styled.div``;

export default function EventCard({
  title,
  image,
  date,
  location,
  width,
  height,
  id,
  venue,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <CardContainer>
          <Link href={`/details/${id}`}>
            <StyledImage
              src={image}
              alt={title}
              width={width}
              height={height}
            />
          </Link>
          <Title>{title}</Title>
          <DetailsContainer>
            <DetailsRows>
              <Row1>
                <Location>{location}</Location>
                <p>{date}</p>
              </Row1>
              <Row2>
                <p>{venue}</p>
              </Row2>
            </DetailsRows>
          </DetailsContainer>
        </CardContainer>
      </ImageContainer>
    </Wrapper>
  );
}
