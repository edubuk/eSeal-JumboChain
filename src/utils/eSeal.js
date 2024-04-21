'use client';
import { Web3 } from 'web3';
export const web3 = new Web3(window.ethereum);
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
		],
		name: 'IssuerRegistered',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_issuer',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_certType',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_fileHash',
				type: 'string',
			},
		],
		name: 'registerFile',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_IssuerName',
				type: 'string',
			},
			{
				internalType: 'address',
				name: '_Witness',
				type: 'address',
			},
		],
		name: 'registerIssuer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'authority',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'certType',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'fileHash',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'witness',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'Registration',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'issuerId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'witness',
				type: 'address',
			},
		],
		name: 'WitnessRegistered',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		name: 'files',
		outputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'issuer',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'certType',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'fileHash',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'witness',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_fileHash',
				type: 'string',
			},
		],
		name: 'getFile',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'issuer',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'certType',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'fileHash',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'timestamp',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'witness',
						type: 'address',
					},
				],
				internalType: 'struct eSealing.FileState',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'issuers',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'witness',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'issuerWitness',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];
const myContract = new web3.eth.Contract(
	abi,
	'0x1de326636e7EC19319d2b578Aa52B852D93a8Eac',
);
myContract.handleRevert = true;

export async function connectMetamask() {
	// Check if web3 is available
	if (typeof window.ethereum !== 'undefined') {
		// Request access to the user's MetaMask account
		window.ethereum.enable();

		// Get the user's accounts
		const accounts = await web3.eth.getAccounts();
		return accounts[0];
	} else {
		window.alert('Please Install MetaMask!');
	}
}

// registerFile(name, issuer, certType, fileHash) => void
// getFile(fileHash) => tuple(name, issuer, certType, fileHash, timestamp, witness)

export async function postCertificate(obj) {
	const providersAccounts = await web3.eth.getAccounts();
	const defaultAccount = providersAccounts[0];
	try {
		const receipt = await myContract.methods
			.registerFile(obj.name, obj.issuer, obj.type, obj.hash)
			.send({
				from: defaultAccount,
				gas: '1000000',
				gasPrice: '10000000000',
			});
		console.log('Transaction Hash: ' + receipt.transactionHash);
		return receipt.transactionHash;
	} catch (err) {
		console.error(err);
	}
}

export async function getCertificate(hash) {
	const w3 = new Web3(
		new Web3.providers.HttpProvider('https://internode.jumbochain.org'),
	);
	const contract = new w3.eth.Contract(
		abi,
		'0x1de326636e7EC19319d2b578Aa52B852D93a8Eac',
	);
	contract.handleRevert = true;

	try {
		console.log('HASH : ', hash);
		const data = await contract.methods.getFile(hash).call();
		console.log('Call Data: ' + data);
		return data;
	} catch (err) {
		console.error(err);
	}
	return null;
}
