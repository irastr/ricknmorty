import {fetchData} from "../utils";

/**
 * Custom hook for api calls. Accepts page ang options
 */

export const useFetch = (page: number): [Character[], boolean] => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://rickandmortyapi.com/api/';
    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const json = await fetchData(`${baseUrl}/character/?page=${page}`);
                setData([...data, ...json.results]);
                setLoading(false);
            } catch(err) {
                setLoading(false);
                console.log('Error! ' + err);
            }
        };
        makeApiCall()
    }, [page]);
    return [data, loading];
};
