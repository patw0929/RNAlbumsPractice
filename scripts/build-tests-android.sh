#!/bin/bash
# if [[ $TRAVIS ]]; then
# 	CONFIGURATION=Release
# else
# 	CONFIGURATION=Debug
# fi;
echo "***** Building $CONFIGURATION configuration *****"
cd android && ./gradlew assembleRelease
