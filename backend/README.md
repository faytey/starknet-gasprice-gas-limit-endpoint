#### To run locally:

- `baseUrl` - 127.0.0.1:5000/
- `endpoint` - api/get-actual-fee

- `payload`: 
    ```
    {
	    "contract_address": {{pass_in_contract_address}}, 
	    "x_api_key": {{pass_in_your_api_key}}
    }
    ```

- `response`
```
    {
        "hash":"0x6c89c7110fff5dbefdedb701c58c6ec8499751288b00c102fc42c0403d94517",
        "actualFee":"124320655700556",
        "timestamp":1690012905
    }
```
