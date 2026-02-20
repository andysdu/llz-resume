let editMode = false;

function toggleEdit() {
  editMode = !editMode;
  document.body.classList.toggle('edit-mode', editMode);

  const editables = document.querySelectorAll('[contenteditable]');
  editables.forEach(el => {
    el.setAttribute('contenteditable', editMode ? 'true' : 'false');
  });

  const btn = document.querySelector('.controls button:nth-child(2)');
  btn.textContent = editMode ? 'Done Editing' : 'Toggle Edit Mode';
}
