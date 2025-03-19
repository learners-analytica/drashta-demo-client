export const sqlTypesMap: Record<string, string> = {
    "int": "number",
    "float": "number",
    "string": "string",
    "date": "datetime",  // Change to "datetime" (Tabulator's expected value)
    "bool": "boolean",
    "real": "number",
    "double": "number",
    "timestamp": "datetime"  // Change to "datetime"
};
