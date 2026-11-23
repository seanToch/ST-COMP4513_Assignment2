
const BrowsePages = ({ currentPage, totalPages, onPageChange }) => {
    // Creates Array With The Numbered Pages
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // If Not Enough Products For Multiple Pages
    if (totalPages <= 1) {
        return null;
    }

    //Returns Page Nav Buttons Calling the Page Change Function
    return (
        <nav className="broswsepages" aria-label="broswsepages">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                &larr;
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={number === currentPage ? 'page-btn current' : 'page-btn'}
                    aria-current={number === currentPage ? 'page' : undefined}
                >
                    {number}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                &rarr;
            </button>
        </nav>
    );
};

export default BrowsePages;