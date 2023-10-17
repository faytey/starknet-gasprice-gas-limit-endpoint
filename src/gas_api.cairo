//GASAPI THAT RETURNS THE GASPRICE OF SMARTCONTRACTS DEPLOYED AND TO BE DEPLOYED ON STARKNET

use starknet::ContractAddress;

#[starknet::interface]
trait IGasEstimateApi<TContractState> {
    fn get_minimum_gas_price(self: @TContractState) -> u128;
    fn compute_gas_price(ref self: TContractState, gas_used: u128) -> u128;
    fn get_gas_cost(ref self: TContractState, contract_address: ContractAddress);
    fn estimated_gas_fee_for_deployment(ref self: TContractState);
}

#[starknet::contract]
mod GasEstimateApi {
    use core::traits::Into;
    use core::traits::TryInto;
    use core::debug::PrintTrait;
    use starknet::ContractAddress;
    #[storage]
    struct Storage {}

    #[external(v0)]
    impl GasEstimateApiImpl of super::IGasEstimateApi<ContractState> {
        
        // MINIMUM STARKNET SMART CONTRACT GASPRICE

        fn get_minimum_gas_price(self: @ContractState)-> u128 {
            let base_gas_fee: u128 = 10;
            let result: felt252 = 'Base fee == 10gwei';
                result.print();
                base_gas_fee
        }

        // COMPUTE THE GASPRICE BY INPUTTING THE GAS USED

        fn compute_gas_price(ref self: ContractState, gas_used: u128) -> u128 {
            let total_gas_cost: u128 = self.get_minimum_gas_price() + gas_used;
            let res: felt252 = 'Estimated gas cost is ';
            res.print();
            return total_gas_cost;
        }

        // GET GAS COST OF AN ALREADY DEPLOYED STARKNET SMART CONTRACT BY IMPUTTING THE SMART CONTRACT ADDRESS
        
        fn get_gas_cost(ref self: ContractState, contract_address: ContractAddress) {
            // Let gas_limit: u128 = COMPUTE THE TOTAL GAS SPENT ON DEPLOYING THE CONTRACT;
            //gas_limit
        }

        // CALCULATE THE GAS COST FOR DEPLOYMENT OF THE EXISTING CONTRACT BEFORE DEPLOYING

        fn estimated_gas_fee_for_deployment(ref self: ContractState) {
            //Task: use the runtime bytecode to compute the total gas estimate for the current contract
        }
    }
}

