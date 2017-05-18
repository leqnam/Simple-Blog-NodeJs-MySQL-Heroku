CLS
@echo off
TITLE Heroku Auto Deployment
ECHO.

ECHO ...
cd cnpm-hutech
npm install
npm start
heroku local web
echo. app run on http://localhost:5000/
pause