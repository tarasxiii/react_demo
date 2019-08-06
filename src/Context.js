import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action, filterState) => {
  switch (action.type) {
    case 'All':
      console.log(filterState);
      if (filterState === false) {
        return {
          zeroStops: state.tickets.filter(ticket => ticket.stops === 0),
          oneStops: state.tickets.filter(ticket => ticket.stops === 1),
          twoStops: state.tickets.filter(ticket => ticket.stops === 2),
          threeStops: state.tickets.filter(ticket => ticket.stops === 3)
        };
      } else {
        return {};
      }

    case 'showZeroStops':
      if (filterState === false) {
        return {
          zeroStops: state.tickets.filter(
            ticket => ticket.stops === action.stops
          )
        };
      } else {
        return {
          zeroStops: []
        };
      }

    case 'showOneStops':
      console.log(filterState + '1');

      if (filterState === false) {
        console.log(filterState + '1');
        return {
          oneStops: state.tickets.filter(
            ticket => ticket.stops === action.stops
          )
        };
      } else {
        console.log(filterState + '1');
        return {
          oneStops: []
        };
      }

    case 'showTwoStops':
      if (filterState === false) {
        console.log(filterState + '2');
        return {
          twoStops: state.tickets.filter(
            ticket => ticket.stops === action.stops
          )
        };
      } else {
        console.log(filterState + '2');
        return {
          twoStops: []
        };
      }

    case 'showThreeStops':
      if (filterState === false) {
        console.log(filterState + '3');
        return {
          threeStops: state.tickets.filter(
            ticket => ticket.stops === action.stops
          )
        };
      } else {
        console.log(filterState + '3');
        return {
          threeStops: []
        };
      }

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tickets: [],

    zeroStops: [],
    oneStops: [],
    twoStops: [],
    threeStops: [],

    dispatch: (action, filterState) => {
      this.setState(state => reducer(state, action, filterState));
    }
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/tickets');

    this.setState({ tickets: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
