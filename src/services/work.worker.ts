
addEventListener('message', ({ data }) => {
  console.log('worker contattato')
  const response = `worker response to ${data}`;
  postMessage(response, null);
});