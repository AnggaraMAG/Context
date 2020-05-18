import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);

  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: 4 }]);
  };

  useEffect(() => {
    console.log("use effect hook ran ", songs);
  }, [songs]);

  useEffect(() => {
    console.log("use effect hook ran ", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>+ 1 to {age}</button>
    </div>
  );
}
