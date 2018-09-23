import React from 'react'
import Button from '../../components/button/button'
import Emoji from '../../components/emoji/emoji'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
    query AboutQuery {
      contentfulAbout {
        title
        cta
        desc {
          internal {
            content
          }
        }
        avatar{
          sizes {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }    
  `}
    render={data => (
      <section id="about" className="section has-text-centered">
        <div data-aos="fade-up" className="container">
          <h1 data-aos="zoom-in" className="title">{data.contentfulAbout.title}</h1>
          <figure className="image avatar is-128x128">
            <Img fluid={data.contentfulAbout.avatar.sizes} className="is-rounded" alt="avatar"/>
          </figure>
          <p>{data.contentfulAbout.desc.internal.content}</p>
          <div className="section">
            <Button href="https://www.visualcv.com/daniel-fernandez-rabal" target="_blank" type="primary" shape="rounded" size="medium">{data.contentfulAbout.cta} <Emoji emoji="👨🏻‍🎓"/></Button>
          </div>
        </div>
      </section>
    )}
  />
);

