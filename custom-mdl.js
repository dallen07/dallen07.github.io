(function ()
 {
 var dialogButton = document.querySelector('.expand_button');
 var dialog = document.querySelector('.mdl_dialog');
 if (! dialog.showModal) 
 {
    dialogPolyfill.registerDialog(dialog);
 }
 dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });
    
 dialog.querySelector('.close_button')
    .addEventListener('click', function() {
      dialog.close();
    });
}());
