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
  { id: 8, content: "Master JavaScript ES6", x: 50, y: 500 },
  { id: 9, content: "Learn TypeScript Basics", x: 550, y: 300 },
  { id: 10, content: "Intro to Node.js", x: 250, y: 450 },
  { id: 11, content: "Express.js API Setup", x: 200, y: 600 },
  { id: 12, content: "Database Basics with MongoDB", x: 600, y: 150 },
  { id: 13, content: "React State Management", x: 150, y: 550 },
  { id: 14, content: "UseEffect & Lifecycle Hooks", x: 350, y: 250 },
  { id: 15, content: "Create Reusable Components", x: 100, y: 650 },
  { id: 16, content: "Responsive Design with CSS", x: 700, y: 350 },
  { id: 17, content: "Integrate REST APIs", x: 200, y: 700 },
  { id: 18, content: "Understand Async/Await", x: 800, y: 250 },
  { id: 19, content: "Manage Forms in React", x: 300, y: 550 },
  { id: 20, content: "Learn Web Security Basics", x: 500, y: 650 },
  { id: 21, content: "Intro to Testing with Jest", x: 150, y: 750 },
  { id: 22, content: "Learn Docker Basics", x: 600, y: 450 },
  { id: 23, content: "Optimize for Performance", x: 400, y: 750 },
  { id: 24, content: "Explore Firebase", x: 300, y: 100 },
  { id: 25, content: "Learn GraphQL Basics", x: 250, y: 800 },
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
          `Drag-and-drop functionality can be achieved using HTML5 APIs or libraries like React DnD or react-beautiful-dnd. HTML5’s drag-and-drop API allows you to set draggable attributes on elements, listen to drag events, and handle drops with JavaScript. For more complex applications, libraries make it easy to manage drag actions and place dropped items into desired positions. Integrating drag-and-drop enhances UX, making interfaces more interactive, especially for organizing or moving elements like tasks or files.`
        );
        break;
      case "Build a Kanban Board":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `A Kanban board can be built using HTML, CSS, and JavaScript by creating three columns for task stages (e.g., "To Do," "In Progress," and "Done"). Each column is represented by an HTML <div> containing an unordered list for tasks. Users can add tasks to the "To Do" column using an input field, and tasks can be moved between columns by clicking on them, with JavaScript handling task creation and movement. CSS is used to style the board, columns, and tasks, making it visually interactive. The functionality can be enhanced by adding persistence with localStorage, task removal options, task editing, or implementing drag-and-drop features for a more robust Kanban board.`
        );
        break;
      case "Ace any Hackathon":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Define what you want to make, the problem it solves, and your solution's features. Plan with your team by dividing tasks. Focus on building a functional prototype (MVP) to showcase. UI/UX is crucial, so allocate time to make the interface clear and attractive. Finally, prepare a strong presentation and documentation on platforms like Devpost, and practice pitching it for the demo.`
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
      case "Deploy Project":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Deploying a project involves preparing your application by ensuring it's production-ready (optimizing code, testing, etc.) and then choosing a deployment platform like Vercel, Netlify, Heroku, AWS, or GitHub Pages. For most front-end projects, platforms like Vercel and Netlify offer easy deployment by linking your GitHub repository, automatically deploying changes when you push to the main branch. For full-stack applications, platforms like Heroku or cloud providers like AWS require more configuration but provide greater flexibility. After deployment, you can configure a custom domain through your registrar and monitor the app using tools like Google Analytics or Sentry to track errors and performance.`
        );
        break;
      case "Master JavaScript ES6":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `ES6, or ECMAScript 2015, introduced many useful features to JavaScript, such as arrow functions, let and const for variable declarations, template literals, default parameters, destructuring, and classes. Understanding these features is key to writing modern, concise, and efficient JavaScript code.`
        );
        break;
      case "Learn TypeScript Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `TypeScript is a superset of JavaScript that adds optional static typing, allowing you to catch errors early and improve code maintainability. With TypeScript, you can define data types for variables, function parameters, and return values. This helps with code readability, refactoring, and tool support.`
        );
        break;
      case "Intro to Node.js":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Node.js is a runtime that allows you to run JavaScript on the server side. It’s popular for building scalable network applications and APIs. With Node.js, you can handle asynchronous I/O using its non-blocking architecture, making it ideal for real-time applications like chat applications and streaming.`
        );
        break;
      case "Express.js API Setup":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Express.js is a minimal web framework for Node.js that simplifies building APIs and handling HTTP requests. Start by installing Express and setting up routes for your application. With Express, you can handle different HTTP methods, manage middleware for requests, and serve static files. It also helps with error handling and integrating with databases.`
        );
        break;
      case "Database Basics with MongoDB":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It's great for handling unstructured data and scaling horizontally. You can interact with MongoDB using the MongoDB Atlas service or install it locally. The most common operations include creating databases, collections, and documents, as well as querying, updating, and deleting documents.`
        );
        break;
      case "React State Management":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `State management in React is key to controlling data flow within an app. The useState hook is used for managing local component state, but for larger apps, state management libraries like Redux or Context API offer a more centralized approach. Redux uses actions, reducers, and a central store, while Context API provides a simpler, built-in solution for passing data between components.`
        );
        break;
      case "UseEffect & Lifecycle Hooks":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `The useEffect hook in React is used for side effects, such as data fetching, subscriptions, or manually changing the DOM. It runs after the render, and you can specify dependencies to control when it runs. Lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount are used in class components, but in functional components, useEffect replaces these methods.`
        );
        break;
      case "Create Reusable Components":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Creating reusable components in React allows for better code organization and reusability. These components can receive inputs via props, and by breaking down the UI into smaller, self-contained parts, you can maintain clean, scalable code. Focus on making components modular and encapsulated so they can be used in different parts of your app.`
        );
        break;
      case "Responsive Design with CSS":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Responsive design ensures that your application works well across various devices and screen sizes. CSS techniques such as media queries, flexible grid layouts, and viewport units allow you to create fluid designs. Using frameworks like Bootstrap or custom CSS Grid/Flexbox layouts also helps create responsive web applications.`
        );
        break;
      case "Integrate REST APIs":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `REST APIs allow web applications to interact with backend services using standard HTTP methods like GET, POST, PUT, and DELETE. You can integrate a REST API by using JavaScript's fetch function or libraries like Axios. Make sure to handle errors, manage responses, and display data in a user-friendly way.`
        );
        break;
      case "Understand Async/Await":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Async/Await is a syntax for handling asynchronous operations in JavaScript. Instead of using callbacks or promises, async functions enable you to write asynchronous code in a more synchronous-looking style, improving readability and error handling.`
        );
        break;
      case "Manage Forms in React":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Handling forms in React requires managing form elements' state. You can use the useState hook to track form input values and handle events like submitting the form. For larger forms, consider using form libraries like Formik or React Hook Form for easier validation and management.`
        );
        break;
      case "Learn Web Security Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Web security involves protecting web applications and their users from threats. Key concepts include encryption (SSL/TLS), user authentication and authorization (OAuth, JWT), and preventing attacks like XSS (Cross-site Scripting) and CSRF (Cross-Site Request Forgery). Best practices include using HTTPS, sanitizing user input, and securing API keys.`
        );
        break;
      case "Intro to Testing with Jest":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Jest is a testing framework for JavaScript that allows you to test functions and components in isolation. You can use Jest to write unit tests, integration tests, and snapshot tests. It integrates well with React and provides features like mocking, assertions, and test coverage reports.`
        );
        break;
      case "Learn Docker Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Docker is a tool that allows developers to package an application with its dependencies into a container that can run anywhere. With Docker, you can create lightweight, reproducible environments and eliminate issues related to differing local setups. Start by writing a Dockerfile that defines your container image and use Docker Compose for multi-container setups.`
        );
        break;
      case "Optimize for Performance":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Optimizing for performance involves reducing load times, minimizing reflows and repaints, and improving responsiveness. Use tools like Lighthouse to identify performance bottlenecks and strategies like lazy loading, code splitting, and caching to optimize your web application.`
        );
        break;
      case "Explore Firebase":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `Firebase is a backend-as-a-service platform that provides tools like real-time databases, authentication, cloud storage, and serverless functions. Firebase makes it easy to add powerful features to your app, such as real-time data synchronization, user authentication, and push notifications.`
        );
        break;
      case "Learn GraphQL Basics":
        setModalTitle(`${tileContent} Guide`);
        setModalParagraph(
          `GraphQL is a query language for APIs that enables clients to request exactly the data they need. Unlike REST, GraphQL allows clients to get data from multiple sources in a single request. You define a schema and resolvers on the server to handle queries, mutations, and subscriptions.`
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
