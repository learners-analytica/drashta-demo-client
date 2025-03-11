export async function postRequest<T>(url: string, body: Object, error:string): Promise<T> {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`Failed to request ${error}: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
}

export async function getRequest<T>(url: string, error: string): Promise<T> {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to request ${error}: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
}


