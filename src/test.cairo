#[cfg(test)]
mod tests {
    // use gas_api::IGasEstimateApiDispatcherTrait;
    use core::debug::PrintTrait;
    use snforge_std::{declare, ContractClassTrait};
    use gas_api::gas_api::{IGasEstimateApiDispatcher, IGasEstimateApiDispatcherTrait};

    #[test]
    fn get_base_price() {
        // First declare and deploy a contract
        let contract = declare('GasEstimateApi');
        let contract_address = contract.deploy(@ArrayTrait::new()).unwrap();

        // Create a Dispatcher object that will allow interacting with the deployed contract
        let dispatcher = IGasEstimateApiDispatcher { contract_address };

        // Call a view function of the contract
        let balance = dispatcher.get_minimum_gas_price();
        assert(balance == 10, 'balance == 10');
        balance.print();
    }

    #[test]
    fn compute_gas_spent() {
        // First declare and deploy a contract
        let contract = declare('GasEstimateApi');
        let contract_address = contract.deploy(@ArrayTrait::new()).unwrap();

        // Create a Dispatcher object that will allow interacting with the deployed contract
        let dispatcher = IGasEstimateApiDispatcher { contract_address };

        // Call a view function of the contract
        let gas_spent = dispatcher.compute_gas_price(12);

        assert(gas_spent == 22, 'gas_spent == 22');

        gas_spent.print();
    }
}