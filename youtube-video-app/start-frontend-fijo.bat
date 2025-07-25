@echo off
echo ====================================
echo      CURSOPIA FRONTEND - FIJO
echo ====================================
echo.

cd /d "c:\Users\USUARIO\Documents\Proyecto_unificado\EducationalApp\youtube-video-app"

echo Matando procesos en puertos 5173, 5174, 5175...
netstat -ano | findstr :5173 | findstr LISTENING | for /f "tokens=5" %%a in ('more') do taskkill /f /pid %%a 2>nul
netstat -ano | findstr :5174 | findstr LISTENING | for /f "tokens=5" %%a in ('more') do taskkill /f /pid %%a 2>nul
netstat -ano | findstr :5175 | findstr LISTENING | for /f "tokens=5" %%a in ('more') do taskkill /f /pid %%a 2>nul

echo Esperando 2 segundos...
timeout /t 2 >nul

echo Iniciando servidor frontend en puerto 5174...
npm run dev -- --port 5174

pause
