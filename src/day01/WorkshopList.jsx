export default function WorkshopCard({
    title,
    trainer,
    duration,
    level,
    online
}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>Trainer: {trainer}</p>
            <p>Dauer: {duration} UE</p>
            <p>Level: {level}</p>
            <p>{online ? "Online möglich" : "Nur Präsenz"}</p>
        </article>
    );
}