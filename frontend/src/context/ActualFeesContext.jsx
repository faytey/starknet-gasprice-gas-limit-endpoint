import { createContext, useState } from "react";
import axios from "axios";

export const ActualFeesContext = createContext();

const ActualFeesProvider = ({ children }) => {
  const [ActualFees, setActualFees] = useState({});

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_baseUrl;

  const apiKey = process.env.NEXT_PUBLIC_x_api_key;

  const [open, setOpen] = useState(false);

  const [icon, setIcon] = useState(true);

  const toggleIcon = () => setIcon(!icon);

  const toggleOpen = () => setOpen(!open);

  async function getActualFee(address) {
    setSuccess(false);
    setError(false);
    try {
      const response = await axios.post(
        `${baseUrl}/api/get-actual-fee`,
        {
          contract_address: address,
          x_api_key: apiKey,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      if (response.status === 200) {
        setActualFees(response.data);
        setSuccess(true);
      }
    } catch (error) {
      setErrorMessage(error?.response?.data);
      setSuccess(false);
      setError(true);
    }
  }

  return (
    <ActualFeesContext.Provider
      value={{
        icon,
        setIcon,
        open,
        toggleIcon,
        toggleOpen,
        setOpen,
        ActualFees,
        getActualFee,
        success,
        error,
        setError,
        errorMessage,
      }}
    >
      {children}
    </ActualFeesContext.Provider>
  );
};

export default ActualFeesProvider;
