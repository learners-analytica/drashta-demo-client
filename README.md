# Drashta Client

![Drashta-Demo Client Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?title=Drashta-Demo+Client+Tech+Stack&lineCount=3&bg=%230D1117&badge=%23161B22&border=%2321262D&titleColor=%2358A6FF&line1=tailwindcss%2Ctailwindcss%2C06B6D4%3Bchartdotjs%2Cchart.js%2CFF6384%3Btabulator%2Ctabulator%2C3FB449%3B&line2=typescript%2Ctypescript%2C3178C6%3Bsvelte%2Csvelte%2CFF3E00%3B&line3=Bun%2CBun%2Cababab%3Bvite%2Cvite%2C646CFF%3Beslint%2Ceslint%2C4B32C3%3Bprettier%2Cprettier%2CF7B93E%3B)


Client for Drashta based on Sveltekit running on Bun

# Features
1. Dashboard System : Dashborad system based on chart.js, queries data and displays as chart configured in a json file
2. Database Schema Viewer : Allows viewing of Database tables, columns with metadata such as data type, min, max, avg and count of records
3. Model Generator : Generate Models using a simple form system, Select a table in Database Schema Viewer, Select variables to be modelled, orange colored button is the dependent and blue is independent variables, fill other details and select generate model
4. Model File viewer : View generated Models and use them to predict
5. Model Prediction : Load Models and predict by manully inputting data, automticlly detects model's input and their datatypes and creates a input table using tabulator and charts model predictions
