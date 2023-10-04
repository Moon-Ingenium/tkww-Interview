export default function MainSection({
    className,
    title,
    description,
    children,
}) {
    return (
        <section id='main'>
            <div className='container'>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
                <div className={className}>{children}</div>
            </div>
        </section>
    );
}
