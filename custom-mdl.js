(function() 
 {
  'use strict';
  var dialog = document.querySelector('#curr_projs-dialog');
  var dialogButton = document.querySelector('.curr_projs_button');
  
  if(!dialog.showModal)
  {
   dialogButton.registerPolyfill(dialog);
  }
  
  dialogButton.addEventListener('click', function() {
   dialog.showModal();
  });
  
  dialogButton.querySelector('.close_button')
  .addEventListener('click', function() {
   dialog.close();
  });
 }());
