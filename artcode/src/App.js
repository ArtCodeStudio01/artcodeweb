import React from "react";
import "./App.css";
import YoutubeEmbed from "./components/ytembed";

function App() {
  const cards = [
    {
      id: 1,
      title: "youtube1",
      content: "this is vdo1",
      url: "https://picsum.photos/200",
      yturl:'Yp6Nx6X7l68',
      alt: "photo1",
    },
    {
      id: 2,
      title: "youtube2",
      content: "this is vdo2",
      url: "https://picsum.photos/200?random=2",
      yturl:'w8axWgSqdUA',
      alt: "photo2",
    },
    {
      id: 3,
      title: "youtube3",
      content: "this is vdo3",
      url: "https://picsum.photos/200?random=3",
      yturl:'PIkssq6JhwI',
      alt: "photo3",
    },
    {
      id: 4,
      title: "youtube4",
      content: "this is vdo4",
      url: "https://picsum.photos/200?random=4",
      yturl:'Ed-yxvpfx8w',
      alt: "photo4",
    },
    {
      id: 5,
      title: "youtube5",
      content: "this is vdo5",
      url: "https://picsum.photos/200?random=5",
      yturl:'6gA1D_qFPIY',
      alt: "photo5",
    },
    {
      id: 6,
      title: "youtube6",
      content: "this is vdo6",
      url: "https://picsum.photos/200?random=6",
      yturl:'zPSAsL-xbI4',
      alt: "photo6",
    },

  ];
  const courseList = [
    {
      id: 1,
      title: "This is the first in list",
      content: "what should contain here",
    },
  ];

  const Pathway = [
    {
      id: 1,
      title: "Make a game in Roblox Studio from scratch",
      content: "...",
    },
    { id: 2, title: "Building Responsive Websites", content: "..." },
    { id: 3, title: "Exploring ES6 Features", content: "..." },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ opacity: 0 }}>ArtCode</h1>
      </header>
      <div id="cards">
      
          {cards.map((vdos) => (
            <div id="card">
              <h3>{vdos.title}</h3>
             
      <YoutubeEmbed embedId={vdos.yturl} />
              <h4>{vdos.content}</h4>
            </div>
          ))}
        
      </div>

      <main id="list">
        <section>
          <h2>Creative Tech</h2>
          <ul>
            {courseList.map((list) => (
              <li key={list.id}>
                <a href={`/lessons/${list.id}`}>{list.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>VDOs</h2>
          <ul>
            {Pathway.map((post) => (
              <li key={post.id}>
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Learning Pathways</h2>
          <ul>
            {Pathway.map((post) => (
              <li key={post.id}>
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 ArtCode - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
