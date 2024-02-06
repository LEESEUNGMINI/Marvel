import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { apiGetCharacterDetail } from "./api";

export default function CharacterDetail() {
  let detail;
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["getCharacterDetail", { id }],
    apiGetCharacterDetail
  );
  if (!isLoading) {
    detail = data?.data.results[0];
  }
  console.log(data, isLoading);
  console.log(detail);
  return (
    <Layout>
      <div
        className="w-full flex justify-center relative py-16"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url('${detail?.thumbnail.path}.${detail?.thumbnail.extension}')`,
        }}
      >
        {/* 필터처리 */}
        <div className=" absolute top-0 left-0 w-full h-full bg-black/95"></div>
        <div className="max-w-7xl w-full h-full grid grid-cols-[1fr_2fr] z-10">
          {/* Left */}
          <div className="w-full h-full flex">
            <img
              className="w-[85%] aspect-[2/3] object-cover"
              src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`}
              alt="Character_Image"
            />
          </div>
          {/* Right */}
          <div className="w-full h-full flex flex-col text-white space-y-8">
            <h1 className="text-xl font-semibold">{detail?.name}</h1>
            <div>
              <h2 className="text-xl font-semibold">Published</h2>
              <p>{detail?.modified?.substr(0, 10)}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Comics</h2>
              {detail?.comics?.items?.slice(0, 3).map((item, index) => (
                <p key={index}>{item?.name}</p>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Events</h2>
              <p>{detail?.modified?.substr(0, 10)}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p>{detail?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full h-80 bg-red-500"></div>
      </div>
    </Layout>
  );
}
