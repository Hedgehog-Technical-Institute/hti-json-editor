export interface Game {
  id: number
  slug: string
  title: string
  thumbnail: string
  trailers: string[]
  brief: string
  authors: Record<string, string>
  description: string[]
  url: {
    forum?: string
    download?: string
    [key: string]: string | number | undefined
  }
  screenshots: string[]
}

export interface EventData {
  eventId: string
  name: string
  year: number
  games: Game[]
}
