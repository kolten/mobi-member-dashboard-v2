#!/bin/bash
npm run-script build
serve -s build & lt --port 5000 --print-requests