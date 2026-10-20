/*
Prepares the html pages for the application
Reads the content of each page and uses renderPage() 
to combine with the header and footer
Then exports for app.js
*/


/*
 * Prepares the HTML pages for the application.
 *
 * Loads each chapter and combines it with the shared
 * HTML components through renderPage().
 */

import fs from "node:fs";
import { renderPage } from "./templatingEngine.js";

function loadPage(filename, title) {
    const content = fs.readFileSync(`./pages/${filename}.html`, "utf8");
    return renderPage(content, title);
}

export const homePage = loadPage("home", "Home | Node.js Documentation");
export const javascriptPage = loadPage("javascript", "JavaScript Fundamentals");
export const functionsPage = loadPage("functions", "Functions & Loop Methods");
export const nodejsPage = loadPage("nodejs", "Node.js & NPM");
export const modulesPage = loadPage("modules", "Modules");
export const expressPage = loadPage("express", "Express & Servers");
export const restApiPage = loadPage("rest-api", "REST API & CRUD");
export const httpPage = loadPage("http", "HTTP & Communication");
export const frontendPage = loadPage("frontend", "Frontend & HTML");
export const securityPage = loadPage("security", "Security & Environment Variables");
export const renderingPage = loadPage("rendering", "Rendering & Redirection");
export const filesPage = loadPage("files", "Files & Async Code");
export const deploymentPage = loadPage("deployment", "Deployment & Tools");