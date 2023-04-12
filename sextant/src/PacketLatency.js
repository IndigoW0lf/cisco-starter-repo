import React, { useState, useEffect } from 'react';

function PacketLatency() {
  const [latency, setLatency] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');
    ws.onmessage = (event) => {
      const timestamp = parseInt(event.data);
      const latency = Date.now() - timestamp;
      setLatency(latency);
    };
  }, []);

  return (
    <div>{latency}</div>
  );
}

export default PacketLatency;
