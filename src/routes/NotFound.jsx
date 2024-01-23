import Layout from "../components/Layout";
import Image from "../assets/png/NotFound.png";
import "./MyComponent.css";
export default function NotFound() {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh-340px)] flex items-center justify-center">
        <div className="w-full max-w-[1200px] flex">
          <div className="w-[50%] max-w-[600px]  h-full flex flex-col justify-center space-y-7 mt-32">
            <h1 className="text-[44px] font-bold">404 PAGE NOT FOUND</h1>
            <h2 className="text-[20px] font-bold">
              HYDRA has stolen this page from the S.H.I.E.L.D. database!
            </h2>
            <p>
              Check that you typed the address correctly, go back to your
              previous page or try using our site search to find something
              specific.
            </p>
          </div>
          <div className="w-[50%] h-full overflow-hidden ">
            <img className=" animate-scared" src={Image} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
