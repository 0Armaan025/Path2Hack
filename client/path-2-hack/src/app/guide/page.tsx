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
  const [tiles, setTiles] =
    useState<{ id: number; content: string; x: number; y: number }[]>(
      initialTiles
    );
  const [draggingTile, setDraggingTile] = useState<{
    id: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTileContent, setSelectedTileContent] = useState("");

  const handleDragStart = (
    tile: { id: number; content: string; x: number; y: number },
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setDraggingTile({
      id: tile.id,
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
    setSelectedTileContent(tileContent);
    setIsModalOpen(true);
  };

  const renderArrows = () => {
    return tileConnections.map((connection, index) => {
      const fromTile = tiles.find((tile) => tile.id === connection.from);
      const toTile = tiles.find((tile) => tile.id === connection.to);
      if (!fromTile || !toTile) return null;

      const startX = fromTile.x + 96;
      const startY = fromTile.y + 48;
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

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTileContent("");
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-[#2c2c2c]"
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
          {/* {renderArrows()} */}
        </svg>

        {tiles.map((tile: any) => (
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

        {/* Guide Modal */}
        {/* Guide Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full text-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Guide
              </h2>
              <p className="mb-4">
                You’ve selected: <strong>{selectedTileContent}</strong>
              </p>
              <p className="mb-6 text-gray-300">
                This guide provides essential steps and tips on{" "}
                <strong>{selectedTileContent}</strong>. Double-click on any tile
                to access its specific guide, which will help you understand the
                purpose, key actions, and steps involved in this task. Feel free
                to explore each tile and gain insights on how to proceed
                effectively with your project.
              </p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HackersGuide;
