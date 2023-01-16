import { useState } from "react";

import Modal from "@/components/Modal";
import Button from "@/components/Button";

export default function AuthModal() {
  const [modal, setModal] = useState(false);
  return (
    <Modal modal={modal} modalHandler={() => null}>
      <div className="authmodal">
        <h4>Please Login to Proceed</h4>
        <Button className="" text="Login with Google" />
      </div>
    </Modal>
  );
}
