import '../App.css';

export default function Pagination({ page, setPage }) {
    return (
        <>
        <div className='pagination-container'>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
         {'<'}  
        </button>
        <span className="page-number">{page}</span>
        <button onClick={() => setPage(page + 1)}>
         {'>'}
        </button>
        </div>
        </>
    )
}