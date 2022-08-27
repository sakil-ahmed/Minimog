import React from "react";
import { StyledHeroCard } from "./StyledHeroCard";

export const HeroCard = ({ title }) => {
  return (
    <StyledHeroCard>
      <div className="container">
        <h4>New Arrivals</h4>
        <h1>{title}</h1>
        <button>Shop Collection</button>
      </div>
    </StyledHeroCard>
  );
};
