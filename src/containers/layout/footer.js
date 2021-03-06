import React from 'react';
import {Link} from 'react-router';
import Icon from "../../components/icon";

const IconWithUrl = ({name, url, title}) => {
  return (
      <a href={url}
         target="_blank"
         rel="noopener noreferrer">
        <Icon name={name}
              tooltip={true}
              title={title}
              tooltipPlacement="top"/>
      </a>
  )
};

const Footer = ({pathname}) =>{
  const path = pathname.split("/").splice(1).join(" > ");

  return (
        <footer>
            <div className="path">Current location: <br/> {path}</div>
            <div className="copyright">
              <div>
                <p>Hearth Lounge © 2017</p>
                <div>
                  <Link to="/tos-privacy">Terms & Privacy</Link>
                </div>
              </div>
            </div>
            <div className="media">
              <IconWithUrl name="github" url="https://github.com/vFujin/HearthLounge" title="Contribute"/>
              <IconWithUrl name="twitch" url="https://www.twitch.tv/vfujin" title="development"/>
              <IconWithUrl name="discord" url="https://discord.gg/fZgdKhV"/>
              <Link to="/help">
                <Icon name="help"
                      tooltip={true}
                      tooltipPlacement="top"/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;