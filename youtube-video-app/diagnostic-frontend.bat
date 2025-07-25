@echo off
echo ====================================
echo    DIAGNÓSTICO FRONTEND CURSOPIA
echo ====================================
echo.

cd /d "c:\Users\USUARIO\Documents\Proyecto_unificado\EducationalApp\youtube-video-app"

echo Verificando estructura de archivos...
if exist "package.json" (
    echo ✅ package.json encontrado
) else (
    echo ❌ package.json NO encontrado
)

if exist "src" (
    echo ✅ Carpeta src encontrada
) else (
    echo ❌ Carpeta src NO encontrada
)

if exist "src\main.jsx" (
    echo ✅ main.jsx encontrado
) else (
    echo ❌ main.jsx NO encontrado
)

if exist "node_modules" (
    echo ✅ node_modules encontrado
) else (
    echo ❌ node_modules NO encontrado - ejecutando npm install...
    npm install
)

echo.
echo Verificando contenido de package.json...
type package.json

echo.
echo ====================================
pause
