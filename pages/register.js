import Link from "next/link";
import { useState } from "react";
import { HealthVault } from "../assets/HealthVault";
import { PrivateIcon } from "../assets/PrivateIcon";
import { PublicIcon } from "../assets/PublicIcon";
import { Layout } from "../components/Layout";

const Register = () => {
  const [selected, setSelected] = useState("");

  return (
    <Layout title="Register">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full pt-8">
          <Link href="/" className="mx-auto">  <HealthVault width={128} className="mx-auto my-auto h-full" /> </Link>
        </div>

        <div className="text-white w-5/12 mx-auto mt-16">
          <p className="text-4xl text-center my-8">{"Let's"} get started</p>

          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl">
            <p className="text-center text-3xl">
              First, do you want to create a public or private record?
            </p>

            <div className="w-full flex flex-row justify-evenly my-8">
              <button
                onClick={() => setSelected("public")}
                className={`
                ${
                  selected === "public"
                  ? "bg-[#1460D2] rounded-2xl"
                  : "bg-[#d9d9d91a] rounded-2xl"
                } px-16 py-10 flex flex-col justify-center items-center decoration-none cursor-pointer
              `}
              >
                <PublicIcon width={48} />
                <p className="text-2xl mt-8">Public</p>
              </button>

              <button
                onClick={() => setSelected("private")}
                className={`
                ${
                  selected === "private"
                    ? "bg-[#1460D2] rounded-2xl"
                    : "bg-[#d9d9d91a] rounded-2xl"
                } px-16 py-10 flex flex-col justify-center items-center
              `}
              >
                <PrivateIcon width={48} />
                <p className="text-2xl mt-8">Private</p>
              </button>
            </div>

            <div className="text-center">
              <p className="text-[#8D8D8D] font-bold">
                {"Don't"} know what to choose?
              </p>
              <a href="#" className="text-[#5E5CB8] font-bold">
                click here to understand
              </a>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                className="w-full lg:w-1/2 px-4 py-2 bg-[#1460D2] rounded-xl text-center"
                aria-disabled={selected === ""}
                href={
                  selected
                    ? selected == "private"
                      ? "/create-record/private"
                      : "/create-record/public"
                    : "#"
                }
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
