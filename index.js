const data = {
  encode: {
    'a': '2',
    'b': '22',
    'c': '23',
    'd': '3',
    'e': '32',
    'f': '33',
    'g': '4',
    'h': '42',
    'i': '43',
    'j': '5',
    'k': '52',
    'l': '53',
    'm': '6',
    'n': '62',
    'o': '63',
    'p': '7',
    'q': '72',
    'r': '73',
    's': '74',
    't': '8',
    'u': '82',
    'v': '83',
    'w': '9',
    'x': '92',
    'y': '93',
    'z': '94',
    ' ': '0'
  },
  decode: {
    '2': 'a',
    '22': 'b',
    '23': 'c',
    '3': 'd',
    '32': 'e',
    '33': 'f',
    '4': 'g',
    '42': 'h',
    '43': 'i',
    '5': 'j',
    '52': 'k',
    '53': 'l',
    '6': 'm',
    '62': 'n',
    '63': 'o',
    '7': 'p',
    '72': 'q',
    '73': 'r',
    '74': 's',
    '8': 't',
    '82': 'u',
    '83': 'v',
    '9': 'w',
    '92': 'x',
    '93': 'y',
    '94': 'z',
    '0': ' '










  }

}


const output = document.querySelector('#output');
const input = document.querySelector('#input');

const decode = document.querySelector('#decode');
const encode = document.querySelector('#encode');



encode.addEventListener('click', () => {
  const arr = [];
  const array = input.value.toLowerCase().split('');
  array.forEach(element => arr.push(data.encode[element]));
  output.value = arr;
})
decode.addEventListener('click', () => {
  const arr = [];
  const array = input.value.split(',');
  console.log(array)
  array.forEach(element => arr.push(data.decode[element]));
  output.value = arr.join('');
})

