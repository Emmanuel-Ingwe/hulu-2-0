

const Results = ({ results }) => {
    return (
        <div>
            {requests.map(result => (
                <Thumbnail />
            ))}
        </div>
    );
};

export default Results;