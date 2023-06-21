import useEffect from "react";

const useCount = (count) => {
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
};

export default useCount;
