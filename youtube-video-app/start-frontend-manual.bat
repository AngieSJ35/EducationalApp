@echo off
echo ====================================
echo      CURSOPIA FRONTEND - MANUAL
echo ====================================
echo.

cd /d "c:\Users\USUARIO\Documents\Proyecto_unificado\EducationalApp\youtube-video-app"

echo Verificando dependencias...
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
)

echo.
echo Iniciando servidor de desarrollo...
echo.
echo ✅ Frontend estará disponible en: http://localhost:5173
echo.
echo IMPORTANTE: NO CIERRES ESTA VENTANA
echo.
npm run dev
