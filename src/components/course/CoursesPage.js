import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import courseAction from '../../actions/courseActions';
class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event) {
    const course = this.state.course;
    course.title= event.target.value;
    this.setState({course:course});
  }

  onClickSave() {
    alert(`saving ${this.state.course.title}`);//eslint-disable-line
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return{
    courses: state.courses
  };
}

function mapDispatchToProps() {

}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
