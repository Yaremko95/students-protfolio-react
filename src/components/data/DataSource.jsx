import React, { Component } from "react";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: undefined,
    };
  }
  componentDidMount = async () => {
    this.fecthData();
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.query !== this.props.query) {
      this.fecthData();
    }
  };

  fecthData = async () => {
    const { endpoint, query } = this.props;
    console.log("query", query);
    // if(query!=='') {
    // let  response = await fetch(`${endpoint}?${query}`);
    // } else
    let response = {};
    if (query.length > 0) {
      response = await fetch(`${endpoint}?country=${query}`);
    } else {
      response = await fetch(endpoint);
    }

    if (response.ok) {
      let data = await response.json();
      this.setState({ data });
      console.log(this.state);
    } else {
      let error = await response.json();
      this.setState({ error });
      console.log(this.state);
    }
  };

  handleDelete = async (id) => {
    const { endpoint, param } = this.props;
    let response = await fetch(endpoint + id, {
      method: "DELETE",
    });
    if (response.ok) {
      this.fecthData();
    }
  };

  render() {
    return this.props.children({
      ...this.state,
      handleDelete: (id) => this.handleDelete(id),
      fetchData: () => this.fecthData(),
    });
  }
}

export default DataSource;
