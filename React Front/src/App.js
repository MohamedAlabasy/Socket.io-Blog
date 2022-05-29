import { useEffect } from 'react';
import io from 'socket.io-client';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from './logo.svg';



const URL = 'http://localhost:8888';
let socket = io(URL);

function App() {
  const handleNewUserMessage = (message) => {
    socket.emit('message', message);
    console.log(`New message incoming! ${message}`);
  };

  useEffect(() => {
    socket.on('new-message', (data) => {
      console.log(data);
      addResponseMessage(data);
    })
  }, []);

  return (
    <div className="App">
      < Widget handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Mohamed Alabasy Chat"
        subtitle="ITI 42"
      />
    </div>

  );
}

export default App;
