import { useState } from "react"

const useExample = () => {
    const [data, setData] = useState("Example");
    return { data, setData };
}

export default useExample;