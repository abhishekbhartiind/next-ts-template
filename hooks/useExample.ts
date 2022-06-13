import { useState } from "react"

const useExample = () => {
    const [data, setData] = useState("");
    return { data, setData };
}

export default useExample;