export const sqlTypesMap: Record<string, string> = {
    "int": "number",
    "float": "number",
    "string": "string",
    "date": "datetime",  // Change to "datetime" (Tabulator's expected value)
    "bool": "tickCross",
    "real": "number",
    "double": "number",
    "timestamp": "datetime",  // Change to "datetime"
    "double precision" : "number",
    "text" : "textarea"
};

export const sqlTypeIconMaps : Record<string,string> ={
    "int": "bx bx-bar-chart",
    "float": "number",
    "string": "bx bx-text",
    "date": "datetime",  // Change to "datetime" (Tabulator's expected value)
    "bool": "tickCross",
    "real": "number",
    "double": "number",
    "timestamp": "datetime",  // Change to "datetime"
    "double precision" : "number",
    "text" : "textarea"
}
