const initialState = {
  cases: [],
  casesCount: "",
  allCasesCount: "",
  casesCountByTagId: [],
  casesPerPage: 1,
  casesNextPage: 1,
  casesPageLeft: "",
  casesActiveTag: null,
  latestCases: [],
  isLoading: false,
  isModalVisible: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CASES":
      return {
        ...state,
        cases: [...state.cases, ...action.payload],
        isLoading: false,
      }
    case "SET_CASES_COUNT":
      return {
        ...state,
        casesCount: action.payload,
        casesPageLeft: Math.ceil(action.payload / state.casesPerPage),
      }
    case "SET_ALL_CASES_COUNT":
      return {
        ...state,
        allCasesCount: action.payload,
      }
    case "SET_CASES_COUNT_BY_TAG_ID":
      return {
        ...state,
        casesCountByTagId: action.payload,
      }
    case "SET_CASES_ACTIVE_TAG":
      return {
        ...state,
        casesActiveTag: action.payload,
      }
    case "CHANGE_PAGE":
      return {
        ...state,
        casesNextPage: state.casesNextPage + 1,
        casesPageLeft: state.casesPageLeft - 1,
        isLoading: true,
      }
    case "RESET_CASES":
      return {
        ...state,
        cases: [],
        casesCount: "",
        casesNextPage: 1,
        casesPageLeft: "",
      }
    case "SET_LATEST_CASES":
      return {
        ...state,
        latestCases: action.payload,
        isLoading: false,
      }
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "OPEN_MODAL":
      return {
        ...state,
        isModalVisible: true,
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalVisible: false,
      }
    default:
      return state
  }
}

export default reducer
