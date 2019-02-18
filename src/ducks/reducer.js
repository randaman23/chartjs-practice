const initialState = {
  monthly: [
    {
      month: "February",
      count: 33
    },
    {
      month: "March",
      count: 68
    },
    {
      month: "April",
      count: 15
    }
  ]
};

const UPDATE_FEB = "UPDATE_FEB";

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FEB:
      return {
        ...state,
        monthly: state.monthly.map(e => {
          if (e.month === "February") {
            return { ...e, count: action.payload };
          } else {
            return { ...e };
          }
        })
      };
    default:
      return state;
  }
}

export function february(feb) {
  return {
    type: UPDATE_FEB,
    payload: feb
  };
}
