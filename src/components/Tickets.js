import React, { Component } from 'react';
import { Consumer } from '../Context';
import Ticket from './Ticket';

export default class Tickets extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { zeroStops, oneStops, twoStops, threeStops } = value;

          return (
            <React.Fragment>
              <article className="destination">
                <div>
                  {zeroStops.map(ticket => (
                    <Ticket key={ticket.arrival_time} tickets={ticket} />
                  ))}
                </div>
                <div>
                  {oneStops.map(ticket => (
                    <Ticket key={ticket.arrival_time} tickets={ticket} />
                  ))}
                </div>
                <div>
                  {twoStops.map(ticket => (
                    <Ticket key={ticket.arrival_time} tickets={ticket} />
                  ))}
                </div>
                <div>
                  {threeStops.map(ticket => (
                    <Ticket key={ticket.arrival_time} tickets={ticket} />
                  ))}
                </div>
              </article>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
