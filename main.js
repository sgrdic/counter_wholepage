$( document ).ready(function() {
  console.log( "ready!" );

  // global vars
  let myInterval;
  let isActive = false;
  const end = 100; // hardcoded for now, but can be taken from an input field
  const speed = 200

  const startCounter = (element,end,increment) => {
    isActive = true;
    $('#button').text('Pause')
    myInterval = setInterval(() => {
      const currentValue = parseInt(element.text())
      const nextValue = currentValue + increment

      if (nextValue % 10 === 0) {
        element.css({ 'color': 'blue', 'font-size': '300px' });
      } else {
        element.css({ 'color': 'skyblue', 'font-size': '200px' });
      }

      if (nextValue === 100) {
        element.css({ 'color': 'turquoise', 'font-size': '500px' });
      }
      if (nextValue > end) {
        pauseCounter();
        $('#button').text('Reset');
      } else {
        element.text(nextValue);
      }
    }, speed)
  };
  
  const pauseCounter = () => {
    isActive = false;
    clearInterval(myInterval) 
    $('#button').text('Resume')    
  }

  const resetCounter = () => {
    $('#element').text('0');
    $('#button').text('Start')
  }
  
  $('#button').on("click", function() {
    if (isActive) {
      pauseCounter()
    } else {
      const currentValue = parseInt($('#element').text())
      if (currentValue >= end) {
        resetCounter();
      } else {
        startCounter($('#element'), end, 1);
      }
    }
  });
});
