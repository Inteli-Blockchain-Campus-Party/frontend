import Link from "next/link";
import { useEffect, useState } from "react";
import { HealthVault } from "../assets/HealthVault";
import { MetamaskIcon } from "../assets/MetamaskIcon";
import { Layout } from "../components/Layout";
import { ethers } from "ethers";
import Error from "next/error";

const SignIn = () => {
  const [userType, setUserType] = useState("");

  const [provider, setProvider] = useState({});
  const [wallet, setWallet] = useState({
    address: "",
    balance: 0,
    network: "",
  });
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
    }
  }, []);

  const connectWallet = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = provider.getSigner(account);
      const network = await provider.getNetwork();

      setWallet({
        address: account,
        balance: ethers.utils.formatEther(await wallet.getBalance()),
        network: network.name,
      });

      console.log(wallet);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Layout title="Sign in">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full pt-4">
          <Link href="/" className="mx-auto">
            <HealthVault width={128} className="mx-auto my-auto h-full" />
          </Link>
        </div>

        <div className="text-white w-5/12 mx-auto mt-16">
          <div className="my-8">
            <p className="text-4xl text-center">Log in</p>
            <p className="text-2xl text-center">or create an account</p>
          </div>

          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl flex flex-col justify-center w-full">
            <div className="flex flex-1 flex-row w-full justify-around mb-8">
              <button
                className={`
                ${
                  userType === "metamask"
                    ? "border-b-4 border-b-[#1460D2]"
                    : "border-b-4 border-b-[#1b1b1b]"
                } text-lg 
              `}
                onClick={() => setUserType("metamask")}
              >
                Logar com carteira
              </button>

              <button
                className={`
                ${
                  userType === "cpf"
                    ? "border-b-4 border-b-[#1460D2]"
                    : "border-b-4 border-b-[#1b1b1b]"
                } text-lg 
              `}
                onClick={() => setUserType("cpf")}
              >
                Logar com CPF
              </button>
            </div>

            {userType === "metamask" ? (
              <button
                className="px-8 py-4 rounded-xl border-2 border-[#606060] text-white text-lg lg:text-xl font-bold w-full text-center lg:w-fit cursor-pointer flex flex-row mx-auto justify-center"
                onClick={connectWallet}
              >
                Log in with Metamask
                <MetamaskIcon width={32} className="ml-2" />
              </button>
            ) : userType === "cpf" ? (
              <input
                className="p-4 rounded-xl border-2 border-[#606060] text-white text-lg lg:text-xl w-full lg:w-fit flex flex-row mx-auto justify-center bg-[#1b1b1b]"
                placeholder="000.000.000-00"
              />
            ) : (
              <div className="flex flex-1 flex-col py-8 w-full text-center">
                <p className="text-2xl">
                  Select how you want to log into yout account!
                </p>
                <p className="text-xl">
                  You can log either with your Metamask wallet or your CPF
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <button
                className="w-full lg:w-1/2 px-4 py-2 bg-[#1460D2] rounded-xl text-center"
                href="/register"
                disabled={!wallet.address || !cpf}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
