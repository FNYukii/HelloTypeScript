function ReadScreen() {

    const fruits: string[] = ["apple", "orange"]
    const num: number = 3.2

    return (
        <main>
            <div className="large-container">
                <h2>Read</h2>

                <p>{fruits[0]}</p>
                <p>{num}</p>
            </div>
        </main>
    )
}

export default ReadScreen