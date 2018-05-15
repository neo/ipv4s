#!/usr/bin/env node
const ipv4s = require("./index")(true);
ipv4s.forEach(ip => console.log(ip));
