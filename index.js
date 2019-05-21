const $dialog = document.getElementById('dialog');
const $dialogTitle = document.getElementById('dialog-title');
const $dialogDescription = document.getElementById('dialog-description');

function openDialog(title, description) {
  $dialog.classList.add('dialog-opened');
  $dialogTitle.innerText = title;
  $dialogDescription.innerText = description;
}

function closeDialog() {
  $dialog.classList.remove('dialog-opened');
  $dialogTitle.innerText = '';
  $dialogDescription.innerText = '';
}

/**
|--------------------------------------------------
| Dialogs
|--------------------------------------------------
*/
function openDialog1() {
  openDialog('Titulo 1', 'bla bla bla bla 1');
}

function openDialog2() {
  openDialog('Titulo 2', 'bla bla bla bla 2');
}

function openDialog3() {
  openDialog('Titulo 3', 'bla bla bla bla 3');
}

function openDialog4() {
  openDialog('Titulo 4', 'bla bla bla bla 4');
}
