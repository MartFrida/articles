export const selectArticles = state => state.articles.items

export const selectUser = state => state.user.username

export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserName = state => state.auth.user.name