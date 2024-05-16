import React, { useState } from "react"
import TreatmentImage from "./TreatmentImage.astro"
import { Button, buttonVariants } from "./ui/button"

interface Props {
  title: string
  body: string
  href?: string
  image: string
  types?: string[]
}

export default function TreatmentCard({ title, body, href, image, types }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`relative overflow-hidden rounded-lg border bg-background p-2 hover:bg-muted hover:shadow transition-height duration-500 ${expanded ? "h-auto" : "h-[11.5rem]"}`}>
      <div className="flex min-h-[11,5rem] flex-col justify-between rounded-md p-5">
        <div className="mb-4 mx-auto">{/* <TreatmentImage image={image} /> */}</div>
        <div className="flex flex-col justify-between gap-2">
          <h3 className="font-bold text-primary">{title}</h3>
          <ul className={`list-disc marker:text-primary list-inside text-start ${expanded ? "block" : "hidden"}`}>
            {types?.map((type) => (
              <li key={type} className="text-muted-foreground">
                {type}
              </li>
            ))}
          </ul>
          <a className={`cursor-pointer ${buttonVariants({ variant: "link" })}`} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Esconder tipos" : "Saiba mais"}
          </a>
        </div>
      </div>
    </div>
  )
}
