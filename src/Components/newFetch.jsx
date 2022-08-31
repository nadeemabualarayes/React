import useFetch from "./useFetch";

const NewFetch = () => {
  const todolist = useFetch("https://jsonplaceholder.typicode.com/todos");
  return <>{todolist && todolist.map((item) => <div>{item.title}</div>)}</>;
};

export default NewFetch;
