import React, { Component } from 'react';
// import { Consumer } from '../Context';

export default class Ticket extends Component {
  render() {
    let {
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      origin,
      origin_name,
      destination,
      destination_name,
      stops,
      price
    } = this.props.tickets;

    // <Consumer>
    //     {value =>{
    return (
      <React.Fragment>
        <section className="route">
          <button className="button">Купить за {price}</button>
          <div className="cities">
            <div className="from">
              <div className="from__time">{departure_time}</div>
              <div className="from__city">
                {origin}, {origin_name}
              </div>
              <div className="from__date">{departure_date}</div>
            </div>
            <div className="sum__transfer">
              {stops} пересадок
              <img src="./Group.png" alt="" />
            </div>
            <div className="to">
              <div className="to__time">{arrival_time}</div>
              <div className="to__city">
                {destination_name},{destination}
              </div>
              <div className="to__date">{arrival_date}</div>
            </div>
          </div>
        </section>
      </React.Fragment>
      // }}
      //   </Consumer>
    );
  }
}
