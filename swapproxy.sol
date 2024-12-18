
// File: @openzeppelin/contracts/token/ERC20/IERC20.sol


// OpenZeppelin Contracts (last updated v5.1.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.20;

/**
 * @dev Interface of the ERC-20 standard as defined in the ERC.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the value of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the value of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves a `value` amount of tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 value) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the
     * caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 value) external returns (bool);

    /**
     * @dev Moves a `value` amount of tokens from `from` to `to` using the
     * allowance mechanism. `value` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

// File: swap.sol


pragma solidity ^0.8.6;


interface IAggregationExecutor {
    /// @notice propagates information about original msg.sender and executes arbitrary data
    function execute(address msgSender) external payable returns (uint256); // 0x4b64e492
}

interface ISwapping {
    struct SwapDescription {
        IERC20 srcToken;
        IERC20 dstToken;
        address payable srcReceiver;
        address payable dstReceiver;
        uint256 amount;
        uint256 minReturnAmount;
        uint256 flags;
    }

    function swap(
        IAggregationExecutor executor,
        SwapDescription calldata _swapData,
        bytes calldata data
    )
        external
        payable
        returns (
            uint256 returnAmount,
            uint256 spentAmount
        );
}

contract SwapProxy {

    address immutable AGGREGATION_ROUTER_V6;
    struct txDetails {
        IERC20 src;
        IERC20 dst;
        uint256 _spendAmount;
        uint256 _returnAmount;
        uint256 _timeStamp;
    }
    mapping(address=>txDetails[]) public txDetail;
    // Define events
    event SwapSuccessful(
        address indexed sender,
        address indexed srcToken,
        address indexed dstToken,
        uint256 amountIn,
        uint256 amountOut
    );
    
    event SwapFailed(
        address indexed sender,
        address indexed srcToken,
        address indexed dstToken,
        uint256 amountIn,
        uint256 minReturnAmount
    );
// pass this address for polygon mainnet deployment - 0x111111125421ca6dc452d289314280a0f8842a65 (Oneinch V6 aggreator address)
    constructor(address router) {
        AGGREGATION_ROUTER_V6 = router;
    }

    function swap(
        IAggregationExecutor executor,
        ISwapping.SwapDescription calldata _swapData,
        bytes calldata _data
    ) external returns (uint256 returnAmount, uint256 spentAmount) {

        // Transfer tokens from msg.sender to the contract
        IERC20(_swapData.srcToken).transferFrom(msg.sender, address(this), _swapData.amount);

        // Approve the router to spend the tokens on behalf of the contract
        IERC20(_swapData.srcToken).approve(AGGREGATION_ROUTER_V6, _swapData.amount);

        // Call the swap function of the aggregation router
        (returnAmount, spentAmount) = ISwapping(AGGREGATION_ROUTER_V6).swap(executor, _swapData, _data);

        // Check if the swap was successful
        if (returnAmount >= _swapData.minReturnAmount) {
            // Emit SwapSuccessful event
            txDetail[msg.sender].push(txDetails(_swapData.srcToken,_swapData.dstToken,spentAmount,returnAmount,block.timestamp));
            emit SwapSuccessful(
                msg.sender,
                address(_swapData.srcToken),
                address(_swapData.dstToken),
                _swapData.amount,
                returnAmount
            );
        } else {
            // Emit SwapFailed event
            emit SwapFailed(
                msg.sender,
                address(_swapData.srcToken),
                address(_swapData.dstToken),
                _swapData.amount,
                _swapData.minReturnAmount
            );
        }
    }

    // Function to get the array of data for a given user (msg.sender can be replaced with any address)
    function getTxsData(address user) public view returns (txDetails[] memory) {
        return txDetail[user];
    }

    // Function to get the number of entries for a specific user
    function getUserDataCount(address user) public view returns (uint256) {
        return txDetail[user].length;
    }
    
}
