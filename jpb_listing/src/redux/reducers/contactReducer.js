const initialState = [
  { id: 0, name: "Google", email: "sde", phone: 23000, jd:"abc", jt:'xyz' },
  { id: 0, name: "masai", email: "sde-2", phone: 23000, jd:"abc", jt:'xyz' },
  
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_CONTACT":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_CONTACT":
      state = [{ name: null, email: null, phone: null , jd:null, jt:null}];
      return state;
    default:
      return state;
  }
};
