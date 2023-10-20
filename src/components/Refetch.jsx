import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

const Refetch = () => {
  const client = useQueryClient();

  const handleClick = () => {
    console.log("clicked");
    client.invalidateQueries(["post"]);
    //   `post` key must be same to that of query function
  };
  return (
      <div className=" grid place-items-center ">
      <Link className="bg-blue-400 px-6 py-2 rounded text-white font-semibold tracking-tighter my-16" to="/" >Back</Link>

          
      refetch post data in another component from this
      <button
        className=" bg-blue-400 px-6 py-2 rounded text-white font-semibold tracking-tighter"
        onClick={handleClick}
      >
        refetch
      </button>
    </div>
  );
};

export default Refetch;
