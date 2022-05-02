self.addEventListener('message', e => {
  console.log('worker run');
  console.log('Message received: ' + e);

  self.postMessage('ciao dal worker')
})