import { ReactElement } from "react";

import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

type Props = Partial<ToastContainerProps>;

export default function ToasterComponent(props: Props): ReactElement {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      {...props}
    />
  );
}
