import { Outfit } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface CardProps {
	img: string;
	id: number;
	con: string;
	link: string;
}

const ClientCards: FC<CardProps> = (props): JSX.Element => {
	return (
		<div
			className={`flex flex-col rounded-3xl bg-[#ffffff] border border-solid border-[#69C6FF4D] shadow-2xl shadow-[#00000005] ${
				props.id === 1 ? 'gap-16' : props.id === 2 ? 'gap-[5.5rem]' : 'gap-12'
			}  py-16 px-8  sem:p-4 sem:gap-10 w-full sem:w-fit`}
		>
			<Image
				alt='cardpic'
				src={props.img}
				width={275}
				height={102.24}
				className='self-center'
			/>
			<div
				className={`flex flex-col  ${
					props.id === 1
						? 'gap-[7rem]'
						: props.id === 2
						? 'gap-[5.5rem]'
						: 'gap-2'
				} sem:items-center`}
			>
				<span
					className={`${outfit.className} font-light text-xl text-[#012376] sem:text-center`}
				>
					{props.con}
				</span>
				<Link
					href={props.link}
					target='_blank'
				>
					<button className='flex rounded px-4 py-3 bg-[#B3C6FF] text-[#012376] text-base font-normal w-fit'>
						Learn more ↗
					</button>
				</Link>
			</div>
		</div>
	);
};

const outfit = Outfit({ subsets: ['latin'] });
const HeroSection = () => {
	return (
		<div className='flex flex-col gap-20 m-28 sem:mx-8 sem:my-16'>
			<div className='flex flex-col gap-9'>
				<div className='flex flex-col gap-6 items-center w-[60%] m-auto sem:w-full'>
					<span
						className={`flex ${outfit.className} font-semibold text-[90px] text-center text-[#00378A] sem:text-4xl`}
					>
						Introducing Edubuk
					</span>
					<span className='flex ${outfit.className} font-normal text-2xl text-center text-[#00378A]'>
						Digitally Record & Verify Educational Transcripts and
						Work-Experience Certificates on Blockchain making Background
						Verification Process Significantly Cheaper & Faster
					</span>
				</div>
				<div className='flex gap-8 justify-center'>
					<Link href='/eSeal'>
						<button
							className={`rounded-[20px] font-normal text-base text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
						>
							e-Seal Certificates
						</button>
					</Link>
					<Link href='/verify'>
						<button
							className={`rounded-[20px] font-normal text-base text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
						>
							e-Verify Certificates
						</button>
					</Link>
				</div>
				<div className='flex flex-col gap-3 items-center'>
					<span
						className={`font-normal text-base text-center ${outfit.className} text-[#00378A]`}
					>
						Powered by{' '}
					</span>
					<Image
						alt='jumbologo'
						src='https://jumboscan.jumbochain.org/images/logosvg.svg'
						width={74}
						height={74}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-16'>
				<div className='flex gap-20 med:flex-col med:gap-8'>
					<ClientCards
						img={'/images/iee.png'}
						id={1}
						con={
							'Collaborated and MoU signed with World’s 4th Largest NACES (National Association of Credential Evaluation Services) Member: IEE (International Educational Evaluation) in the US.'
						}
						link={
							'https://www.einpresswire.com/article/692558064/international-education-evaluations-and-edubuk-partner-to-eliminate-fake-credentials-with-blockchain-verification'
						}
					/>
					<ClientCards
						img={'/images/Skill-India-Logo.png'}
						id={2}
						con={
							'Collaborated with NSDC (National Skills Development Corporation, Govt. of India) under Skill India Digital Accelerator Program along with HDFC Bank Grants Program and Facilitated by T-Hub (Largest Startup Accelerator in India).'
						}
						link='https://www.linkedin.com/posts/apoorva-bajaj-iit-iim-cfa-edubuk_innovationecosystem-innovatewiththub-hdfcbank-activity-7193233564765728768--d0o/' 
					/>
					<ClientCards
						img={'/images/est.png'}
						id={3}
						con="Collaborated and MoU signed with EST Global and EST FAB giving for upskilling, reskilling and certifying learner's in Emerging Technologies including AI & Blockchain giving us access to thousands of students across the globe with ETS' vast Network of FAB (Fintech & Blockchain Association in the US and globally)."
						link='https://www.linkedin.com/posts/dr-sindhu-bhaskar-55a84568_with-great-excitement-i-announce-the-coming-activity-7174682311538413569-uLA6'
					/>
				</div>
				{/* <div className="flex gap-8 justify-center">
          <Link href="/eSeal">
            <button
              className={`rounded-[20px] font-normal text-base text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
            >
              e-Seal Certificates
            </button>
          </Link>
          <Link href="/verify">
            <button
              className={`rounded-[20px] font-normal text-base text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
            >
              e-Verify Certificates
            </button>
          </Link>
        </div> */}
			</div>
			<div
				className='flex flex-col gap-14'
				id='learner'
			>
				<div className='flex flex-col gap-1 items-center'>
					<div className='flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit '>
						<Image
							alt='circle'
							src='/circle.svg'
							width={16}
							height={16}
						/>
						<span
							className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
						>
							Features🔥
						</span>
					</div>
					<span
						className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
					>
						Learner&#39;s Edubuk Profile On The Blockchain
					</span>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex justify-center gap-9 sem:flex-col'>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/hat.png'
								width={235}
								height={235}
								className='sem:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] `}
							>
								Learner’s Profile
							</span>
						</div>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/trophy.png'
								width={235}
								height={235}
								className='sem:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] `}
							>
								Credits & Grades
							</span>
						</div>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/token.png'
								width={235}
								height={235}
								className='sem:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] med:text-center`}
							>
								EBK Tokens Earned
							</span>
						</div>
					</div>
					<div className='flex justify-center gap-9 sem:flex-col'>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/resource.png'
								width={235}
								height={235}
								className='sem:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] w-[250px] text-center med:w-fit`}
							>
								Learning medium & resources
							</span>
						</div>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/work.png'
								width={235}
								height={235}
								className='med:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] w-[250px] text-center med:w-fit`}
							>
								Certificates, Transcripts & Work Experience
							</span>
						</div>
						<div className='flex flex-col gap-2 items-center'>
							<Image
								alt='icon'
								src='/images/project.png'
								width={235}
								height={235}
								className='sem:w-fit'
							/>
							<span
								className={`${outfit.className} font-medium text-xl text-[#012376] w-[220px] text-center med:w-fit`}
							>
								Subjects, Courses & Projects
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
