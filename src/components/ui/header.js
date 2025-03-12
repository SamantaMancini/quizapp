
export default function Header({number, text}) {
    return (
        <div className="text-left">
            <h1>{number}</h1>
            <p>{text}</p>
        </div>
    )
}