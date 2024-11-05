<script src="go-debug.js"></script>
var myDiagram = new go.Diagram("myDiagramDiv");
// You can specify options in the Diagram's second argument
// These options not only include Diagram properties, but sub-properties, too.
const myDiagram =
  new go.Diagram("myDiagramDiv",
    { // enable Ctrl-Z to undo and Ctrl-Y to redo
      "undoManager.isEnabled": true
    });

myDiagram.model = new go.Model(
  [ // for each object in this Array, the Diagram creates a Node to represent it
    { text: "Alpha" },
    { text: "Beta" },
    { text: "Gamma" }
  ]);
  myDiagram.nodeTemplate =
  new go.Node()
    .add(
      new go.TextBlock()
        .bind("text") // TextBlock.text is bound to Node.data.text
    );
// Path: go-debug.js