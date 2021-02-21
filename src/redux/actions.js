import axios from "axios"

export const fetchCases = (
  tag,
  perPage,
  nextPage,
) => dispatch => {
  dispatch(changePage())
  axios
    /*.get(
      `http://react-wp.local/wp-json/wp/v2/case?${
        tag && "&tags=" + tag
      }&per_page=${perPage}&page=${nextPage}`
    )*/
    .get(
      `https://panel.react-wp.ru/wp-json/wp/v2/case?${
        tag && "&tags=" + tag
      }&per_page=${perPage}&page=${nextPage}`
    )
    .then(({ data }) => {
      dispatch(setCases(data))
    })
}

export const setCases = payload => ({
  type: "SET_CASES",
  payload,
})

export const setCasesCount = payload => ({
  type: "SET_CASES_COUNT",
  payload,
})

export const setAllCasesCount = payload => ({
  type: "SET_ALL_CASES_COUNT",
  payload,
})

export const setCasesCountByTagId = payload => ({
  type: "SET_CASES_COUNT_BY_TAG_ID",
  payload,
})

export const setCasesActiveTag = payload => ({
  type: "SET_CASES_ACTIVE_TAG",
  payload,
})

export const changePage = () => ({
  type: "CHANGE_PAGE",
})

export const resetCases = () => ({
  type: "RESET_CASES",
})

export const fetchLastCases = (
  caseId,
) => dispatch => {
  axios
    /*.get(
      `http://react-wp.local/wp-json/wp/v2/case?&per_page=2&exclude=${caseId}`
    )*/
    .get(
      `https://panel.react-wp.ru/wp-json/wp/v2/case?&per_page=2&exclude=${caseId}`
    )
    .then(({ data }) => {
      dispatch(setLatestCases(data))
    })
}

export const setLatestCases = payload => ({
  type: "SET_LATEST_CASES",
  payload,
})

export const setIsLoading = payload => ({
  type: "SET_IS_LOADING",
  payload,
})

export const openModal = () => ({
  type: "OPEN_MODAL",
})

export const closeModal = () => ({
  type: "CLOSE_MODAL",
})
