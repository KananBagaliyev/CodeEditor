
function update()
{
	var iframe = document.getElementById('iframe').contentWindow.document;

	iframe.open();
	iframe.write(editor.getValue());
	iframe.close();
}

function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>

</html>`,1);

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  if (!window.matchMedia("(min-width: 768px)").matches) {
    editor.setOptions({
      fontSize: "12pt",
      showLineNumbers: true,
      showGutter: false,
      vScrollBarAlwaysVisible:true,
      enableBasicAutocompletion: false, enableLiveAutocompletion: false
    });
}
else{
  editor.setOptions({
    fontSize: "16pt",
    minLines: 2,
    showLineNumbers: true,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });
}
  

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();
  