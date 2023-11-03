$( document ).ready(function() {
  console.log( "ready!" );

  let myInterval;
  let isActive = false;
  const startCounter = (element,end,increment) => {
    //console.log('pokrenula se');
    isActive = true;
    $('#button').text('Pause')
    myInterval = setInterval( ()=>{
     let vrijednost = $('#element').text();
     vrijednost = parseInt(vrijednost)
     vrijednost = vrijednost + increment;
     if (vrijednost % 10 === 0) {
      $('#element').css({ 'color': 'blue', 'font-size': '300px' });
     } else {
      $('#element').css({ 'color': 'skyblue', 'font-size': '200px' });
     }
     if (vrijednost === 100) {
      $('#element').css({ 'color': 'turquoise', 'font-size': '500px' });
     }
     console.log(vrijednost)
     if (vrijednost > end) {
     pauseCounter();
     $('#button').text('Reset');
    } else {
      $('#element').text(vrijednost);

    }
  }
      , 2000)
  };
  


  const pauseCounter = () => {
   isActive = false;
   clearInterval(myInterval) 
   $('#button').text('Resume')
    
    console.log('pause')
  }

  // promjeni css od countera kada je counter dijeljiv s 10
  // vrati kako je bilo kad nije
  const applyCss = () => {
    // promjeni boju u crvenu
  }
  
  
  //startCounter ($('#element'), 5, 1);
  const resetFunction = () => {
    let vrijednost = $('#element').text('0');
  }
  
  $('#button').on( "click", function() {
    const end = 100;
    if (isActive===false) {
    startCounter ($('#element'), end, 1);
    const noviBroj = parseInt($('#element').text())
    if (noviBroj >= end) {
      resetFunction();
    }
  }
    
    else {
    pauseCounter ()
    }
    
  } );


});

