CLS
@echo off
TITLE Heroku Auto Deployment
ECHO.

ECHO ...
cd cnpm-hutech
git add .
git commit -am "Build triggered on Heroku..."
git push heroku master
heroku open
exit