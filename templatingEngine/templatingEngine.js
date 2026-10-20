/*
Server side template engine
Reads the shared html components, the header and footer
combines them with a content html, to make a complete html site.
*/


import fs from "node:fs";

const header = fs.readFileSync(
    new URL("../components/header.html", import.meta.url),
    "utf8"
);

const sidebar = fs.readFileSync(
    new URL("../components/sidebar.html", import.meta.url),
    "utf8"
);

const footer = fs.readFileSync(
    new URL("../components/footer.html", import.meta.url),
    "utf8"
);

export function renderPage(content, title = "Node.js Documentation") {
    const pageHeader = header.replace("{{PAGE_TITLE}}", title);

    return pageHeader
        + '<div class="page-layout">'
        + sidebar
        + content
        + '</div>'
        + footer;
}
