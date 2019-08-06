import React, { Component } from 'react';
import { Consumer } from '../Context';

class Filter extends Component {
  state = {
    isCheckedAll: false,
    isChecked0: false,
    isChecked1: false,
    isChecked2: false,
    isChecked3: false
  };

  onCheckFilter = (filterState, stops, type, dispatch) => {
    let { isChecked0, isChecked1, isChecked2, isChecked3 } = this.state;
    // console.log(isChecked0, isChecked1, isChecked2, isChecked3);
    if (
      isChecked0 === true ||
      isChecked1 === true ||
      isChecked2 === true ||
      isChecked3 === true
    ) {
      this.setState(({ isCheckedAll }) => ({
        isCheckedAll: false
      }));
    }

    switch (type) {
      case 'All':
        this.setState(
          ({
            isCheckedAll,
            isChecked0,
            isChecked1,
            isChecked2,
            isChecked3
          }) => ({
            isCheckedAll: !isCheckedAll,
            isChecked0: true,
            isChecked1: true,
            isChecked2: true,
            isChecked3: true
          })
        );
        break;

      case 'showZeroStops':
        if (
          isChecked0 === false &&
          isChecked1 === true &&
          isChecked2 === true &&
          isChecked3 === true
        ) {
          this.setState(({ isCheckedAll }) => ({
            isCheckedAll: true
          }));
        }
        this.setState(({ isChecked0 }) => ({
          isChecked0: !isChecked0
        }));
        break;

      case 'showOneStops':
        if (
          isChecked0 === true &&
          isChecked1 === false &&
          isChecked2 === true &&
          isChecked3 === true
        ) {
          this.setState(({ isCheckedAll }) => ({
            isCheckedAll: true
          }));
        }
        this.setState(({ isChecked1 }) => ({
          isChecked1: !isChecked1
        }));
        break;

      case 'showTwoStops':
        if (
          isChecked0 === true &&
          isChecked1 === true &&
          isChecked2 === false &&
          isChecked3 === true
        ) {
          this.setState(({ isCheckedAll }) => ({
            isCheckedAll: true
          }));
        }
        this.setState(({ isChecked2 }) => ({
          isChecked2: !isChecked2
        }));
        break;
      case 'showThreeStops':
        if (
          isChecked0 === true &&
          isChecked1 === true &&
          isChecked2 === true &&
          isChecked3 === false
        ) {
          this.setState(({ isCheckedAll }) => ({
            isCheckedAll: true
          }));
        }
        this.setState(({ isChecked3 }) => ({
          isChecked3: !isChecked3
        }));
        break;

      default:
        break;
    }

    dispatch({ type: type, stops: stops }, filterState);
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div>
              <aside className="filter">
                <div className="transfer">
                  <span className="transfer__head">Количество пересадок</span>
                  <ul className="transfer__count">
                    <li className="transfer__item">
                      <input
                        type="checkbox"
                        name="transfer"
                        id="transfer1"
                        onChange={this.onCheckFilter.bind(
                          this,
                          this.state.isCheckedAll,
                          null,
                          'All',
                          dispatch
                        )}
                        checked={this.state.isCheckedAll}
                      />
                      <label htmlFor="transfer1">Все</label>
                    </li>
                    <li className="transfer__item">
                      <input
                        type="checkbox"
                        name="transfer"
                        id="transfer2"
                        onChange={this.onCheckFilter.bind(
                          this,
                          this.state.isChecked0,
                          0,
                          'showZeroStops',
                          dispatch
                        )}
                        checked={this.state.isChecked0}
                      />
                      <label htmlFor="transfer2">Без пересадок</label>
                    </li>

                    <li className="transfer__item">
                      <input
                        type="checkbox"
                        name="transfer"
                        id="transfer3"
                        onChange={this.onCheckFilter.bind(
                          this,
                          this.state.isChecked1,
                          1,
                          'showOneStops',
                          dispatch
                        )}
                        checked={this.state.isChecked1}
                      />
                      <label htmlFor="transfer3">1 пересадка</label>
                    </li>

                    <li className="transfer__item">
                      <input
                        type="checkbox"
                        name="transfer"
                        id="transfer4"
                        onChange={this.onCheckFilter.bind(
                          this,
                          this.state.isChecked2,
                          2,
                          'showTwoStops',
                          dispatch
                        )}
                        checked={this.state.isChecked2}
                      />
                      <label htmlFor="transfer4">2 пересадки</label>
                    </li>
                    <li className="transfer__item">
                      <input
                        type="checkbox"
                        name="transfer"
                        id="transfer5"
                        onChange={this.onCheckFilter.bind(
                          this,
                          this.state.isChecked3,
                          3,
                          'showThreeStops',
                          dispatch
                        )}
                        checked={this.state.isChecked3}
                      />
                      <label htmlFor="transfer5">3 пересадки</label>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Filter;
