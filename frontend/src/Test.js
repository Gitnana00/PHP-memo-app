import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {

  const [memos, setMemos] = useState([]);

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost/api/memos";
  
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.log(res)
        setMemos(res.data.memos);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <>
      {memos.map((memo)=> {
        return (
          <div key={memo.id}>
            <h1>{memo.subject}</h1>
            <p>{memo.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default Test;