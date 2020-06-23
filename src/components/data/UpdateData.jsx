import React, { Component } from "react";

class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: this.props.student || {},
    };
    console.log("updateData", this.state.student);
  }

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const { endpoint, method, fetchData, closeModal } = this.props;

    let response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(this.state.student),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // let data = await response.json();
      // console.log(data);
      // this.setState({
      //   id: data.id,
      // });
      closeModal();
      fetchData();
    } else {
      let error = await response.json();
      console.log(error);
    }
  };

  render() {
    const { student } = this.state;
    return React.cloneElement(this.props.children, {
      state: this.state,
      setData: (state) => this.setState({ student: { ...student, ...state } }),
      onSubmit: (e) => this.onSubmit(e),

      ...this.state,
    });
  }
}

export default UpdateData;
