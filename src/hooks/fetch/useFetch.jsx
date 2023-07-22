import { useEffect, useState } from "react";
import useAppContext from "../useContext/useAppContext";

export default function useFetch(url) {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const { setIsLoading } = useAppContext();

	useEffect(() => {
		const fetchAPI = async () => {
			try {
				const resp = await fetch(url);
				let data;
				try {
					data = await resp.json();
				} catch (error) {
					throw new Error("Data not available");
				}
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchAPI();
	}, []);
	return { data, error };
}
