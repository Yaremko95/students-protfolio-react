import React, { Component } from "react";

class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || {},
    };
    console.log("updateData", this.state.student);
  }

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const { endpoint, method, fetchData, closeModal } = this.props;

    let response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(this.state.data),
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
    const { data } = this.state;
    return React.cloneElement(this.props.children, {
      state: this.state,
      setData: (state) => this.setState({ data: { ...data, ...state } }),
      onSubmit: (e) => this.onSubmit(e),

      ...this.state,
    });
  }
}

export default UpdateData;
