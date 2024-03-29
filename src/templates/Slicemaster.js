import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function SlicemasterPage({ data: { persone } }) {
  console.log(persone);
  return (
    <>
      <SEO title={persone.name} image={persone.image?.asset?.src} />
      <div className="center">
        <Img fluid={persone.image.asset.fluid} />
        <h2>
          <span className="mark">{persone.name}</span>
        </h2>
        <p>{persone.description}</p>
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    persone: sanityPersone(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
