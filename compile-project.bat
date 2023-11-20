CD compiler
DEL /Q *.*
CD..
REM npx tsc src/app.tsx --jsx preserve --outDir ./compiler
npx tsc
