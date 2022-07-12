import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export class Pagination {
	constructor(data, pageSize) {
		this.data = data;
		this.pageSize = pageSize;
	}

	getPage(n) {
		const offSet = n * this.pageSize
		console.log(offSet);
		const newData = this.data.slice(offSet, offSet + this.pageSize)
		console.log(newData);
		return newData
	}

	getTotalPages() {
		return Math.ceil(this.data.length / this.pageSize)
	}


}

export const PageNavigation = ({
	nextPageHandler,
	previousPageHandler,
	currentPage,
	totalPages
}) => {
	return (
		<div className="w-[300px] bg-white mt-7 flex h-[70px] items-center pl-4 rounded-md">
			{currentPage === 0 ? null : (
				<button onClick={previousPageHandler} className=" inline-flex items-center gap-3 mr-5"><BsFillArrowLeftCircleFill /> Prev </button>
			)}

			{currentPage + 1 >= totalPages ? null : (
				<button onClick={nextPageHandler} className=" inline-flex items-center gap-3"><BsFillArrowRightCircleFill /> Next </button>
			)}

			<span className='ml-12'>
				Page {currentPage + 1} of {totalPages}
			</span>
	  </div>	
	)
}