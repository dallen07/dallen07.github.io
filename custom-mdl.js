(function ()
 {
 var dialogButton = document.querySelectorAll('.expand_button');
 var dialog = document.querySelectorAll('.mdl-dialog');
 if (! dialog.showModal) 
 {
    dialogPolyfill.registerDialog(dialog);
 }
 dialogButton.addEventListener('click', function() {
       dialog.showModal();
    });
    
 dialog.querySelectorAll('.close_button')
    .addEventListener('click', function() {
      dialog.close();
    });
}());
