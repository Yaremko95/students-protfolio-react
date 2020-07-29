import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoading } from "../../store/actions";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // loading: false,
      error: undefined,
      pageCount: null,
    };
  }
  componentDidMount = async () => {
    this.fecthData();
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.endpoint !== this.props.endpoint ||
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page ||
      prevProps.queryKey !== this.props.queryKey
    ) {
      console.log("chaaaanged", this.props);
      this.fecthData();
    }
  };

  fecthData = async () => {
    const { endpoint, query, queryKey } = this.props;
    // this.props.isLoading();
    // if(query!=='') {
    // let  response = await fetch(`${endpoint}?${query}`);
    // } else
    let response = {};

    if (query && query.length > 0) {
      response = await fetch(
        `${endpoint}?${queryKey}=${query}&page=${this.props.page}`
      );
    } else {
      console.log("before", this.props);
      response = await fetch(`${endpoint}?page=${this.props.page}`);
    }

    if (response.ok) {
      let data = await response.json();
      this.setState({ data: data.data, pageCount: parseInt(data.pageCount) });
    } else {
      let error = await response.json();
      this.setState({ error });
    }
    this.props.isLoading();
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
      ...this.props.loading,
      ...this.state,
      handleDelete: (id) => this.handleDelete(id),
      fetchData: () => this.fecthData(),
      // handlePageClick: (data) => this.handlePageChange(data),
    });
  }
}

export default connect(
  (state, router) => {
    console.log("state in connect", state);
    return {
      loading: state.loading,
    };
  },

  (dispatch) => ({
    isLoading: () => {
      dispatch(isLoading());
    },
  })
)(DataSource);
