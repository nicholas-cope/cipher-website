window.addEventListener('load', main);

function main() {
  let encodeButton = document.getElementById('encodeButton');
  encodeButton.addEventListener('click', encode);
  let decodeButton = document.getElementById('decodeButton');
  decodeButton.addEventListener('click', decode);
  let copyButton1 = document.getElementById('copyButton1');
  copyButton1.addEventListener('click', copy1);
  let copyButton2 = document.getElementById('copyButton2');
  copyButton2.addEventListener('click', copy2);
}

function encode() {
  let input = document.getElementById('plainText');
  let inputArray = input.value.split('');
  console.log(inputArray);
  let shiftNumber = document.getElementById('encodeShift');
  let error = document.getElementById('encodeError');
  const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if (shiftNumber.value < 1 || shiftNumber.value > 25) {
    error.style.color = 'red';
    error.textContent = 'Please enter a value between 1 and 25.';
  }
  else {
    error.textContent = '';
    let encodedText = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (alphabetLower.indexOf(inputArray[i]) === -1 && alphabetUpper.indexOf(inputArray[i]) === -1) {
        encodedText[i] = inputArray[i];
        continue;
      }

      else if (inputArray[i] === inputArray[i].toUpperCase()) {
        let indexInAlphabet = alphabetUpper.indexOf(inputArray[i]);
        let newChar = indexInAlphabet + Number(shiftNumber.value);

        if (newChar > (alphabetUpper.length - 1)) {
          newChar -= alphabetUpper.length;
        }
        encodedText.push(alphabetUpper[newChar]);
        continue;
      }
      let indexInAlphabet = alphabetLower.indexOf(inputArray[i]);
      let newChar = indexInAlphabet + Number(shiftNumber.value);

      if (newChar > (alphabetLower.length - 1)) {
        newChar -= alphabetLower.length;
      }
      encodedText.push(alphabetLower[newChar]);
    }

    let result = document.getElementById('encoded');
    result.textContent = encodedText.join('');
  }
}

function decode() {
  let input = document.getElementById('codeText');
  let inputArray = input.value.split('');
  console.log(inputArray);
  let shiftNumber = document.getElementById('decodeShift');
  let error = document.getElementById('decodeError');
  const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  if (shiftNumber.value < 1 || shiftNumber.value > 25) {
    error.style.color = 'red';
    error.textContent = 'Please enter a value between 1 and 25.';
  }
  else {
    error.textContent = '';
    let decodedText = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (alphabetLower.indexOf(inputArray[i]) === -1 && alphabetUpper.indexOf(inputArray[i]) === -1) {
        decodedText[i] = inputArray[i];
        continue;
      }

      else if (inputArray[i] === inputArray[i].toUpperCase()) {
        let indexInAlphabet = alphabetUpper.indexOf(inputArray[i]);
        let newChar = indexInAlphabet - Number(shiftNumber.value);

        if (newChar < 0) {
          newChar += alphabetUpper.length;
        }
        decodedText.push(alphabetUpper[newChar]);
        continue;
      }
      let indexInAlphabet = alphabetLower.indexOf(inputArray[i]);
      let newChar = indexInAlphabet - Number(shiftNumber.value);

      if (newChar < 0) {
        newChar += alphabetLower.length;
      }

      decodedText.push(alphabetLower[newChar]);
    }

    let result = document.getElementById('decoded');
    result.textContent = decodedText.join('');
  }
}

function copy1() {
  //copied from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  let copyText = document.getElementById("encoded");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}

function copy2() {
  //copied from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  let copyText = document.getElementById("decoded");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
