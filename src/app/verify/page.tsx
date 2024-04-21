'use client';

import { TickCircle } from 'iconsax-react';
import moment from 'moment';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

// import { getCertificate } from '../../utils/eSeal';
import { useRouter } from 'next/navigation';
import React from 'react';

const outfit = Outfit({ subsets: ['latin'] });

const Verify = () => {
	const router = useRouter();
	const [isVerify, setIsVerify] = useState(false);
	const [isError, setIsError] = useState(false);
	const [FileName, setFile] = useState(new File([], '', {}));
	const [FileHash, setFileHash] = useState('');
	const [CertType, setCertType] = useState('');
	const [CertOwner, setCertOwner] = useState('');
	const [Timestamp, setTimestamp] = useState(BigInt(0));
	const [Witness, setWitness] = useState('');
	const [CertIssuer, setCertIssuer] = useState('');

	const selectFile = (e: any) => {
		setFile(e.target.files[0]);
		// console.log(e.target.files[0]);
	};

	const hashFile = async (file: any) => {
		const reader = new FileReader();
		return new Promise((resolve, reject) => {
			reader.onload = (event: any) => {
				const arrayBuffer = event.target.result;
				// Convert arrayBuffer to Uint8Array (required for crypto.subtle)
				const byteArray = new Uint8Array(arrayBuffer);
				console.log(JSON.stringify(byteArray));

				crypto.subtle
					.digest('SHA-256', byteArray)
					.then((hashBuffer) => {
						// Convert hashBuffer to hex string
						const hashArray = Array.from(new Uint8Array(hashBuffer));
						const hashHex = hashArray.map((b) => b.toString(16)).join('');
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
		// // hash.update(new Uint8Array(buffer));
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
		// const hashDigest = hash.digest('hex');

		const hashDigest: any = await hashFile(FileName);
		console.log(hashDigest);
		setFileHash(hashDigest);

		const { getCertificate } = await import('../../utils/eSeal');

		const obj: any = await getCertificate(hashDigest);
		console.log(obj);
		if (obj.witness == '0x0000000000000000000000000000000000000000') {
			setIsError(true);
			setIsVerify(false);
		} else {
			setIsError(false);
			setIsVerify(true);
		}
		setCertType(obj.certType);
		setCertOwner(obj.name);
		setCertIssuer(obj.issuer);
		setFileHash(obj.fileHash);
		setTimestamp(obj.timestamp);
		setWitness(obj.witness);

		// console.log({
		// 	hashDigest,
		// 	CertOwner,
		// 	CertIssuer,
		// 	CertType,
		// });
	};

	return (
		<div className='flex flex-col items-center gap-40 mt-16 med:gap-20 mb-11'>
			<div className='flex flex-col gap-14 w-[50%] m-auto med:w-fit'>
				<div className='flex flex-col gap-9'>
					<span
						className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-4xl`}
					>
						Verify Certificates
					</span>
					<span
						className={`${outfit.className} font-light text-xl text-[#012376] text-center`}
					>
						Verify Academic & Work-Experience Certificates and CVs on Blockchain
						in a transparent & tamper-proof manner
					</span>
				</div>
				<div className='rounded-[20px] border border-solid border-[#FFFFFF30] bg-[#AECFFF47] py-9 px-7 flex flex-col gap-16 sem:p-4 sem:w-[90%] sem:m-auto'>
					<span
						className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
					>
						Verifier
					</span>
					<div className='flex flex-col gap-4'>
						<label
							className={`${outfit.className} font-normal text-xl text-[#012376]`}
						>
							Upload a file to verify
						</label>
						<div className='flex items-center sem:flex-col'>
							<input
								className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:p-4 sem:w-full`}
								type='file'
								placeholder='Choose file'
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
						className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
						onClick={computeHash}
					>
						Verify Certificate
					</button>
					{isError && (
						<div
							className={`font-normal text-xl text-[#eb5552] rounded-[20px] p-6 bg-[#ffaeae47]`}
						>
							Error! Certificate Not Verified!
						</div>
					)}
					{isVerify && (
						<div className='flex flex-col gap-6'>
							<input
								className={`${outfit.className} font-normal text-center text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
								type='text'
								placeholder='Certifying Authority'
								readOnly
								value='Record On Blockchain'
							/>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									Certificate issued to
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									placeholder='Name'
									value={CertOwner}
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									Certificate issued by
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									placeholder='Certifying Authority'
									value={CertIssuer}
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									Certificate type
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									placeholder='Certificate Type'
									value={CertType}
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									File Hash on Blockchain:
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									value={FileHash}
									placeholder='Certificate Type'
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									Certificate Issuer Account:
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									value={Witness}
									placeholder='Certificate Type'
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<label
									className={`${outfit.className} font-normal text-xl text-[#012376]`}
								>
									Timestamp:
								</label>
								<input
									className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
									type='text'
									value={moment
										.unix(Number(Timestamp))
										.format('dddd, MMMM Do YYYY, h:mm:ss a')}
									placeholder='Certificate Type'
									readOnly
								/>
							</div>
							<div className='flex flex-col gap-4'>
								<span
									className={`w-full text-xl text-center text-green-500 font-normal ${outfit.className} flex self-center py-2 px-6 justify-center`}
								>
									<TickCircle
										size='32'
										color='#22c55e'
										variant='Bold'
									/>
									Certificate Successfully Verified!
								</span>
								<button
									className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
									onClick={() => window.location.reload()}
								>
									Click here to verify another certificate
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<button
				className={`rounded-[30px] border border-solid font-normal text-xl text-center text-[#012376] border-[#012376]  ${outfit.className} flex self-center py-2 px-6 w-fit`}
			>
				Certificate Issuer Lookup
			</button>
		</div>
	);
};

export default Verify;
