"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

const initialTiles = [
  { id: 1, content: "Learn React Basics", x: 50, y: 50 },
  { id: 2, content: "Understand Drag & Drop", x: 200, y: 100 },
  { id: 3, content: "Build a Kanban Board", x: 100, y: 300 },
  { id: 4, content: "Ace any Hackathon", x: 150, y: 200 },
  { id: 5, content: "Learn Next.js Basics", x: 400, y: 400 },
  { id: 6, content: "Git and GitHub", x: 450, y: 100 },
  { id: 7, content: "Deploy Project", x: 300, y: 200 },
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
  const [modalTitle, setModalTitle] = useState("");
  const [modalParagraph, setModalParagraph] = useState("");

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
    // Set the modal title and paragraph based on the tile content
    setSelectedTileContent(tileContent);
    switch (tileContent) {
      case "Learn React Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `To get started with React, first, set up your environment by installing Node.js and creating a new React project with npx create-react-app. React's syntax extension, JSX, allows you to write HTML-like syntax within JavaScript, making UI structures more readable. React applications are built using components, which are reusable UI blocks. Most commonly, these are created as functional components, although class components can also be used. Components become flexible with props, a feature that lets you pass data from parent components to their children. For managing dynamic data within a component, React provides state, commonly managed with the useState hook. User interactions like clicks can be managed using event handlers, while conditional rendering allows you to display different UI elements based on specific conditions. When dealing with lists of items, React requires you to assign unique keys to each list item for efficient re-rendering. For applications with multiple pages, react-router-dom provides seamless navigation, and for handling side effects like data fetching or timers, the useEffect hook is available in functional components. These basics form the foundation of React and are essential for building responsive, single-page applications.`
        );
        break;
      case "Understand Drag & Drop":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `A Kanban board can be built using HTML, CSS, and JavaScript by creating three columns for task stages (e.g., "To Do," "In Progress," and "Done"). Each column is represented by an HTML <div> containing an unordered list for tasks. Users can add tasks to the "To Do" column using an input field, and tasks can be moved between columns by clicking on them, with JavaScript handling task creation and movement. CSS is used to style the board, columns, and tasks, making it visually interactive. The functionality can be enhanced by adding persistence with localStorage, task removal options, task editing, or implementing drag-and-drop features for a more robust Kanban board.`
        );
        break;
      case "Build a Kanban Board":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `A Kanban board can be built using HTML, CSS, and JavaScript by creating three columns for task stages (e.g., "To Do," "In Progress," and "Done"). Each column is represented by an HTML <div> containing an unordered list for tasks. Users can add tasks to the "To Do" column using an input field, and tasks can be moved between columns by clicking on them, with JavaScript handling task creation and movement. CSS is used to style the board, columns, and tasks, making it visually interactive. The functionality can be enhanced by adding persistence with localStorage, task removal options, task editing, or implementing drag-and-drop features for a more robust Kanban board.`
        );
        break;
      case "Deploy Project":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Deploying a project involves preparing your application by ensuring it's production-ready (optimizing code, testing, etc.) and then choosing a deployment platform like Vercel, Netlify, Heroku, AWS, or GitHub Pages. For most front-end projects, platforms like Vercel and Netlify offer easy deployment by linking your GitHub repository, automatically deploying changes when you push to the main branch. For full-stack applications, platforms like Heroku or cloud providers like AWS require more configuration but provide greater flexibility. After deployment, you can configure a custom domain through your registrar and monitor the app using tools like Google Analytics or Sentry to track errors and performance.`
        );
        break;
      case "Ace any Hackathon":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Define what you wanna make-> just think about it, what you wanna make, what are you gonna solve with that.
          Plan on what features you can add, and what you can implement.
          Divide work:- divide work with your teammates to get the work done easily!
          UI/UX:- User Interface and User experience matter a lot in your hack, make sure to give some time to that.
          MVP:- a functional prototype or Minimum Viable Product (MVP) to demonstrate your idea.
          Presentation and Documentation:- showcasing it on devpost and pitching it in a demo video is super crucial, make sure to do that amazingly!`
        );
        break;
      case "Learn Next.js Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `To get started with Next.js, install Node.js and create a Next.js project. Next.js organizes pages based on the file structure in the pages folder, where each file becomes a route. It supports both Static Generation (SSG) for pages that don’t change often and Server-Side Rendering (SSR) for pages needing frequent data updates. Data fetching methods like getStaticProps and getServerSideProps make it easy to pull in data, while dynamic routing allows creating pages with variable paths. You can also create API routes within the pages/api directory to build serverless functions. Next.js supports various styling options, including CSS modules, global CSS, and Styled JSX. Use the built-in Image component for optimized, responsive images. Deployment is seamless on platforms like Vercel, which is ideal for Next.js projects. This structure and flexibility make Next.js a powerful choice for fast, modern web applications.`
        );
        break;
      case "Git and GitHub":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Git is a version control system that tracks changes in code, allowing developers to manage and revert to previous versions and work on different features through branching. GitHub, on the other hand, is a cloud-based platform that hosts Git repositories, making it easier for teams to collaborate on projects. GitHub provides tools like pull requests for code reviews, issues for tracking tasks or bugs, and actions for automating workflows. Together, Git and GitHub allow developers to work efficiently on code, manage versions, and collaborate seamlessly, making them essential tools in modern software development.`
        );
        break;
      default:
        break;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTileContent("");
    setModalTitle("");
    setModalParagraph("");
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

        {/* Guide Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
            <div className="bg-gray-800 p-10 rounded-xl shadow-lg max-w-lg w-full text-gray-200 transition-all ease-in-out duration-300 transform scale-110">
              <h2 className="text-3xl font-semibold text-gray-100 mb-4">
                {modalTitle}
              </h2>
              <p className="mb-6 text-gray-300">{modalParagraph}</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HackersGuide;
