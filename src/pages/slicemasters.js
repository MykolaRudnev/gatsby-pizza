import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlicemasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SlicenasteStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 1rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(-1deg);
    text-align: center;
  }
`;
export default function SliceMastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  console.log(slicemasters);
  return (
    <>
      <p>{process.env.GATSBY_PAGE_SIZE}</p>
      <SlicemasterGrid>
        {slicemasters.map((persone) => (
          <SlicenasteStyles>
            <Link to={`/slicemaster/${persone.slug.current}`}>
              <h2>
                <span className="mark">{persone.name}</span>{' '}
              </h2>
            </Link>
            <Img fluid={persone.image.asset.fluid} />
            <p className="description">{persone.description}</p>
          </SlicenasteStyles>
        ))}
      </SlicemasterGrid>
    </>
  );
}

export const query = graphql`
  query {
    slicemasters: allSanityPersone {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
