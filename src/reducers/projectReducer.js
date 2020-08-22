import { PROJECT_REDUCER } from "../shared/actionConstants";

const initialState = {
  projectList: [],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_REDUCER.SET_PROJECTS:
      return { ...state, projectList: action.value };
    default:
      return state;
  }
};

export default projectsReducer;
