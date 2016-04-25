const initialState = {
  name: 'easy sprint',
  tickets: [
    { name: 'ehehe', mark: 2, active: true },
    { name: 'azaza', mark: 3, active: false }
  ]
}

export default (state = initialState) => {
  return state;
}
