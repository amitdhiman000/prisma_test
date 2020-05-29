import express from "express";
const app = express();

// configure server
const server = app.listen(9000, () => {
    console.log(`🚀 Express server running at → PORT ${server.address().port}`);
});

import graphql_controller from "./graphql";
app.use('/', graphql_controller);