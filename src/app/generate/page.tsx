"use client";
import { TickCircle, Warning2 } from "iconsax-react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

const Generation = () => {
  const [type, setType] = useState(0);

  const router = useRouter();
  const [FileName, setFile] = useState(new File([], "", {}));
  const [ConnectedAccount, setConnectedAccount] = useState(null);
  const [FileHash, setFileHash] = useState("");
  const [Website, setWebsite] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [InstituteName, setInstituteName] = useState("");
  const [InstituteAcronym, setInstituteAcronym] = useState("");
  const [TxnHash, setTxnHash] = useState("");

  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const connectWallet = async () => {
    const { connectMetamask } = await import("../../utils/eSeal");
    connectMetamask().then((res: any) => {
      console.log("Connected To : ", res);
      setConnectedAccount(res);
    });
  };

  const hashFile = async (file: any) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event: any) => {
        const arrayBuffer = event.target.result;
        // Convert arrayBuffer to Uint8Array (required for crypto.subtle)
        const byteArray = new Uint8Array(arrayBuffer);
        // byteArray.map((e)=>console.log(e))
        console.log(JSON.stringify(byteArray));
        crypto.subtle
          .digest("SHA-256", byteArray)
          .then((hashBuffer) => {
            // Convert hashBuffer to hex string
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((b) => b.toString(16)).join("");
            resolve(hashHex);
          })
          .catch(reject);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const computeHash = async () => {
    // console.log(hash);
    // const buffer = await FileName.arrayBuffer();
    // console.log(new Uint8Array(buffer));
    // const hashDigest = crypto.subtle
    // 	.digest('SHA-256', new Uint8Array(buffer))
    // 	.then((hashBuffer) => {
    // 		// Convert hashBuffer to hex string
    // 		const hashArray = Array.from(new Uint8Array(hashBuffer));
    // 		const hashHex = hashArray
    // 			.map((b) => b.toString(16).padStart(2, '0'))
    // 			.join('');
    // 		return hashHex;
    // 	});
    // // const hashDigest = hash.digest('hex');
    const hashDigest: any = await hashFile(FileName);
    console.log(hashDigest);
    setFileHash(hashDigest);

    // console.log({
    // 	hashDigest,
    // 	CertOwner,
    // 	CertIssuer,
    // 	CertType,
    // });
  };

  const registerFile = async () => {
    const obj = {
      name: InstituteName,
      acronym: InstituteAcronym,
      website: Website,
      hash: FileHash,
    };

    const { postCertificate } = await import("../../utils/eSeal");

    const receipt: any = await postCertificate(obj);
    console.log(receipt);
    setTxnHash(receipt);
  };

  return (
    <div className="flex flex-col gap-32 w-[50%] mx-auto mt-16 mb-40 sem:w-auto">
      <div className="flex flex-col gap-9">
        <span
          className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-4xl`}
        >
          Generate Certificate
        </span>
        <span
          className={`${outfit.className} font-light text-xl text-[#012376] text-center`}
        >
          Input the Certificate details below to generate certificate
        </span>
      </div>
      <div className="rounded-[20px] border border-solid border-[#FFFFFF4D] bg-[#AECFFF47] pt-9 pb-24 px-7 flex flex-col gap-8 sem:p-4 med:w-[90%] med:m-auto">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          eSealer
        </span>
        <div className="flex gap-6 justify-center">
          <button
            onClick={() => {
              setType(0);
            }}
            className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] ${
              type === 0 ? "bg-[#009EFF]" : "bg-[#012376]"
            }  ${outfit.className} flex py-2 px-6`}
          >
            Single Certificate
          </button>
          <button
            onClick={() => {
              setType(1);
            }}
            className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] ${
              type === 1 ? "bg-[#009EFF]" : "bg-[#012376]"
            } ${outfit.className} flex py-2 px-6`}
          >
            Bulk Certificate
          </button>
        </div>
        {type === 0 ? (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institution Name
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Name"
                onChange={(e) => setInstituteName(e.target.value)}
                value={InstituteName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institute Acronym
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Acronym"
                onChange={(e) => setInstituteAcronym(e.target.value)}
                value={InstituteAcronym}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institute Website
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="url"
                placeholder="Website url"
                onChange={(e) => setWebsite(e.target.value)}
                value={Website}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                First Name
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Your First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={FirstName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Last Name
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Your Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Upload file
              </label>
              <div className="flex items-center sem:flex-col">
                <input
                  className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:w-full`}
                  type="file"
                  placeholder="Choose file"
                  onChange={selectFile}
                />
                <span
                  className={`${outfit.className} font-normal text-xl text-[#012376] text-center`}
                >
                  Suggested file types: PDF, docx, word
                </span>
              </div>
            </div>
            <button
              onClick={computeHash}
              className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
            >
              Compute File Hash
            </button>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                File hash of selected file
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:p-4`}
                type="text"
                placeholder="Fill out the form and select a file"
                readOnly
                value={FileHash}
              />
            </div>
            <button
              onClick={registerFile}
              className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
            >
              Register File
            </button>
            {TxnHash != "" && (
              <>
                <div className="flex flex-col gap-4">
                  <label
                    className={`${outfit.className} font-normal text-xl text-[#012376]`}
                  >
                    Transaction Hash
                  </label>
                  <Link
                    href={`https://protojumbo.jumbochain.org/tx/${TxnHash}`}
                    target="_blank"
                    className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:p-4 overflow-scroll`}
                  >
                    {`${TxnHash}`}
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <span
                    className={`w-full text-xl text-center text-green-500 font-normal ${outfit.className} flex self-center py-2 px-6 justify-center`}
                  >
                    <TickCircle size="32" color="#22c55e" variant="Bold" />
                    File {`"${FileName.name}"`} Successfully Registered!
                  </span>
                  <button
                    className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
                    onClick={() => window.location.reload()}
                  >
                    Click here to register another certificate
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institution Name
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Name"
                onChange={(e) => setInstituteName(e.target.value)}
                value={InstituteName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institute Acronym
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Acronym"
                onChange={(e) => setInstituteAcronym(e.target.value)}
                value={InstituteAcronym}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className={`${outfit.className} font-normal text-xl text-[#012376]`}
              >
                Institute Website
              </label>
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="url"
                placeholder="Website url"
                onChange={(e) => setWebsite(e.target.value)}
                value={Website}
              />
            </div>
            <span
              className={`${outfit.className} text-center font-normal text-xl text-[#012376]`}
            >
              Download sample CSV template
            </span>
            <button
              className={`rounded-[30px] self-center w-fit font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
            >
              Download
            </button>
            <div className="flex justify-between">
              <div className="flex flex-col w-[300px] gap-4">
                <label
                  className={`${outfit.className} font-normal text-xl text-[#012376]`}
                >
                  Upload zipfile
                </label>
                <input
                  className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:w-full`}
                  type="file"
                  placeholder="Choose file"
                  onChange={selectFile}
                />
              </div>
              <div className="flex flex-col w-[300px] gap-4">
                <label
                  className={`${outfit.className} font-normal text-xl text-[#012376]`}
                >
                  Upload csvfile
                </label>
                <input
                  className={`${outfit.className}  font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:w-full`}
                  type="file"
                  placeholder="Choose file"
                  onChange={selectFile}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generation;
