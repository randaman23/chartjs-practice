const initialState = {
  monthly: [
    {
      month: "February",
      count: 90
    },
    {
      month: "March",
      count: 69
    },
    {
      month: "April",
      count: 77
    },
    {
      month: "May",
      count: 69
    },
    {
      month: "June",
      count: 70
    },
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
