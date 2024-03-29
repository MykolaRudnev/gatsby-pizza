import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const BeerGridStyles = styled.div`
  display: grid;
  gap: 2ram;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;
export default function BeersPage({ data }) {
  return (
    <>
      <SEO title={`Beers ${data.beers.nodes.length} in stock`} />
      <h2 className="center">
        We have {data.beers.nodes.length} Bears Availible. Dine in Only
      </h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => (
          // const rating = Math.round(beer.rating.average);
          <SingleBeerStyles key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            {beer.price}
            {/* <p>{`⭐`.repeat(rating)}<span>{`⭐`.repeat(5 - rating)}</span></p> */}
          </SingleBeerStyles>
        ))}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
