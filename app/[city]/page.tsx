"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "../../components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherContentWrapper = styled.main`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 2px 4px 8px;
`;

const CityName = styled.h1`
  color: #1e3a8a;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const WeatherCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CityPage() {
  const params = useParams();

  // Fetch weather data with SWR
  const { data, error } = useSWR(
    `/api/getWeatherData?city=${params.city}`,
    (url) => fetch(url).then((res) => res.json())
  );

  // Handle error and loading states
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // If there is data, get the days otherwise an empty array.
  const days = data?.days || [];

  return (
    <WeatherContentWrapper>
      <CityName>{params.city}</CityName>
      <WeatherCardsContainer>
        {days.map((weather: Weather, i: number) => (
          <WeatherCard
            key={i}
            datetime={weather.datetime}
            conditions={weather.conditions}
            description={weather.description}
            tempmin={weather.tempmin}
            tempmax={weather.tempmax}
          />
        ))}
      </WeatherCardsContainer>
    </WeatherContentWrapper>
  );
}
