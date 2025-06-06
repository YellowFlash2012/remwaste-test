import ProgressBar from "../components/ProgressBar";
import { useGetAllSkipsQuery } from "../features/skipSlice";

const SelectSkip = () => {
    const { data, isLoading, error } = useGetAllSkipsQuery();

    console.log(data);

    return (
        <>
            <ProgressBar step1 step2 step3 />

            <h2 className="text-center mb-4">Choose Your Skip Size</h2>

            <h5 className="text-center">Select the skip size that best suits your needs</h5>
        </>
    );
};
export default SelectSkip;
