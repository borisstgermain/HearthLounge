import React, { Component } from 'react';
import { Link } from 'react-router';
export class TournamentsBlock extends Component {
  render() {
    return (
        <li className={'tournaments block-width-1'}>
          <Link to={'/turnieje'}>
            <div>Turnieje</div>
          </Link>
        </li>
    );
  }
}