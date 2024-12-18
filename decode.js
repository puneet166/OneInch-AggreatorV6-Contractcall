import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/ebe86eee82f64cfba1cc12bcb2b0776a'); // Connect to Ethereum node

const abi = [{"inputs":[{"internalType":"contract IWETH","name":"weth","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AdvanceEpochFailed","type":"error"},{"inputs":[],"name":"ArbitraryStaticCallFailed","type":"error"},{"inputs":[],"name":"BadCurveSwapSelector","type":"error"},{"inputs":[],"name":"BadPool","type":"error"},{"inputs":[],"name":"BadSignature","type":"error"},{"inputs":[],"name":"BitInvalidatedOrder","type":"error"},{"inputs":[],"name":"ETHTransferFailed","type":"error"},{"inputs":[],"name":"ETHTransferFailed","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"EpochManagerAndBitInvalidatorsAreIncompatible","type":"error"},{"inputs":[],"name":"EthDepositRejected","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"InsufficientBalance","type":"error"},{"inputs":[],"name":"InvalidMsgValue","type":"error"},{"inputs":[],"name":"InvalidMsgValue","type":"error"},{"inputs":[],"name":"InvalidPermit2Transfer","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[],"name":"InvalidatedOrder","type":"error"},{"inputs":[],"name":"MakingAmountTooLow","type":"error"},{"inputs":[],"name":"MismatchArraysLengths","type":"error"},{"inputs":[],"name":"OrderExpired","type":"error"},{"inputs":[],"name":"OrderIsNotSuitableForMassInvalidation","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"PartialFillNotAllowed","type":"error"},{"inputs":[],"name":"Permit2TransferAmountTooHigh","type":"error"},{"inputs":[],"name":"PredicateIsNotTrue","type":"error"},{"inputs":[],"name":"PrivateOrder","type":"error"},{"inputs":[],"name":"ReentrancyDetected","type":"error"},{"inputs":[],"name":"RemainingInvalidatedOrder","type":"error"},{"inputs":[],"name":"ReservesCallFailed","type":"error"},{"inputs":[{"internalType":"uint256","name":"result","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"}],"name":"ReturnAmountIsNotEnough","type":"error"},{"inputs":[],"name":"SafeTransferFailed","type":"error"},{"inputs":[],"name":"SafeTransferFromFailed","type":"error"},{"inputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"res","type":"bytes"}],"name":"SimulationResults","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[],"name":"SwapWithZeroAmount","type":"error"},{"inputs":[],"name":"TakingAmountExceeded","type":"error"},{"inputs":[],"name":"TakingAmountTooHigh","type":"error"},{"inputs":[],"name":"TransferFromMakerToTakerFailed","type":"error"},{"inputs":[],"name":"TransferFromTakerToMakerFailed","type":"error"},{"inputs":[],"name":"WrongSeriesNonce","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"inputs":[],"name":"ZeroMinReturn","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maker","type":"address"},{"indexed":false,"internalType":"uint256","name":"slotIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slotValue","type":"uint256"}],"name":"BitInvalidatorUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maker","type":"address"},{"indexed":false,"internalType":"uint256","name":"series","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newEpoch","type":"uint256"}],"name":"EpochIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"orderHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"remainingAmount","type":"uint256"}],"name":"OrderFilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint96","name":"series","type":"uint96"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"advanceEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"offsets","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"and","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"arbitraryStaticCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"maker","type":"address"},{"internalType":"uint256","name":"slot","type":"uint256"}],"name":"bitInvalidatorForOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"},{"internalType":"uint256","name":"additionalMask","type":"uint256"}],"name":"bitsInvalidateForOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"},{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"MakerTraits[]","name":"makerTraits","type":"uint256[]"},{"internalType":"bytes32[]","name":"orderHashes","type":"bytes32[]"}],"name":"cancelOrders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"predicate","type":"bytes"}],"name":"checkPredicate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IClipperExchange","name":"clipperExchange","type":"address"},{"internalType":"Address","name":"srcToken","type":"uint256"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"uint256","name":"outputAmount","type":"uint256"},{"internalType":"uint256","name":"goodUntil","type":"uint256"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"vs","type":"bytes32"}],"name":"clipperSwap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IClipperExchange","name":"clipperExchange","type":"address"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"Address","name":"srcToken","type":"uint256"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"uint256","name":"inputAmount","type":"uint256"},{"internalType":"uint256","name":"outputAmount","type":"uint256"},{"internalType":"uint256","name":"goodUntil","type":"uint256"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"vs","type":"bytes32"}],"name":"clipperSwapTo","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"inCoin","type":"address"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"curveSwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"maker","type":"address"},{"internalType":"uint96","name":"series","type":"uint96"}],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"maker","type":"address"},{"internalType":"uint256","name":"series","type":"uint256"},{"internalType":"uint256","name":"makerEpoch","type":"uint256"}],"name":"epochEquals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"eq","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"}],"name":"ethUnoswap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"}],"name":"ethUnoswap2","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"},{"internalType":"Address","name":"dex3","type":"uint256"}],"name":"ethUnoswap3","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"}],"name":"ethUnoswapTo","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"}],"name":"ethUnoswapTo2","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"},{"internalType":"Address","name":"dex3","type":"uint256"}],"name":"ethUnoswapTo3","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"Address","name":"maker","type":"uint256"},{"internalType":"Address","name":"receiver","type":"uint256"},{"internalType":"Address","name":"makerAsset","type":"uint256"},{"internalType":"Address","name":"takerAsset","type":"uint256"},{"internalType":"uint256","name":"makingAmount","type":"uint256"},{"internalType":"uint256","name":"takingAmount","type":"uint256"},{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"}],"internalType":"struct IOrderMixin.Order","name":"order","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"TakerTraits","name":"takerTraits","type":"uint256"}],"name":"fillContractOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"Address","name":"maker","type":"uint256"},{"internalType":"Address","name":"receiver","type":"uint256"},{"internalType":"Address","name":"makerAsset","type":"uint256"},{"internalType":"Address","name":"takerAsset","type":"uint256"},{"internalType":"uint256","name":"makingAmount","type":"uint256"},{"internalType":"uint256","name":"takingAmount","type":"uint256"},{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"}],"internalType":"struct IOrderMixin.Order","name":"order","type":"tuple"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"TakerTraits","name":"takerTraits","type":"uint256"},{"internalType":"bytes","name":"args","type":"bytes"}],"name":"fillContractOrderArgs","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"Address","name":"maker","type":"uint256"},{"internalType":"Address","name":"receiver","type":"uint256"},{"internalType":"Address","name":"makerAsset","type":"uint256"},{"internalType":"Address","name":"takerAsset","type":"uint256"},{"internalType":"uint256","name":"makingAmount","type":"uint256"},{"internalType":"uint256","name":"takingAmount","type":"uint256"},{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"}],"internalType":"struct IOrderMixin.Order","name":"order","type":"tuple"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"vs","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"TakerTraits","name":"takerTraits","type":"uint256"}],"name":"fillOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"Address","name":"maker","type":"uint256"},{"internalType":"Address","name":"receiver","type":"uint256"},{"internalType":"Address","name":"makerAsset","type":"uint256"},{"internalType":"Address","name":"takerAsset","type":"uint256"},{"internalType":"uint256","name":"makingAmount","type":"uint256"},{"internalType":"uint256","name":"takingAmount","type":"uint256"},{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"}],"internalType":"struct IOrderMixin.Order","name":"order","type":"tuple"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"vs","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"TakerTraits","name":"takerTraits","type":"uint256"},{"internalType":"bytes","name":"args","type":"bytes"}],"name":"fillOrderArgs","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"gt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"Address","name":"maker","type":"uint256"},{"internalType":"Address","name":"receiver","type":"uint256"},{"internalType":"Address","name":"makerAsset","type":"uint256"},{"internalType":"Address","name":"takerAsset","type":"uint256"},{"internalType":"uint256","name":"makingAmount","type":"uint256"},{"internalType":"uint256","name":"takingAmount","type":"uint256"},{"internalType":"MakerTraits","name":"makerTraits","type":"uint256"}],"internalType":"struct IOrderMixin.Order","name":"order","type":"tuple"}],"name":"hashOrder","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint96","name":"series","type":"uint96"}],"name":"increaseEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"lt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"not","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offsets","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"or","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"permit","type":"bytes"},{"internalType":"bytes","name":"action","type":"bytes"}],"name":"permitAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"maker","type":"address"},{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"rawRemainingInvalidatorForOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"maker","type":"address"},{"internalType":"bytes32","name":"orderHash","type":"bytes32"}],"name":"remainingInvalidatorForOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"simulate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IAggregationExecutor","name":"executor","type":"address"},{"components":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"address payable","name":"srcReceiver","type":"address"},{"internalType":"address payable","name":"dstReceiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"uint256","name":"flags","type":"uint256"}],"internalType":"struct GenericRouter.SwapDescription","name":"desc","type":"tuple"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256","name":"spentAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"}],"name":"unoswap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"}],"name":"unoswap2","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"},{"internalType":"Address","name":"dex3","type":"uint256"}],"name":"unoswap3","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"}],"name":"unoswapTo","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"}],"name":"unoswapTo2","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Address","name":"to","type":"uint256"},{"internalType":"Address","name":"token","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"Address","name":"dex","type":"uint256"},{"internalType":"Address","name":"dex2","type":"uint256"},{"internalType":"Address","name":"dex3","type":"uint256"}],"name":"unoswapTo3","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]; // Add the ABI of the contract here

const iface = new ethers.Interface(abi);
const data =
'0x07ed2379000000000000000000000000e37e799d5077682fa0a244d46e5649f71457bd09000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f0000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270000000000000000000000000e37e799d5077682fa0a244d46e5649f71457bd0900000000000000000000000027fed99ac9657afa60cd2cc20ba69def391cf386000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000009f89f9b0e5010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001150000000000000000000000000000000000000000000000f700006800004e802026678dcdc2132d05d31c914a87c6611c10748aeb04b58e8f27fed99ac9657afa60cd2cc20ba69def391cf38600000000000000000000000000000000000000000000000000000000000000010020d6bdbf78c2132d05d31c914a87c6611c10748aeb04b58e8f0c20c2132d05d31c914a87c6611c10748aeb04b58e8f55ff76bffc3cdd9d5fdbbc2ece4528ecce45047e6ae4071138002dc6c055ff76bffc3cdd9d5fdbbc2ece4528ecce45047e111111125421ca6dc452d289314280a0f8842a6500000000000000000000000000000000000000000000000000009f89f9b0e501c2132d05d31c914a87c6611c10748aeb04b58e8f000000000000000000000037de29fe';
const decodedData = iface.decodeFunctionData('swap', data); // Replace with actual function name
console.log(decodedData);