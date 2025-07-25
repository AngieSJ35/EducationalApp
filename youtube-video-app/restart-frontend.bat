@echo off
echo ====================================
echo    LIBERAR PUERTO 5173 Y REINICIAR
echo ====================================
echo.

echo Buscando procesos en puerto 5173...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do (
    echo Terminando proceso %%a en puerto 5173
    taskkill /f /pid %%a 2>nul
)

echo.
echo Puerto 5173 liberado. Iniciando frontend...
echo.

cd /d "c:\Users\USUARIO\Documents\Proyecto_unificado\EducationalApp\youtube-video-app"

npm run dev
