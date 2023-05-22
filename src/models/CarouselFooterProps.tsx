import { Dispatch, SetStateAction } from "react"

export type CarouselFooterProps ={
    setCurrentIndex: Dispatch<SetStateAction<number>>
    currentIndex: number
  }