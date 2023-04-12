import React, { useState, useEffect } from 'react';

function IpAddress(props) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const url = props.type === 'ipv4'
          ? 'https://api.ipify.org'
          : 'https://api6.ipify.org';

        const response = await fetch(url);
        const data = await response.text();
        setIpAddress(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchIpAddress();
  }, [props.type]);

  return (
    <div>
      {props.type === 'ipv4' && <div>{ipAddress}</div>}
      {props.type === 'ipv6' && <div>{ipAddress}</div>}
    </div>
  );
}

export default IpAddress;
