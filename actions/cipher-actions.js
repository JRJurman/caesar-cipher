module.exports = {
  init: () => Object({message: 'hello world', shift: 4}),
  setMessage: (state, newMessage) => Object.assign({}, state, {message: newMessage}),
  setShift: (state, newShift) => Object.assign({}, state, {shift: newShift})
}
