@echo off
echo ====================================
echo    TEST SIMPLE - CURSOPIA FRONTEND
echo ====================================
echo.

cd /d "c:\Users\USUARIO\Documents\Proyecto_unificado\EducationalApp\youtube-video-app"

echo Creando backup del main.jsx original...
copy src\main.jsx src\main-original.jsx

echo Usando versión simple para test...
copy src\main-simple.jsx src\main.jsx

echo.
echo Iniciando con versión simple...
echo ✅ Debería funcionar en: http://localhost:5173 o 5174
echo.
echo IMPORTANTE: NO CIERRES ESTA VENTANA
echo.
npm run dev

pause

echo.
echo Restaurando versión original...
copy src\main-original.jsx src\main.jsx
