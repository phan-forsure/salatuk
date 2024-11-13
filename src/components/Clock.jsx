import React from 'react'

export default function Clock() {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const hours = date.getHours() + 1
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return (
        <section className="clock comp">
            <p className="text-4xl w-full text-center">
                {hours.toString().length === 2 ? hours : "0" + hours}
                :{minutes.toString().length === 2 ? minutes : "0" + minutes}
                :{seconds.toString().length === 2 ? seconds : "0" + seconds}
            </p>
            <p className="w-full text-center">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
        </section>
    )
}
