import { Photo } from "./photo"


export interface Member {
    id: number
    userName: string
    photoUrl: string
    age: number
    knowAs: any
    created: string
    lastActive: string
    gender: string
    introduction: string
    lookingFor: any
    interests: string
    city: string
    country: string
    photos: Photo[]
  }
  
