import { forwardRef } from "react"
import { clsx } from "clsx"

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }