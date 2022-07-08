import useExample from "../../hooks/useExample";

const Example = () => {
  const { data, setData } = useExample();

  return <div>{data}</div>;
};

export default Example;
