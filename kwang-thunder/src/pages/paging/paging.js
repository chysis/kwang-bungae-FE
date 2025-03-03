import React, { useState } from "react";
import paging from "../../css/paging.css";
import Pagination from "react-js-pagination";

const Paging = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  // 1. axios로 총 게시글 수 불러오고
  // 2. 16으로 나눠서 몫을 totalItemsCound로

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={16}
      totalItemsCount={500}
      pageRangeDisplayed={5}
      prePageText={"<"}
      nextPageText={">"}
      onChange={handlePageChange}
    />
  );
};

/*
https://1c163030-febb-40eb-ad08-95b9a0693d06.mock.pstmn.io/post/list/

  const [items,setItems]= useState([]);
  const [count,setCount]=.useState([]);
  const [currentpage,setCurrentpage] = useState([1]);
  const [postPerPage] = useState(16);
  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirsttPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  React.useEffect(() => {
  setCount(items.length);
  setIndexOfLastPost(currentpage * postPerPage);
  setIndexOfFirstPost(indexOfLastPost - postPerPage);
  setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
}, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

const setPage = (e) => {
  setCurrentpage(e);
};
return (
  {currentPosts && items.length > 0 ? (
      currentPosts.map((item)=> (
          <div>{item.title}</div>
          <div>{item.content}</div>
      ))
     ) 
     : <div>게시물이 없습니다.</div>
	}
     <Paging page={currentpage} count={count} setPage={setPage} />
)
*/
export default Paging;
