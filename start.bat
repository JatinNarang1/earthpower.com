@echo off
echo ========================================
echo    Earth Power Website - Quick Start
echo ========================================
echo.

echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies.
    echo Please make sure Node.js and npm are installed.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.
echo Starting development server...
echo.
echo ----------------------------------------
echo Website will be available at:
echo http://localhost:3000
echo ----------------------------------------
echo.

call npm run dev
