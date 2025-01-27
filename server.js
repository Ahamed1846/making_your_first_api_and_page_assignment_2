const express = require('express');
const app = express();


const statusMessages = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: A resource has been successfully created as a result of the request.",
  204: "No Content: The request has been successfully processed, but no content is being returned.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: Authentication is required to access the resource.",
  403: "Forbidden: The server refuses to authorize the request.",
  404: "Not Found: The server has not found anything matching the request URI.",
  405: "Method Not Allowed: The HTTP method is not supported for this resource.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is temporarily overloaded or under maintenance.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code);

  if (!code || !statusMessages[code]) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request: Please provide a valid and supported status code as a query parameter."
    });
  }

  res.status(200).json({
    status: code,
    message: statusMessages[code]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
