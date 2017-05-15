(function() {
  const clearEditorButtons = document.getElementsByClassName('clear-editor-button');
  const editorTitleInput = document.getElementById('editor-title-input');
  const editorTextAreaInput = document.getElementById('editor-text-area-input');
  const addEventTo = (element, e, fn) => {
    element.addEventListener(e, fn, true);
  };

  for (let i = 0; i < clearEditorButtons.length; i++) {
    const btn = clearEditorButtons[i];

    addEventTo(btn, 'click', function(e) {
      editorTitleInput.value = '';
      editorTextAreaInput.value = '';
    });
  }
})();
