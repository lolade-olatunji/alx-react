import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const handleClick = (event) => {
      console.log("Close button has been clicked");
    }
    return (
      <>
        <div className="menuItem">
          <span className='my-notifications'>Your notifications</span>
          {
            this.props.displayDrawer && (<div className="Notifications">
              <div>
                <p>Here is the list of notifications</p>
                <ul>
                  {
                    this.props.listNotifications.length > 0 ? this.props.listNotifications.map(({ id, type, html, value }) => {
                      return <NotificationItem key={id} type={type} html={html} value={value} markAsRead={this.markAsRead} id={id} />
                    }) : (<NotificationItem value="No new notification for now" />)
                  }
                </ul>
              </div>
              <button aria-label='Close' onClick={handleClick}>
                <img src={closeIcon} alt="close-icon.png" />
              </button>
            </div>)
          }
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
}

export default Notifications;