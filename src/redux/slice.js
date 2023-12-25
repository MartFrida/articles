import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [{
    id: '1',
    title: 'Redux toolkit',
    author: 'Alex Dou',
    createdAt: '25.12.2023',
    tags: ['redux', 'react', 'js'],
    description: 'Ullamco aliqua dolor eiusmod irure qui in. Ex reprehenderit laboris aliquip laborum cillum ad culpa. Ea aliquip occaecat culpa cupidatat duis proident in minim exercitation ea. Occaecat et exercitation officia Lorem anim laboris reprehenderit consequat eiusmod esse sint eiusmod. Nisi culpa exercitation aliqua amet.    Amet eiusmod labore ea nostrud dolor aliqua. Consequat consequat nostrud sint culpa id quis culpa do sint nisi eu ad nisi. Velit exercitation excepteur reprehenderit non.    Laborum minim ut ea culpa ea occaecat sit est esse laboris quis tempor sunt. Ullamco nulla minim velit sint Lorem. Sunt proident commodo Lorem magna.    Labore est proident occaecat exercitation ullamco excepteur eu est cupidatat commodo qui occaecat. Dolor officia nisi voluptate dolore nisi ut. Lorem deserunt ea commodo eu duis mollit elit. Fugiat voluptate aute elit aute sint occaecat nostrud. Ullamco officia minim incididunt culpa consectetur exercitation adipisicing minim magna occaecat laborum enim. Nisi nisi ipsum irure velit reprehenderit commodo reprehenderit commodo fugiat. Mollit consequat ipsum sit mollit tempor deserunt ea velit Lorem in.',
  },
  {
    id: '2',
    title: 'React',
    author: 'Petro Dou',
    createdAt: '21.12.2023',
    tags: ['react', 'js'],
    description: 'Ullamco aliqua dolor eiusmod irure qui in. Ex reprehenderit laboris aliquip laborum cillum ad culpa. Ea aliquip occaecat culpa cupidatat duis proident in minim exercitation ea. Occaecat et exercitation officia Lorem anim laboris reprehenderit consequat eiusmod esse sint eiusmod. Nisi culpa exercitation aliqua amet.    Amet eiusmod labore ea nostrud dolor aliqua. Consequat consequat nostrud sint culpa id quis culpa do sint nisi eu ad nisi. Velit exercitation excepteur reprehenderit non.    Laborum minim ut ea culpa ea occaecat sit est esse laboris quis tempor sunt. Ullamco nulla minim velit sint Lorem. Sunt proident commodo Lorem magna.    Labore est proident occaecat exercitation ullamco excepteur eu est cupidatat commodo qui occaecat. Dolor officia nisi voluptate dolore nisi ut. Lorem deserunt ea commodo eu duis mollit elit. Fugiat voluptate aute elit aute sint occaecat nostrud. Ullamco officia minim incididunt culpa consectetur exercitation adipisicing minim magna occaecat laborum enim. Nisi nisi ipsum irure velit reprehenderit commodo reprehenderit commodo fugiat. Mollit consequat ipsum sit mollit tempor deserunt ea velit Lorem in.',
  }],
  error: null,
  loading: false,
}

const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, { payload }) => {
      state.items.push(payload)
    },
  },
})

export const articleReducer = slice.reducer
export const { addArticle } = slice.actions