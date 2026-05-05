// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const voiceOptions = document.querySelector('#voice-select');
  const textBox = document.querySelector('#text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('#explore img');

  const speech = window.speechSynthesis;

  let voices = [];

  function allVoicesListed() 
  {
    voices = speech.getVoices();

    voiceOptions.innerHTML = '<option value = "select" disabled selected> Select Voice:</option>';

    for (let i = 0; i < voices.length; i++)
    {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default)
      {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-name', voices[i].name);
      option.setAttribute('data-lang', voices[i].lang);

      voiceOptions.appendChild(option);

    }
  }

  allVoicesListed();

  if (typeof speech.onvoiceschanged !== 'undefined')
  {
    speech.onvoiceschanged = allVoicesListed;
  }

  button.addEventListener('click', () => {
    if (textBox.value.trim() === '')
    {
      alert('Please enter text to speak!');
      return;
    }

    const speaking = new SpeechSynthesisUtterance(textBox.value);
    const selectedVoice = voiceOptions.selectedOptions[0];

    if (selectedVoice && selectedVoice.getAttribute('data-name')) {
      for (let i = 0; i < voices.length; i++)
      {
        if (voices[i].name === selectedVoice.getAttribute('data-name'))
        {
          speaking.voice = voices[i];
          break;
        }
      }
    }


    face.src = 'assets/images/smiling-open.png';

    speech.speak(speaking);

    speaking.onend = () => {
      face.src = 'assets/images/smiling.png'
    };

  });




}