use starknet::ContractAddress;

#[starknet::interface]
trait IGasEstimateApi<TContractState> {
    fn get_price(self: @TContractState) -> usize;
    fn get_limit_price(ref self: TContractState, l: u128) -> usize;
    fn get_limit(ref self: TContractState, contract_address: ContractAddress) -> u128;
}

#[starknet::contract]
mod GasEstimateApi {
    use starknet::ContractAddress;
    #[storage]
    struct Storage {}

    #[external(v0)]
    impl GasEstimateApiImpl of super::IGasEstimateApi<ContractState> {
        fn get_price(self: @ContractState) -> usize {
            let price: usize = 21000;
            price
        }
        fn get_limit_price(ref self: ContractState, l: u128) -> usize {
            let total_gas_cost: usize = get_price() * l;
            return total_gas_cost;
        }
        fn get_limit(ref self: ContractState, contract_address: ContractAddress) -> u128 {
            let gas_limit: u128 = contract_address;
            gas_limit
        }
    }

 
}