import Modal from "@/components/Modal";
import Button from "@/components/Button";
import useUI from "@/hooks/useUI";

export default function AuthModal() {
  const { authModalHandler, authModal } = useUI();

  return (
    <Modal
      modal={authModal}
      modalHandler={authModalHandler}
      modalHeaderClassName="w-96"
    >
      <div className="authmodal w-full">
        <h4 className="font-bold text-2xl flex mx-auto items-center  justify-center">
          Please Login to Proceed
        </h4>
        <Button
          className="my-10 mx-auto justify-center flex border px-4 rounded py-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          text="  Login with Google"
        />
      </div>
    </Modal>
  );
}
