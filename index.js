#!/usr/bin/env node

// Simple argument handling for "hello" command
if (process.argv[2] === "hello") {
    console.log("Hello, world")
} else {
    console.log("Usage: npx edwinui@latest hello")
}
