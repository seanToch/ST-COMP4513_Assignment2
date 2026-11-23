
const BrowsePages = (props) => {
    // Creates Array With The Numbered Pages
    const pageNumbers = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }

    // If Not Enough Products For Multiple Pages
    if (props.totalPages <= 1) {
        return null;
    }

    //Returns Page Nav Buttons Calling the Page Change Function
    return (
        <nav className="broswsepages" aria-label="broswsepages">
            <button
                onClick={() => props.onPageChange(props.currentPage - 1)}
                disabled={props.currentPage === 1}
                aria-label="Previous page"
            >
                &larr;
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => props.onPageChange(number)}
                    className={number === props.currentPage ? 'page-btn current' : 'page-btn'}
                    aria-current={number === props.currentPage ? 'page' : undefined}
                >
                    {number}
                </button>
            ))}

            <button
                onClick={() => props.onPageChange(props.currentPage + 1)}
                disabled={props.currentPage === props.totalPages}
                aria-label="Next page"
            >
                &rarr;
            </button>
        </nav>
    );
};

export default BrowsePages;