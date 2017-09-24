const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header')
})

const aValue = 'a'.charCodeAt(0)
const toNum = letter => letter.charCodeAt(0) - aValue
const toChar = number => String.fromCharCode(number + aValue)

const encode = (message, shift) => {
  return message.split('').map(letter => {
    if (letter === ' ') {
      return ' '
    }
    return toChar((toNum(letter) + shift) % 26)
  }).join('')
}

module.exports = (store, actions, params) => {
  const onChangeMessage = (event) => {
    actions.setMessage(event.target.value)
  }
  const onChangeShift = (event) => {
    actions.setShift(parseInt(event.target.value))
  }
  const enccodedMessage = encode(store.cipher.message, store.cipher.shift)
  return html`
    <div>
      <header></header>
      <div>
        <input value=${store.cipher.message} oninput=${onChangeMessage}/>
        <input type="number" value=${store.cipher.shift} oninput=${onChangeShift} />
        <div>
          <code>${enccodedMessage}</code>
        </div>
      </div>
    </div>
  `
}
