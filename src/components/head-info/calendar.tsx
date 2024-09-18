import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { normal } from "../../constants/color";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarModal = () => {



  const [date, setDate] = useState<Value>(new Date());
  const [time, setTime] = useState<Date>(new Date());

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const changeTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(changeTime);
  }, []);

  return (
    <div className="cursor-pointer flex justify-center items-center gap-4">
      <div onClick={handleShow} className="gap-4 flex">
        <i className="bi bi-calendar-month" style={{ color: normal.primary }} />

        <span>
          {Array.isArray(date)
            ? `${date[0]?.toDateString()} - ${date[1]?.toDateString()}`
            : date?.toDateString()}{" "}
          : {time.toLocaleTimeString()}
        </span>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {Array.isArray(date)
              ? `${date[0]?.toDateString()} - ${date[1]?.toDateString()}`
              : date?.toDateString()}{" "}
            : {time.toLocaleTimeString()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Calendar
              onChange={setDate}
              value={date}
              className="border-green-700 w-full"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarModal;
