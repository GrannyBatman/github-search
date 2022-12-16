import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'rfk'

interface GithubState {
	favourites: string[]
}

const initialState: GithubState = {
	favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

const addToLocalStorage = (state: string[]) =>
	localStorage.setItem(LS_FAV_KEY, JSON.stringify(state))

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload)
			addToLocalStorage(state.favourites)
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(f => f !== action.payload)
			addToLocalStorage(state.favourites)
		},
	},
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
