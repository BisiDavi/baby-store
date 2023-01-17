import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Google from "@/public/icon/Google";
import useFirebase from "@/hooks/useFirebase";

interface Props {
  modal: boolean;
  modalHandler: () => void;
}

export default function AuthModal({ modal, modalHandler }: Props) {
  const { googleProvider } = useFirebase();

  return (
    <Modal
      modal={modal}
      modalHandler={modalHandler}
      modalHeaderClassName="w-96"
    >
      <div className="authmodal w-full">
        <h4 className="font-bold text-2xl flex mx-auto items-center  justify-center">
          Please Login to Proceed
        </h4>
        <Button
          className="my-10 mx-auto font-bold items-center justify-center flex border px-4 rounded-lg py-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          text="  Login with Google"
          icon={<Google />}
          onClick={googleProvider}
        />
      </div>
    </Modal>
  );
}
