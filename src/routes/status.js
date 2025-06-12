const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const protocol = req.protocol;
  const host = req.get('host');
  const url = `${protocol}://${host}/`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>REST API Status</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background: linear-gradient(120deg, #1f1f1f, #111);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            color: #fff;
          }

          .status-box {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-radius: 16px;
            padding: 2rem 3rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
            animation: fadeIn 0.6s ease-in-out;
          }

          .status-box .method {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #00ffe7;
          }

          a {
              color: #80cbc4;
              text-decoration: underline;
          }

          .status-box .url {
            font-size: 1rem;
            color: #f1f1f1;
            word-wrap: break-word;
          }

          .background-glow {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
            background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0, 255, 255, 0.1), transparent 80%);
            transition: background 0.2s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

        </style>
        <script>
          document.addEventListener('mousemove', e => {
            const glow = document.querySelector('.background-glow');
            if (glow) {
              glow.style.setProperty('--x', e.clientX + 'px');
              glow.style.setProperty('--y', e.clientY + 'px');
            }
          });
        </script>
      </head>
      <body>
        <div class="background-glow"></div>
        <div class="status-box">
          <div class="method">Howdy, your REST API is Online!</div>
          <div class="url" style="margin-top:20px;">Hosted at: <strong>${url}</strong></div>
          <div class="url" style="margin-top:50px;"><a href="/api/v1/docs">Docs</a></div>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
