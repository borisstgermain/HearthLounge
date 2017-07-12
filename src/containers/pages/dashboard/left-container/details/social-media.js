import React from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';

const SocialMediaDetails = ({user, handleEditClick, isEditing, handleInputChange, handleSaveClick}) => {

  const placeholder = (value) =>{
    return user[value] ? user[value] : 'N/A';
  };

  return(
      <li className="social-media">
        <DetailHeader title="social-media"
                      handleEditClick={handleEditClick}
                      isEditing={isEditing}
                      handleSaveClick={handleSaveClick}/>
        <div className="details-content">
          <IconLabel id="facebook"
                     title="facebook"
                     placeholder={placeholder('facebook')}
                     disabled={isEditing}
                     handleInputChange={handleInputChange}/>
          <IconLabel id="twitter"
                     title="twitter"
                     placeholder={placeholder('twitter')}
                     disabled={isEditing}
                     handleInputChange={handleInputChange}/>
          <IconLabel id="twitch"
                     title="twitch"
                     placeholder={placeholder('twitch')}
                     disabled={isEditing}
                     handleInputChange={handleInputChange}/>
          <IconLabel id="youtube"
                     title="youtube"
                     placeholder={placeholder('youtube')}
                     disabled={isEditing}
                     handleInputChange={handleInputChange}/>
        </div>
      </li>
  )
};

export default SocialMediaDetails;

SocialMediaDetails.propTypes = {
  user: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};