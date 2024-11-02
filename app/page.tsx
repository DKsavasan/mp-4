"use client";

import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 5%;
  border: 2px solid #1e3a8a;
  border-radius: 5px;
  font-size: 1rem;
  width: 250px;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #1e3a8a;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  &:hover {
    background-color: #374151;
  }
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <Title>Find the Weather in any city!</Title>
      <Subtitle>Enter a city name below to get the current weather</Subtitle>
      <Input
        type="text"
        value={city}
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <Button href={`/${city}`}>Get Weather</Button>
    </StyledDiv>
  );
}
