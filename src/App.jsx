import React, { useState } from 'react';
import { marked } from 'marked'; // Import marked
import './App.css';

function App() {
  const [content, setContent] =
    useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here is a [link to Google](https://www.google.com).

Inline code example: \`const x = 10;\`

\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- This is a list item.
- This is another list item.

> This is a blockquote.

![Alt text for image](https://via.placeholder.com/150)

**This text is bold.**
`);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const createMarkup = (content) => {
    const dirtyHTML = marked(content, { breaks: true, gfm: true });
    return { __html: dirtyHTML };
  };

  return (
    <div className="App">
      <h3>Markdown Editor</h3>
      <div className="editor-container">
        <textarea
          id="editor"
          style={{ width: '400px', height: '200px' }}
          value={content}
          onChange={handleInputChange}
          placeholder="Enter your markdown content here"
        />
      </div>
      <h3>Markdown Preview</h3>
      <div className="preview-container">
        <div id="preview" dangerouslySetInnerHTML={createMarkup(content)} />
      </div>
    </div>
  );
}

export default App;
