export const colorMapFill: Record<string, string> = {
    'red': "rgba(255, 0, 0, 0.2)",
    'orange': "rgba(255, 165, 0, 0.2)",
    'yellow': "rgba(255, 255, 0, 0.2)",
    'green': "rgba(0, 128, 0, 0.2)",
    'blue': "rgba(0, 0, 255, 0.2)",
    'purple': "rgba(128, 0, 128, 0.2)",
    'cyan': "rgba(0, 255, 255, 0.2)",
    'pink': "rgba(255, 192, 203, 0.2)",
    'black': "rgba(0, 0, 0, 0.2)"
}

export const colorMapBorder: Record<string,string> = {
    'red': "rgba(255, 0, 0, 1)",
    'orange': "rgba(255, 165, 0, 1)",
    'yellow': "rgba(255, 255, 0, 1)",
    'green': "rgba(0, 128, 0, 1)",
    'blue': "rgba(0, 0, 255, 1)",
    'purple': "rgba(128, 0, 128, 1)",
    'cyan': "rgba(0, 255, 255, 1)",
    'pink': "rgba(255, 192, 203, 1)",
    'black': "rgba(0, 0, 0, 1)"
}

export const colorMapTints:Record<string,string> = {
    'red': "rgba(255, 0, 0, 0.2)",
    'orange': "rgba(255, 165, 0, 0.2)",
    'yellow': "rgba(255, 255, 0, 0.2)",
    'green': "rgba(0, 128, 0, 0.2)",
    'blue': "rgba(0, 0, 255, 0.2)",
    'purple': "rgba(128, 0, 128, 0.2)",
    'cyan': "rgba(0, 255, 255, 0.2)",
    'pink': "rgba(255, 192, 203, 0.2)",
    'black': "rgba(0, 0, 0, 0.2)"
}

export const colorMapTailWind:Record<string,string> = {
    'red': "bg-red-200",
    'orange': "bg-orange-200",
    'yellow': "bg-yellow-200",
    'green': "bg-green-200",
    'blue': "bg-blue-200",
    'purple': "bg-purple-200",
    'cyan': "bg-cyan-200",
    'pink': "bg-pink-200",
    'black': "bg-black"
}

export enum MainColor {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Cyan = "cyan",
    Pink = "pink",
    Black = "black"
}

export const returnColorStruct = (input_color:string):{fill:string, border:string} => {
    return {
        fill: colorMapFill[input_color],
        border: colorMapBorder[input_color]
    }
}

