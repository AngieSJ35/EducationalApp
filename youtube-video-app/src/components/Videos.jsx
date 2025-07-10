import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    api.get('/videos')
      .then(res => setVideos(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(v => (
          <li key={v._id || v.id}>{v.titulo || v.title}</li>
        ))}
      </ul>
    </div>
  );
}
