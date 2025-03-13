
export default function Header({number, text, position}) {
    const textPosition = {
        center: "text-center",
        left: "text-left"
    }

    return (
        <div className={`gap-1.5 flex flex-col ${textPosition[position]}`}>
            <h2 className="text-2xl font-semibold">{number}</h2>
            <p className="text-lg">{text}</p>
        </div>
    )
}