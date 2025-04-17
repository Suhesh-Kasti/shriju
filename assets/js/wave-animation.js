// Wave animation for skill section
document.addEventListener('DOMContentLoaded', function() {
  // Set background colors for elements with data-color attribute
  var elementsWithDataColor = document.querySelectorAll('[data-color]');
  for (var i = 0; i < elementsWithDataColor.length; i++) {
    var element = elementsWithDataColor[i];
    var backgroundColor = element.getAttribute('data-color');
    element.style.backgroundColor = backgroundColor;
  }

  // Set position for wave elements based on progress attribute
  var waveElements = document.querySelectorAll('.wave[data-progress]');
  for (var i = 0; i < waveElements.length; i++) {
    var element = waveElements[i];
    var progressValue = element.getAttribute('data-progress');
    element.style.bottom = progressValue;
  }
});
