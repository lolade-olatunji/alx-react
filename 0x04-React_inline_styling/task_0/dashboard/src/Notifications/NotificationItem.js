import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const element = this.props.html ?
            <li data-notification-type="urgent" dangerouslySetInnerHTML={this.props.html} onClick={() => { this.props.markAsRead(this.props.id) }}></li> :
            <li data-notification-type={this.props.type} onClick={() => { this.props.markAsRead(this.props.id) }}>{this.props.value}</li>;

        return element;
    }
}


// function NotificationItem({ type = 'default', value, html, markAsRead, id = 0 }) {
//     const element = html ?
//         <li data-notification-type="urgent" dangerouslySetInnerHTML={html} onClick={() => { markAsRead(id) }}></li> :
//         <li data-notification-type={type} onClick={() => { markAsRead(id) }}>{value}</li>;

//     return element;
// }

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number
}

NotificationItem.defaultProps = {
    type: 'default',
    id: 0,
} //  will be removed in the future, use JS default parameters instead

export default NotificationItem;