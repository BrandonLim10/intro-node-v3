#!/usr/bin/env node
import fs from 'fs'
import http from 'http'

const note = process.argv[2]
const newNote = {
    content: note,
    id: Date.now()
}
