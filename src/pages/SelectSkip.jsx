import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProgressBar from "../components/ProgressBar";
import { useGetAllSkipsQuery } from "../features/skipSlice";
import SkipCard from "../components/SkipCard";

const SelectSkip = () => {
    const { data, isLoading, error } = useGetAllSkipsQuery();

    console.log(data);

    return (
        <>
            <ProgressBar step1 step2 step3 />

            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <h2 className="text-center mb-4">Choose Your Skip Size</h2>

                    <h5 className="text-center">
                        Select the skip size that best suits your needs
                    </h5>

                    <Row>
                        {data?.map((skip) => (
                            <Col key={data?.id} sm={12} md={6} lg={4} xl={3}>
                                <SkipCard skip={skip} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    );
};
export default SelectSkip;
