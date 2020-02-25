/**
 * @format
 * @flow
 */

type ISO8601 = string
type DateString = string
type Url = string
type Img = string

export type Episode = {
    id: number,
    name: string,
    air_date: DateString,
    episode: string,
    characters: string[],
    url: Url,
    created: ISO8601
}


type URLWithName = {
    name: string,
    ulr: Url
}


export type Character =   {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: URLWithName,
    location: URLWithName,
    image: Img,
    episode: string[],
    url: Url,
    created: ISO8601
}
