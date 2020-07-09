import React, { Component } from "react";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: undefined,
      pageCount: null,
      key: this.props.key,
    };
  }
  componentDidMount = async () => {
    this.fecthData();
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.query !== this.props.query) {
      this.fecthData();
    }
    if (prevProps.page !== this.props.page) {
      console.log("changed");
      this.fecthData();
    }
    if (prevProps.queryKey !== this.props.queryKey) {
      console.log("changed");
      this.fecthData();
    }
  };

  fecthData = async () => {
    const { endpoint, query, queryKey } = this.props;
    console.log("query", query);
    // if(query!=='') {
    // let  response = await fetch(`${endpoint}?${query}`);
    // } else
    let response = {};
    if (query && query.length > 0) {
      response = await fetch(
        `${endpoint}?${queryKey}=${query}&page=${this.props.page}`
      );
      console.log("key", queryKey);
      console.log(`${endpoint}?${queryKey}=${query}&page=${this.props.page}`);
    } else {
      response = await fetch(`${endpoint}?page=${this.props.page}`);
      console.log("first");
    }

    if (response.ok) {
      let data = await response.json();
      this.setState({ data: data.data, pageCount: data.pages });
      console.log(this.state);
    } else {
      let error = await response.json();
      this.setState({ error });
      console.log(this.state);
    }
  };
  // handlePageChange = (data) => {
  //   console.log(data);
  //   this.setState({ page: data.selected });
  //
  //   // this.fecthData();
  // };

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
