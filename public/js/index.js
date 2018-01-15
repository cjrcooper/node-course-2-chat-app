
  var socket = io();
  
  socket.on('connect', function () {
    console.log('connected to server');
    
    socket.emit('createMessage', {
      from: 'Andrew',
      text: 'Yep that works for me!'
    })
  });
  
  
  socket.on('disconnect', function () {
    console.log('server has disconnected');
  })
  
  socket.on('newMessage', function (message) {
    console.log('newMessage', message);
  });