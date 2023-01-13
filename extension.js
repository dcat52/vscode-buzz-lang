// const vscode = require('vscode');

// /**
//  * @param {vscode.ExtensionContext} context
//  */
// function activate(context) {
//     // Register the "buzz" language
//     vscode.languages.register({ id: 'buzz' });

//     // Load the tmLanguage file
//     let grammar = vscode.languages.createTextmateGrammar(
//         require.resolve('./syntaxes/buzz.tmLanguage.json')
//     );
//     vscode.languages.setTextmateGrammar(grammar, { language: 'buzz' });
// }

//     // // Register a command that is invoked when the user types "buzz.run" in the command palette
//     // let disposable = vscode.commands.registerCommand('buzz.run', function () {
//     //     // Get the active editor
//     //     let editor = vscode.window.activeTextEditor;
//     //     if (!editor) {
//     //         vscode.window.showInformationMessage('No editor is active.');
//     //         return;
//     //     }

//     //     // Get the selected text
//     //     let selection = editor.selection;
//     //     let text = editor.document.getText(selection);

//     //     // Run the selected text as Buzz code
//     //     // (This is just an example, you would need to implement the actual code execution here)
//     //     let result = runBuzzCode(text);

const vscode = require('vscode');
vscode.languages.setLanguageConfiguration('buzz', {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: "#"
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"]
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"', notIn: ["string"] },
        { open: "'", close: "'", notIn: ["string", "comment"] }
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    indentationRules: {
        // ^(.*\*/)?\s*\}.*$
        decreaseIndentPattern: /^(.*\*\/)?\s*\}.*$/,
        // ^.*\{[^}"']*$
        increaseIndentPattern: /^.*\{[^}"']*$/
    }
});