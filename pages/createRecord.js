import { useState } from "react";
import { HealthVault } from "../assets/HealthVault";
import { Layout } from "../components/Layout";

const Register = () => {
  const [history, setHistory] = useState([
    {
      title: "Peanut allergy",
      symptoms: ["Itchy throat", "Itchy eyes"],
      treatments: ["Benadryl", "Zyrtec"],
      date: "",
      type: "allergy",
    },
    {
      type: "allergy",
      title: "Shrimp allergy",
      symptoms: ["Itchy throat", "Itchy eyes"],
      treatments: ["Benadryl", "Zyrtec"],
      date: "",
    },
    {
      title: "Diabetes",
      symptoms: [
        "Frequent urination",
        "Increased thirst",
        "Increased hunger",
        "Unexplained weight loss",
        "Fatigue",
        "Blurry vision",
        "Slow healing wounds",
        "Frequent infections",
      ],
      treatments: ["Insulin", "Metformin", "Diet", "Exercise"],
      date: "",
      type: "condition",
    },
    {
      title: "Asthma",
      symptoms: ["Coughing", "Wheezing", "Dizziness", "Loss of consciousness"],
      treatments: ["Albuterol", "Ipratropium", "Prednisone"],
      date: "",
      type: "condition",
    },
    {
      title: "Flu",
      symptoms: [
        "Fever",
        "Cough",
        "Sore throat",
        "Runny or stuffy nose",
        "Muscle or body aches",
      ],
      treatments: ["Rest", "Fluids", "Tylenol"],
      date: "",
      type: "condition",
    },
    {
      type: "surgery",
      title: "Appendectomy",
      date: "10/10/2020",
      treatments: [],
      symptoms: [],
    },
    {
      type: "surgery",
      title: "Tonsillectomy",
      date: "10/10/2020",
      treatments: [],
      symptoms: [],
    },
  ]);

  const [highlighted, setHighlighted] = useState({});

  return (
    <Layout title="Register">
      <div id="bg" className="bg-black">
        {/*  create a top bar with the logo*/}
        <div className="flex w-full">
          <HealthVault width={128} className="mx-auto my-auto h-full" />
        </div>

        {/* Smaller */}
        <div className="text-white w-11/12 mx-auto mt-8 flex flex-row justify-between">
          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl w-1/5 overflow-auto">
            <div className="w-full text-center">
              <p className="text-xl mb-2">My Allergies</p>
              <div className="w-full lg:w-2/3 mx-auto">
                {history
                  .filter((item) => item.type === "allergy")
                  .map((item) => (
                    <p
                      onClick={() => setHighlighted(item)}
                      className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1]"
                      key={item.title}
                    >
                      {item.title}
                    </p>
                  ))}

                <button className="bg-[#1460D294] w-full lg:w-2/3 mb-4 rounded-lg">
                  <p>Add allergy</p>
                </button>
              </div>
            </div>

            <div className="w-full text-center">
              <p className="text-xl mb-2">My Conditions</p>
              <div className="w-full lg:w-2/3 mx-auto">
                {history
                  .filter((item) => item.type === "condition")
                  .map((item) => (
                    <p
                      onClick={() => setHighlighted(item)}
                      className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1]"
                      key={item.title}
                    >
                      {item.title}
                    </p>
                  ))}

                <button className="bg-[#1460D294] w-full lg:w-2/3 mb-4 rounded-lg">
                  <p>Add condition</p>
                </button>
              </div>
            </div>

            <div className="w-full text-center">
              <p className="text-xl mb-2">My Surgeries</p>
              <div className="w-full lg:w-2/3 mx-auto">
                {history
                  .filter((item) => item.type === "surgery")
                  .map((item) => (
                    <p
                      onClick={() => setHighlighted(item)}
                      className="bg-[#c4c4c4a1] mb-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2a1]"
                      key={item.title}
                    >
                      {item.title}
                    </p>
                  ))}

                <button className="bg-[#1460D294] w-full lg:w-2/3 mb-4 rounded-lg">
                  <p>Add surgery</p>
                </button>
              </div>
            </div>
          </div>

          {/* Bigger div */}
          <div className="bg-[#4848485e] py-6 px-4 rounded-2xl w-3/4">
            {highlighted ? (
              <div>
                <div className="flex flex-row justify-between">
                  <p className="text-3xl font-semibold">{highlighted.title}</p>
                </div>

                <hr className="my-4 h-1" />

                <div>
                  {highlighted.type === "allergy" ||
                  highlighted.type === "condition" ? (
                    <div>
                      <p className="text-xl">Symptoms</p>
                      <div className="flex flex-row flex-wrap">
                        {highlighted.symptoms.map((item) => (
                          <p
                            className="text-white bg-[#1460D294] rounded-lg px-2 py-1 m-1"
                            key={item}
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-100 align-middle">
                <p className="text-center">Click on an item to view it</p>
                <p className="text-center">or</p>
                <button className="bg-[#1460D294] px-4 py-2 mb-4 rounded-lg">
                  <p>Add new item</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
