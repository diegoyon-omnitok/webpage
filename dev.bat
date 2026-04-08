@echo off
cd /d "%~dp0"
echo Iniciando Omnitok en http://localhost:3000
"%~dp0node_modules\.bin\next.cmd" dev --webpack
