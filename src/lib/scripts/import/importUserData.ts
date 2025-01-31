import type { chartConfig } from "$lib/types/user/dashboard";

const userConfigSuffix = import.meta.env.USER_CONFIG_SUFFIX
export function importUserDashboardData():chartConfig[]{
    const userDashboardConfig = JSON.parse(localStorage.getItem(`${userConfigSuffix}Dashboard`) || '{}') as chartConfig[]
    return userDashboardConfig
}

