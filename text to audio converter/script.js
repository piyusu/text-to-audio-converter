const synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';

  const customNames = [
    { name: 'Voice 1', lang: 'Daniel' },
    { name: 'Voice 2', lang: 'Alex' },
    { name: 'Voice 3', lang: 'Samantha' },
    { name: 'Voice 4', lang: 'Fred' },
    { name: 'Voice 5', lang: 'Olivia' },
  ];

  customNames.forEach((voice, index) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute('data-index', index);
    voiceSelect.appendChild(option);
  });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
function speakText() {
    const textInput = document.getElementById('textInput').value;
    const voiceSelect = document.getElementById('voiceSelect');
    const selectedVoiceIndex = voiceSelect.options[voiceSelect.selectedIndex].getAttribute('data-index');
  
    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.voice = voices[selectedVoiceIndex];
    synth.speak(utterance);
  }
  