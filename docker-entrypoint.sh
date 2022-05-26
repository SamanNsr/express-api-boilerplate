#!/usr/bin/env sh
# if arguments passed, execute them
# bring up an instance of project otherwise

if [ $# -gt 0 ]; then
    INPUT=$@
    sh -c "$INPUT"
else
    exec npm run start
fi
