import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};
 
const CourseList = () => {
  return (
    <table style={rowStyle} className='course-list'>
      <thead style={headerStyle}>
        <CourseListRow  textFirstCell='Available courses' isHeader={true} />
        <CourseListRow

          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        <CourseListRow
          textFirstCell='ES6'
          textSecondCell='60'
          isHeader={false}
        />
        <CourseListRow
          textFirstCell='Webpack'
          textSecondCell='20'
          isHeader={false}
        />
        <CourseListRow
          textFirstCell='React'
          textSecondCell='40'
          isHeader={false}
        />
      </tbody>
    </table>
  );
};

export default CourseList;