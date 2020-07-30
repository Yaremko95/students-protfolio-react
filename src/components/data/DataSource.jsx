import React, { Component } from "react";
import { connect } from "react-redux";
import { isLoading, fetchData } from "../../store/actions";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // loading: false,
      error: undefined,
      pageCount: null,
    };
  }
  componentDidMount = async () => {
    const { param } = this.props;
    this.props.fetchData(this.props.endpoint, param ? param : "", "GET");
  };
  componentDidUpdate = (prevProps) => {
    if (
      prevProps.endpoint !== this.props.endpoint ||
      prevProps.query !== this.props.query ||
      prevProps.page !== this.props.page ||
      prevProps.queryKey !== this.props.queryKey ||
      prevProps.param !== this.props.param
    ) {
      const { param } = this.props;
      this.props.fetchData(this.props.endpoint, param ? param : "", "GET");
    }
  };

  // fecthData = async () => {
  //   const { endpoint, query, queryKey } = this.props;
  //   // this.props.isLoading();
  //   // if(query!=='') {
  //   // let  response = await fetch(`${endpoint}?${query}`);
  //   // } else
  //   let response = {};
  //
  //   if (query && query.length > 0) {
  //     response = await fetch(
  //       `${endpoint}?${queryKey}=${query}&page=${this.props.page}`
  //     );
  //   } else {
  //     console.log("before", this.props);
  //     response = await fetch(`${endpoint}?page=${this.props.page}`);
  //   }
  //
  //   if (response.ok) {
  //     let data = await response.json();
  //     this.setState({ data: data.data, pageCount: parseInt(data.pageCount) });
  //   } else {
  //     let error = await response.json();
  //     this.setState({ error });
  //   }
  //   this.props.isLoading();
  // };

  // handlePageChange = (data) => {
  //   console.log(data);
  //   this.setState({ page: data.selected });
  //   this.fecthData();
  // };

  handleDelete = async (id) => {
    const { endpoint, param } = this.props;
    this.props.fetchData(this.props.endpoint, id, "DELETE");
    if (!this.props.error) {
      this.props.isLoading();
      this.props.fetchData(endpoint);
    }
    // let response = await fetch(endpoint + id, {
    //   method: "DELETE",
    // });
    // if (response.ok) {
    //   this.fecthData();
    // }
  };

  render() {
    return this.props.children({
      // ...this.props.loading,
      // ...this.state,
      handleDelete: (id) => this.handleDelete(id),
      // fetchData: () => this.fecthData(),
      // handlePageClick: (data) => this.handlePageChange(data),
    });
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    fetchData: (endpoint, id, method, body, params) => {
      dispatch(fetchData(endpoint, id, method, body, params));
    },
    isLoading: () => {
      dispatch(isLoading());
    },
  })
)(DataSource);
