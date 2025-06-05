import {Nav} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdPayment } from "react-icons/md";

const ProgressBar = ({ step1, step2, step3,step4,step5,step6}) => {
    return (
        <Nav className="justify-content-center mb-4">
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to="/postcode">
                        <IoLocationOutline/>
                        <Nav.Link>PostCode</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>PostCode</Nav.Link>
                )}

                {step2 ? (
                    <LinkContainer to="/waste-type">
                        <RiDeleteBin6Line/>
                        <Nav.Link>Waste Type</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Waste Type</Nav.Link>
                )}

                {step3 ? (
                    <LinkContainer to="/select-skip">
                        <FiTruck/>
                        <Nav.Link>Select Skip</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Select Skip</Nav.Link>
                )}

                {step4 ? (
                    <LinkContainer to="/permit-check">
                        <MdOutlineShield/>
                        <Nav.Link>Permit Check</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Permit Check</Nav.Link>
                )}

                {step5 ? (
                    <LinkContainer to="/choose-date">
                        <MdOutlineDateRange/>
                        <Nav.Link>Choose Date</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Choose Date</Nav.Link>
                )}
                
                {step6 ? (
                    <LinkContainer to="/payment">
                        <MdPayment/>
                        <Nav.Link>Payment</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Payment</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    );
};
export default ProgressBar;
