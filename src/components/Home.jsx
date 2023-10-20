import axios from "axios";

import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["post"],
    queryFn: async() => {
      const res = await axios.get(url)
      return res.data;
    },
    // staleTime: 1000 * 60 * 2, // sets data fresh for 2 min, also doesn't refetch if we change routes for 1 min 
    // stale time must be less than cache time
    // cacheTime: 1000 * 60 * 5, // sets cache time for 5 min default  is 5 min
  }); 

  return (
    <div className=" bg-gray-900 min-h-screen text-white grid place-items-center">
      <div className=" font-black tracking-tighter text-4xl text-center py-16">
        Posts
      </div>
      {isLoading && (
        <div className=" grid place-items-center min-h-screen w-screen">
          <h2 className=" text-2xl">Loading...</h2>
        </div>
      )}
      {isError && (
        <div className=" grid place-items-center min-h-screen w-screen overflow-hidden">
          <h2 className=" text-2xl">{JSON.stringify(error)}</h2>
        </div>
      )}
      <Link className="bg-blue-400 px-6 py-2 rounded text-white font-semibold tracking-tighter my-16" to="/refetch" >Go</Link>
      <div className=" flex flex-wrap gap-4 w-10/12 justify-center items-center">
        {data && data.map((post) => {
          return (
            <div
              className="rounded w-80 px-6 py-4 h-60 hover:outline-gray-700 outline outline-1 outline-gray-800"
              key={post.id}
            >
              <h4 className="tracking-tight font-semibold text-xl mb-4">
                {post.title}
              </h4>
              <p>{post.body.slice(0, 120) + "..."}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
