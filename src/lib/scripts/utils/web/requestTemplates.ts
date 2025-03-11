import { postRequest, getRequest } from "./request";
import { PUBLIC_BRIDGE_SERVER, PUBLIC_ANALYTICS_SERVER } from '$env/static/public';

export async function bridgePostRequest<T>(service: string, body: Object, error: string): Promise<T> {
    const url = `http://${PUBLIC_BRIDGE_SERVER}/${service}`;
    return postRequest<T>(url, body, error);
}

export async function bridgeGetRequest<T>(service: string, error: string): Promise<T> {
    const url = `http://${PUBLIC_BRIDGE_SERVER}/${service}`;
    return getRequest<T>(url, error);
}

export async function analyticsPostRequest<T>(service: string, body: Object, error: string): Promise<T> {
    const url = `http://${PUBLIC_ANALYTICS_SERVER}/${service}`;
    return postRequest<T>(url, body, error);
}

export async function analyticsGetRequest<T>(service: string, error: string): Promise<T> {
    const url = `http://${PUBLIC_ANALYTICS_SERVER}/${service}`;
    return getRequest<T>(url, error);
}
