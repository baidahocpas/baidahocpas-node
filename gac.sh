#!/bin/bash

commit_msg=$1

if [[ -n "$commit_msg" ]]; then
    git add .
    git commit -m "$commit_msg"
    git push
else
    echo "ERROR: Please include a commit message as an argument string."
fi
