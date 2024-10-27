export const predefinedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Previewer Test</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
      color: #212529;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 25px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    h1 {
      color: #495057;
      text-align: center;
      font-size: 2.5em;
    }
    p {
      line-height: 1.7;
      font-size: 1.1em;
      color: #6c757d;
    }
    ul, ol {
      margin-left: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 1em;
    }
    table, th, td {
      border: 1px solid #dee2e6;
    }
    th, td {
      padding: 12px;
      text-align: center;
    }
    th {
      background-color: #f1f3f5;
      color: #495057;
    }
    .image {
      width: 100%;
      max-width: 350px;
      margin: 20px auto;
      display: block;
      border-radius: 10px;
    }
    .link {
      color: #007bff;
      text-decoration: none;
      font-size: 1.2em;
    }
    .link:hover {
      text-decoration: underline;
    }
    /* Media Query for smaller screens */
    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
      }
      table {
        font-size: 0.9em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to HTML Previewer</h1>
    <p>This is a sample HTML document to test the HTML Previewer application. Below are examples of various HTML elements:</p>
    
    <h2>Headings</h2>
    <h3>Sub-heading 1</h3>
    <h4>Sub-heading 2</h4>
    <h5>Sub-heading 3</h5>
    
    <h2>Paragraphs</h2> 
    <p>This is a simple paragraph. It contains some <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.</p>
    
    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    
    <h3>Ordered List</h3>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
    
    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
        </tr>
      </tbody>
    </table>
    
    <h2>Image</h2>
    <img src="https://via.placeholder.com/350" alt="Sample Image" class="image">
    
    <h2>Link</h2>
    <a href="https://www.example.com" class="link" target="_blank">Visit Example.com</a>
  </div>
</body>
</html>
`;
