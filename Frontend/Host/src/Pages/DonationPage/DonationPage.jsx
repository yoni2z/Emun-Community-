import React, { useState, useEffect } from "react";
import TitleBanner from "../../components/TitleBanner";
import CauseTitleBg from "../../assets/cause-title-bg.jpg";

const DonationPage = () => {
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/bank-accounts/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bank accounts");
        }
        const data = await response.json();
        setBankAccounts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBankAccounts();
  }, []);

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="Donate" backgroundImage={CauseTitleBg} />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <div className="flex-grow flex justify-center items-center">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold font-poppins mb-5">
              Donate and Make a{" "}
              <span className="text-[#834098]">Difference</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
              Your contribution helps us drive impactful change. Below are our
              bank details for donations.
            </p>
            <h2 className="text-3xl font-bold font-poppins mb-5">
              Bank Account <span className="text-[#834098]">Details</span>
            </h2>
            <ul className="space-y-4">
              {bankAccounts.map((account, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-[#834098] transition"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {account.bank_name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Account Number:</span>{" "}
                    {account.account_number}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
