import C from "./constants";

export const isLoading = () => ({
  type: C.LOADING,
});

export const setData = (data) => ({
  type: C.SET_DATA,
  payload: data,
});
export const setSingleData = (data) => ({
  type: C.SET_SINGLE_DATA,
  payload: data,
});
export const error = (error) => ({
  type: C.SET_ERROR,
  payload: error,
});

export const fetchData = (
  endpoint,
  id = "",
  method = "GET",
  body = {},
  params = {}
) => (dispatch, getState) => {
  console.log("????????", endpoint, method, id);
  fetch(endpoint + id, {
    method: method,
    body: ["PUT", "POST"].includes(method) ? JSON.stringify(body) : undefined,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (!["DELETE", "PUT", "POST"].includes(method)) {
        id ? dispatch(setSingleData(data.data)) : dispatch(setData(data.data));
        console.log("fetching");
        dispatch(isLoading());
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch(error("Something went wrong"));
    });
};

export const updateData = (endpoint, method, id, body, p) => (dispatch) => {
  fetch(endpoint + id, {
    method: method,

    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => dispatch(error(e)));
};
