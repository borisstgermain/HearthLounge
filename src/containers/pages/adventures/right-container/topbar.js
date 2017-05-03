import React  from 'react';
import {Link} from 'react-router';
import {adventure_detail_tabs} from '../../../../data/adventure-details';

const Topbar = props => {
  const {adventure, details} = props;

  const listDetails = () =>{
    return (
      adventure_detail_tabs.map((d, index) =>
          <li key={index} className={`${adventure} ${details === d.url && 'active'}`}>
            <Link to={`/adventures/${adventure}/${d.url}`}>
              {d.name}
            </Link>
          </li>
      )
    )
  };

  return (
      <div className='topbar'>
        <ul className="topbar__extension-navigation">
          {listDetails()}
        </ul>
      </div>
  );
};

Topbar.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  details:   React.PropTypes.string.isRequired
};

export default Topbar;