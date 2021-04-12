import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Are you looking for a hiking hotel in mountain? A guide for a guided high tour or a shuttle that takes you comfortably up the mountain? We are here to give Endliess Hiking services to our guest. We will also show you the most beautiful oases of peace and the best fireplaces for a barbeque in the great outdoors. ',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'The Free Shuttle provides free service in and around to our gest, with trips to local stores, senior center, libraries, city hall, and parks. ',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'We provide wide range of beers spans different brands. Enjoy your stay with beers tend to be crisp in taste, with a decent balance of malty and fruity hops.',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
