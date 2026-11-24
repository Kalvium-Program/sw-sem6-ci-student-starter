#!/usr/bin/env bash
# Simulates a teammate's change: sets the hackathon's seat count to 0.
# The app's tests should catch this. After committing, undo it with:
#   git checkout main -- events-api/events.js
set -eu
file="events-api/events.js"
sed 's/Inter-College Hackathon'"'"', seats: 120/Inter-College Hackathon'"'"', seats: 0/' "$file" > "$file.tmp"
mv "$file.tmp" "$file"
echo "Changed the hackathon seat count to 0 in $file"
