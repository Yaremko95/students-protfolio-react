import React, { Component } from "react";

class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || {},
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const { endpoint, method, fetchData, closeModal } = this.props;
    console.log("response", this.state.data);
    delete this.state.data._id;
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
      console.log(response);
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
