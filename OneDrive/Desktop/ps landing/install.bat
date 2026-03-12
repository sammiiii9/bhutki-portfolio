@echo off
echo ========================================
echo Space Training for Kids - Installation
echo ========================================
echo.

echo [1/3] Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed
    pause
    exit /b %errorlevel%
)
echo Backend dependencies installed successfully!
echo.

echo [2/3] Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed
    cd ..
    pause
    exit /b %errorlevel%
)
echo Frontend dependencies installed successfully!
cd ..
echo.

echo [3/3] Setup complete!
echo.
echo ========================================
echo Next Steps:
echo ========================================
echo 1. Make sure MongoDB is running
echo 2. Update .env file with your MongoDB URI
echo 3. Run: npm run dev
echo.
echo For detailed instructions, see SETUP.md
echo ========================================
pause
