/*(function ()
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
}());*/

(function ()
{
 var dialogs = document.querySelectorAll('.dialog_container'), i;
 for (i = 0; i < dialogs.length; i++)
 {
  var dialog = dialogs[i].querySelector('.mdl-dialog'),
      expandButton = document.querySelector('.expand_button0'),
      closeButton = dialogs[i].querySelector('.close_button');
  
  dialogPolyfill.registerDialog(dialog[i]);
  
  expandButton.addEventListener('click', function () {
    this.showModal();
  }.bind(dialog));
  
  closeButton.addEventListener('click', function () {
    this.showModal();
  }.bind(dialog));
 }
}());
