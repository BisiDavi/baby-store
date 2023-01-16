import Modal from "@/components/Modal";
import Button from "@/components/Button";
import useUI from "@/hooks/useUI";

export default function AuthModal() {
  const { authModalHandler, authModal } = useUI();

  return (
    <Modal modal={authModal} modalHandler={authModalHandler}>
      <div className="authmodal">
        <h4>Please Login to Proceed</h4>
        <Button className="" text="Login with Google" />
      </div>
    </Modal>
  );
}
