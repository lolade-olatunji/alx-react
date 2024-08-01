import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
        super(props);
        this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
    }

    handleKeyboardPress(event) {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardPress)
    }

  render() {

     const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];

        const listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ];

  return (
    <>
     <div className="App">
       <div className='headerContainer'>
           <Header />
           <Notifications listNotifications={listNotifications} />
       </div>
        <div className="App-body">
           {
                        !this.props.isLoggedIn ? (<BodySectionWithMarginBottom title='Log in to continue'>
                            <Login />
                        </BodySectionWithMarginBottom>) : (
                            <BodySectionWithMarginBottom title="Course list">
                                <CourseList listCourses={listCourses} />
                            </BodySectionWithMarginBottom>
                        )
                    }
                    <BodySection title={'News from the School'}>
                        <p>Here are the news from school....</p>
                    </BodySection>
        </div>
     </div>
      <Footer />
    </>
  );
};
}

App.propTypes = {
    logOut: PropTypes.func
}

App.defaultProps = {
    logOut: () => { return; }
}

export default App;