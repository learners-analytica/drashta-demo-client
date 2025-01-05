const fastAPIUrl = import.meta.env.VITE_ANALYTICS_PACKAGE_URL;
export async function executeQueryTrainAutoML(
    table:string,
    variables:string[],
    target:string,
    task:string,
    optimizationMetric:string,
    timeBudget:Number
) {
    return async (params:any) => {
        const res = await fetch(`${fastAPIUrl}/train-automl`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                variables, 
                target, 
                task, 
                optimizationMetric, 
                timeBudget,
                ...params 
            }),
          });
          const data = await res.json();
          return data;
    }
}
