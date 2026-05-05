// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {




  const hornSelect = document.getElementById('horn-select');
  const imageHorns = document.querySelector('#expose > img');
  const audioElem = document.querySelector('audio');
  const volumeBar = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('#expose > button');


  //horn image

  const horninfo = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn':
    {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn':{
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3'
    }
  };

  hornSelect.addEventListener('change', (event) => {

    const chosenHorn = event.target.value;

    if (horninfo[chosenHorn])
    {
      imageHorns.src = horninfo[chosenHorn].image;
      audioElem.src = horninfo[chosenHorn].audio;

    }
  });

  volumeBar.addEventListener('input', (event) => {

    const audioVol = parseInt(event.target.value, 10);

    audioElem.volume = audioVol / 100;


    if (audioVol == 0)
    {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }

    else if (audioVol >= 1 && audioVol < 33 )
    {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }

    else if (audioVol >= 33 && audioVol < 67)
    {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }

    else
    {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

  });

  playButton.addEventListener('click', (event) => 
  {

    if (audioElem.src)
    {
      audioElem.currentTime = 0;
      audioElem.play();

      if (hornSelect.value === 'party-horn')
      {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }


    }

      
  });




  
}