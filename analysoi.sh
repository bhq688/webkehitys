#!/bin/bash

echo "Detected languages:" > analysis_report.txt

# Kielten tunnistus
find . -type f -name "*.py" | grep -q . && echo "- Python" >> analysis_report.txt
find . -type f -name "*.java" | grep -q . && echo "- Java" >> analysis_report.txt
find . -type f -name "*.js" | grep -q . && echo "- JavaScript" >> analysis_report.txt
find . -type f -name "*.ts" | grep -q . && echo "- TypeScript" >> analysis_report.txt


echo "" >> analysis_report.txt
echo "Design patterns detected:" >> analysis_report.txt


grep -r "getInstance" . > /dev/null && echo "- Singleton" >> analysis_report.txt
grep -r "create[A-Z]" . > /dev/null && echo "- Factory Method" >> analysis_report.txt
grep -r "notify" . > /dev/null && echo "- Observer" >> analysis_report.txt
grep -r "Strategy" . > /dev/null && echo "- Strategy" >> analysis_report.txt
grep -r "Decorator" . > /dev/null && echo "- Decorator" >> analysis_report.txt

# TULOSTETAAN
cat analysis_report.txt