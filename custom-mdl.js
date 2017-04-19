console.log("test1");

(function ()
 {console.log("test");
    var dialogButton = document.querySelector('.curr_projs_button');
var dialog = document.querySelector('#curr_projs_dialog');
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
