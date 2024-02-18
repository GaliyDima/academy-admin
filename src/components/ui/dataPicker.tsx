"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"

interface IDataPicker {
    title?: string
    className?: string
}

export const DatePicker: React.FC<IDataPicker> = ({ title, className }) => {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover >
            <PopoverTrigger asChild className="border-slate-300 rounded ">
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[200px] justify-start text-left font-normal",
                        !date && "text-muted-foreground", className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{title}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
