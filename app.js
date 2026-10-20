/*
Entry point for the app.
Sets up express, serves static files and defines the routes.
*/

import express from "express";
import * as pages from "./templatingEngine/pages.js";

const app = express();
const PORT = 8080;

app.use(express.static("public"));

const routes = {
    "/": pages.homePage,
    "/javascript": pages.javascriptPage,
    "/functions": pages.functionsPage,
    "/nodejs": pages.nodejsPage,
    "/modules": pages.modulesPage,
    "/express": pages.expressPage,
    "/rest-api": pages.restApiPage,
    "/http": pages.httpPage,
    "/frontend": pages.frontendPage,
    "/security": pages.securityPage,
    "/rendering": pages.renderingPage,
    "/files": pages.filesPage,
    "/deployment": pages.deploymentPage
};

for (const [route, page] of Object.entries(routes)) {
    app.get(route, (req, res) => {
        res.send(page);
    });
}

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Server is running on port", PORT);
});