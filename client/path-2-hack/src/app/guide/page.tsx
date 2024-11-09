"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

const initialTiles = [
  { id: 1, content: "Learn React Basics", x: 50, y: 50 },
  { id: 2, content: "Understand Drag & Drop", x: 200, y: 100 },
  { id: 3, content: "Build a Kanban Board", x: 100, y: 300 },
  { id: 4, content: "Deploy Project", x: 300, y: 200 },
];


const tileConnections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

const HackersGuide = () => {
  const [tiles, setTiles] = useState(initialTiles);
  const [draggingTile, setDraggingTile] = useState<{
    id: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const handleDragStart = (
    tile: { id: number; x: number; y: number },
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const { id } = tile;
    e.preventDefault();
    setDraggingTile({
      id,
      offsetX: e.clientX - tile.x,
      offsetY: e.clientY - tile.y,
    });
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggingTile) return;

    setTiles((prevTiles) =>
      prevTiles.map((tile) =>
        tile.id === draggingTile.id
          ? {
              ...tile,
              x: e.clientX - draggingTile.offsetX,
              y: e.clientY - draggingTile.offsetY,
            }
          : tile
      )
    );
  };

  const handleDragEnd = () => {
    setDraggingTile(null);
  };

  const handleDoubleClick = (tileContent: string) => {
    alert(`Tile content: ${tileContent}`);
  };

  
  const renderArrows = () => {
    return tileConnections.map((connection, index) => {
      const fromTile = tiles.find((tile) => tile.id === connection.from);
      const toTile = tiles.find((tile) => tile.id === connection.to);
      if (!fromTile || !toTile) return null;

      const startX = fromTile.x + 96; // Adjust based on tile width
      const startY = fromTile.y + 48; // Adjust based on tile height
      const endX = toTile.x + 96;
      const endY = toTile.y + 48;

      return (
        <line
          key={index}
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke="white"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      );
    });
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gray-900"
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
    >
      <Navbar />
      <div className="flex-grow p-8 relative overflow-hidden">
        <h1 className="text-3xl font-semibold text-gray-100 mb-8 text-center">
          Hacker's Guide
        </h1>

        
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="white" />
            </marker>
          </defs>
          {/* {renderArrows()}  it aint working for now */}
        </svg>

        
        {tiles.map((tile) => (
          <div
            key={tile.id}
            onMouseDown={(e) => handleDragStart(tile, e)}
            onDoubleClick={() => handleDoubleClick(tile.content)}
            style={{
              transform: `translate(${tile.x}px, ${tile.y}px)`,
              boxShadow:
                draggingTile?.id === tile.id ? "0 0 10px 5px white" : "",
            }}
            className={`absolute w-48 p-4 bg-gray-800 text-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing ${
              draggingTile?.id === tile.id ? "border-2 border-white" : ""
            }`}
          >
            {tile.content}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HackersGuide;
