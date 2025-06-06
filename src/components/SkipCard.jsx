import { useState } from "react";
import { Badge, Button, ButtonGroup, Card, Modal, Stack } from "react-bootstrap";
import { VscArrowSmallRight } from "react-icons/vsc";

const SkipCard = ({ skip }) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <Card className="my-3 py3 rounded" onClick={handleModal}>
                <Card.Body>
                    <Card.Header>
                        <Stack direction="horizontal">
                            <Card.Title as="div">
                                ID: <strong>{skip?.id}</strong>
                            </Card.Title>
                        </Stack>
                    </Card.Header>

                    <Card.Text as="div">Size: {skip?.size}</Card.Text>

                    <Card.Text
                        as="h3"
                        style={{ color: "blue", fontSize: "bold" }}
                    >
                        £ {skip?.price_before_vat}
                    </Card.Text>

                    <Card.Text as="h6">VAT: £ {skip?.vat}</Card.Text>

                    <Card.Text as="h6">Post Code: {skip?.postcode}</Card.Text>

                    <Badge bg="danger">{skip?.forbidden}</Badge>

                    <Button
                        className="select-skip"
                        variant={modal ? "primary" : "secondary"}
                        type="button"
                        size="lg"
                        style={{ width: "100%" }}
                        onClick={handleModal}
                    >
                        {modal ? (
                            "Selected"
                        ) : (
                            <>
                                Select This Skip <VscArrowSmallRight />
                            </>
                        )}
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={modal} onHide={handleModal} size="xl">
                <Modal.Body>
                    <h6>
                        Imagery and information shown throughout this website
                        may not reflect the exact shape or size specification,
                        colours may vary, options and/or accessories may be
                        featured at additional cost.
                    </h6>
                </Modal.Body>

                <Modal.Footer>
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            {skip?.id}{" "}
                            <span style={{ color: "blue", fontSize: "bold" }}>
                                £{skip?.price_before_vat}
                            </span>{" "}
                            {skip?.hire_period_days} day hire
                        </div>
                        <div>
                            <Button variant="secondary" className="me-2" onClick={handleModal}>
                                Back
                            </Button>
                            <Button variant="primary">
                                Continue <VscArrowSmallRight />
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default SkipCard;
