import { ADD_ITEM, DECREASE_COUNT } from "../actions/reserveAction";
const initialState = {
  reserveList: [],
};
const reserveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexOfItem = state.reserveList.findIndex(
        (room) =>
          room.hotelId === action.payload.hotelId &&
          room.roomNum === action.payload.roomNum
      );
      if (indexOfItem !== -1) {
        const updateCount = state.reserveList.map((room, index) =>
          index === indexOfItem ? { ...room, count: room.count + 1 } : room
        );
        return { ...state, reserveList: [...updateCount] };
      } else {
        return {
          ...state,
          reserveList: [{ ...action.payload, count: 1 }, ...state.reserveList],
        };
      }
      
    case DECREASE_COUNT: {
      return {
        ...state,
        reserveList: state.reserveList
          .map((room) => {
            if (
              room.hotelId === action.payload.hotelId &&
              room.roomNum === action.payload.roomNum &&
              room.count > 0
            ) {
              return { ...room, count: room.count - 1 };
            } else {
              return room;
            }
          })
          .filter((room) => room.count !== 0),
      };
    }

    default:
      return state;
  }
};

export default reserveReducer;
