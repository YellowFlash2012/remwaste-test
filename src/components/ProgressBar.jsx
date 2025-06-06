import { Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap"

import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdPayment } from "react-icons/md";

const ProgressBar = ({ step1, step2, step3, step4, step5, step6 }) => {
    return (
        <Nav className="d-flex flex-row justify-content-between mb-4">
            <Nav.Item>
                {step1 ? (
                    <span className="d-flex">
                        <IoLocationOutline size={25} /> <Nav.Link>PostCode</Nav.Link>
                    </span>
                ) : (
                    <Nav.Link disabled>PostCode</Nav.Link>
                )}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (
                    <span className="d-flex">
                        <RiDeleteBin6Line /> <Nav.Link>Waste Type</Nav.Link>
                    </span>
                ) : (
                    <Nav.Link disabled>Waste Type</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <span className="d-flex">
                        <FiTruck /> <Nav.Link>Select Skip</Nav.Link>
                    </span>
                ) : (
                    <Nav.Link disabled>Select Skip</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <>
                        <IoShieldOutline /> <Nav.Link>Permit Check</Nav.Link>
                    </>
                ) : (
                    <span className="d-flex">
                        <IoShieldOutline />{" "}
                        <Nav.Link disabled>Permit Check</Nav.Link>
                    </span>
                )}
            </Nav.Item>

            <Nav.Item>
                {step5 ? (
                    <>
                        <MdOutlineDateRange /> <Nav.Link>Choose Date</Nav.Link>
                    </>
                ) : (
                    <span className="d-flex">
                        <MdOutlineDateRange />{" "}
                        <Nav.Link disabled>Choose Date</Nav.Link>
                    </span>
                )}
            </Nav.Item>

            <Nav.Item>
                {step6 ? (
                    <>
                        <MdPayment /> <Nav.Link>Payment</Nav.Link>
                    </>
                ) : (
                    <span className="d-flex">
                        <MdPayment /> <Nav.Link disabled>Payment</Nav.Link>
                    </span>
                )}
            </Nav.Item>
        </Nav>
    );
};
export default ProgressBar;
