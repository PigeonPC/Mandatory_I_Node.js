/*
Server side template engine
Reads the shared html components, the header and footer
combines them with a content html, to make a complete html site.
*/

import fs from "node:fs";

const header = fs.readFileSync("./components/header.html", "utf8");
const sidebar = fs.readFileSync("./components/sidebar.html", "utf8");
const footer = fs.readFileSync("./components/footer.html", "utf8");

export function renderPage(content, title = "Node.js Documentation") {
    const pageHeader = header.replace("{{PAGE_TITLE}}", title);

    return pageHeader
        + '<div class="page-layout">'
        + sidebar
        + content
        + '</div>'
        + footer;
}