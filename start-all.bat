@echo off
echo Start process
cd backend

echo Install NPM Packages for Backend:
call npm i

echo Build Backend
call tsc

echo backend Runing.
call pm2 start ecosystem.json

cd ..
cd frontend
echo Install NPM Packages for Frontend:
call npm i

call ng s -o

cd ..
echo Frontend Runing.
