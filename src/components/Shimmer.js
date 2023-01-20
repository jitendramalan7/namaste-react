const Shimmer = () => {
    return (
        <div className="shimmer-list">
            {
                Array(15).fill("").map((e) => (
                    <div className="shimmer-card">
                        <div className="shimmer-img stroke animate"></div>
                        <div className="shimmer-title stroke animate"></div>
                        <div className="shimmer-tags stroke animate "></div>
                        <div className="shimmer-details stroke animate "></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer;