import React, { Component } from "react";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: undefined,
      pageCount: null,
    };
  }
  componentDidMount = async () => {
    this.fecthData();
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page ||
      prevProps.queryKey !== this.props.queryKey
    ) {
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
      console.log(response);
      let data = await response.json();
      this.setState({ data: data.data, pageCount: parseInt(data.pageCount) });
      console.log("pageCount", this.state);
    } else {
      let error = await response.json();
      this.setState({ error });
      console.log(this.state);
    }
  };
  // handlePageChange = (data) => {
  //   console.log(data);
  //   this.setState({ page: data.selected });
  //   this.fecthData();
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
      // handlePageClick: (data) => this.handlePageChange(data),
    });
  }
}

export default DataSource;
