import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border: 1px solid black;
  margin: 1rem;
  width: 200px;
  border-radius: 10px;
  background-color: #1e3a8a;
  box-shadow: 0 2px 4px;
`;

const Date = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Condition = styled.p`
  font-size: 1rem;
`;

const Temperature = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
`;

export default function WeatherCard(props: Weather) {
  return (
    <WeatherCardWrapper className="weather-card">
      <Date>{props.datetime}</Date>
      <Condition>{props.conditions}</Condition>
      <Condition>{props.description}</Condition>
      <Temperature>
        {props.tempmin}° - {props.tempmax}°
      </Temperature>
    </WeatherCardWrapper>
  );
}
