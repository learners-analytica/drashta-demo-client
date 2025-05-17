# Drashta Client

![Svelte](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)
![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Bun](https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df)


Client for Drashta based on Sveltekit running on Bun

# Features
1. Dashboard System : Dashborad system based on chart.js, queries data and displays as chart configured in a json file
2. Database Schema Viewer : Allows viewing of Database tables, columns with metadata such as data type, min, max, avg and count of records
3. Model Generator : Generate Models using a simple form system, Select a table in Database Schema Viewer, Select variables to be modelled, orange colored button is the dependent and blue is independent variables, fill other details and select generate model
4. Model File viewer : View generated Models and use them to predict
5. Model Prediction : Load Models and predict by manully inputting dta, automticlly detects model's input and their datatypes as well as charts them
