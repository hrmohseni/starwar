#!/bin/bash

@echo off
echo "Start process"
cd backend

echo "Install NPM Packages for Backend:"
npm i

echo "Build Backend"
tsc

echo "backend Runing:"
pm2 start ecosystem.json

cd ..
cd frontend
echo "Install NPM Packages for Frontend:"
npm i

ng s -o

cd ..
echo "Frontend Runing."