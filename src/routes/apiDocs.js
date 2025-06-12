const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../docs/api-docs.md');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Could not load documentation.');
    }

    const htmlContent = marked.parse(data);

    // Extract links from markdown headings (like ## GET /api/v1/users)
    const headings = [...htmlContent.matchAll(/<h2.*?>(.*?)<\/h2>/g)];
    const links = headings.map(match => {
      const title = match[1];
      const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return `<li><a href="#${id}">${title}</a></li>`;
    });

    // Replace headings with IDs so scroll targets work
    const contentWithAnchors = htmlContent
    .replace(/<h2>(.*?)<\/h2>/g, (match, title) => {
        const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        return `<h2 id="${id}">${title}</h2>`;
    })
    .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
    // Escape HTML entities so they're displayed as code
    const escapedCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    return `
        <div class="code-block-container">
            <pre><code>escaped content here</code></pre>
            <button class="copy-button">Copy</button>
        </div>
    `;
    });



    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>API Documentation</title>
          <style>
            /* Custom Scrollbar */
            ::-webkit-scrollbar {
            width: 10px;
            height: 8px;
            }

            ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
            background: rgba(0, 255, 231, 0.3);
            border-radius: 10px;
            border: 2px solid rgba(0, 0, 0, 0.1);
            }

            ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 255, 231, 0.6);
            }

            /* Firefox */
            * {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 255, 231, 0.3) rgba(255, 255, 255, 0.05);
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              scroll-behavior: smooth;
            }

            body {
              font-family: system-ui, sans-serif;
              background: #0e0e0e;
              color: #f1f1f1;
              display: flex;
              gap: 2rem;
              padding: 2rem;
            }

            .background-glow {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0, 255, 255, 0.1), transparent 80%);
              pointer-events: none;
              z-index: 0;
              transition: background-position 0.1s;
            }

            .sidebar {
              flex: 0 0 250px;
              backdrop-filter: blur(16px);
              background: rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              padding: 1rem;
              height: fit-content;
              position: sticky;
              top: 2rem;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            }

            .sidebar h3 {
            font-weight: 500;
              margin-bottom: 1rem;
              color: #00ffe7;
            }

            .sidebar ul {
              list-style: none;
            }

            .sidebar li {
              margin: 0.5rem 0;
            }

            li {
              list-style: none;
              margin: 0.5rem 0;
            }

            .sidebar a {
              text-decoration: none;
              color: #80cbc4;
              transition: color 0.3s;
            }

            .sidebar a:hover {
              color: #ffffff;
            }

            .docs-container {
              flex: 1;
              backdrop-filter: blur(16px);
              background: rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              padding: 2rem;
              overflow-x: auto;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            }

            h1, h2, h3 {
            font-weight: 400;
              color: #00ffe7;
              margin-top: 1.5rem;
            }

            h1 {
            font-weight: 600;
            font-size: 1.3rem;
            }   

            h2 {
                display: inline-block;
                background: rgba(19, 7, 7, 0.36);
                padding: 0.5rem;
                font-size: 1rem;
                border-radius: 6px;
            }   

            pre {
              background:rgba(19, 7, 7, 0.36);
              padding: 1rem;
              border-radius: 8px;
              overflow-x: auto;
              margin-top: 1rem;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }

            code {
              color: #f78c6c;
              font-family: monospace;
            }

            a {
              color: #00ffe7;
            }

            .code-block-container {
                position: relative;
                margin-bottom: 1rem;
            }

            .code-block-container pre {
                overflow: auto;
                padding: 1rem;
                background: #1e1e1e;
                color: #dcdcdc;
                border-radius: 6px;
            }

            .copy-button {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background: rgba(255, 255, 255, 0.1);
                color: #00ffe7;
                border: none;
                padding: 0.3rem 0.6rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.8rem;
                transition: background 0.3s, color 0.3s;
                z-index: 10;
            }

            .copy-button:hover {
            background: rgba(255, 255, 255, 0.2);
            color: #ffffff;
            }
          </style>
          <script>
            // Cursor glow effect
            document.addEventListener('mousemove', e => {
              const glow = document.querySelector('.background-glow');
              if (glow) {
                glow.style.setProperty('--x', e.clientX + 'px');
                glow.style.setProperty('--y', e.clientY + 'px');
              }
            });
            // Copy code button functionality
            document.addEventListener('DOMContentLoaded', () => {
                const copyButtons = document.querySelectorAll('.copy-button');
                copyButtons.forEach(button => {
                    button.addEventListener('click', () => {
                    const codeBlock = button.previousElementSibling.querySelector('code');
                    const codeText = codeBlock.innerText;

                    navigator.clipboard.writeText(codeText)
                        .then(() => {
                        button.textContent = 'Copied!';
                        setTimeout(() => {
                            button.textContent = 'Copy';
                        }, 2000);
                        })
                        .catch(err => {
                        console.error('Failed to copy text: ', err);
                        });
                    });
                });
                });

                // Smooth scroll for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                    });
                });
            });
          </script>
        </head>
        <body>
          <div class="background-glow"></div>
          <div class=""></div>
          <aside class="sidebar">
            <h3>Resources</h3>
            <ul>
              ${links.join('')}
            </ul>
          </aside>
          <div class="docs-container">
            ${contentWithAnchors}
          </div>
        </body>
      </html>
    `);
  });
});

module.exports = router;
