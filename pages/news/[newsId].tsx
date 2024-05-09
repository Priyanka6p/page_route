import React from "react";
import { useRouter } from "next/router";

const NewsDetails: React.FC = () => {
    const router = useRouter()
    const { newsId } = router.query
    // news?id=testis&type=test

    const handleClick = () =>{
        router.push("/card")
    }

    return (
        <div>{newsId}
            <button type="button" onClick={()=>handleClick()}>Click</button>
        </div>
    )
}

export default NewsDetails;