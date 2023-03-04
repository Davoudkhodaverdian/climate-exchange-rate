export interface IWeather {
    message?: string
    cod?: string
    icon?: { url: string }
    name?: string
    country?: string
    main?: string
    temp?: number
    description?: string
}