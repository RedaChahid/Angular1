@echo off

echo Initialisation du dépôt Git...
git init

echo Ajout des fichiers au dépôt...
git add .

echo Commit initial...
git commit -m "Premier commit"

REM Remplacez ces valeurs par vos informations GitHub
set USERNAME=RedaChahid
set REPO=Angular1

echo Ajout du repository distant...
git remote add origin https://github.com/%USERNAME%/%REPO%.git

echo Push vers GitHub...
git push -u origin master

echo Terminé. Votre projet a été initialisé et poussé vers GitHub.
pause
