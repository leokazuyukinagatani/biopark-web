import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CustomToaster() {
  return (
    <>
     <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      
      draggable
      theme="dark"
    />
   
    <style>{`
      :root {
        --toastify-color-light: #fff;
        --toastify-color-dark: hsla(200, 48%, 10%, 1);
        --toastify-color-info: #3498db;
        --toastify-color-success: hsla(147, 96%, 42%, 1);
        --toastify-color-warning: hsla(32, 96%, 64%, 1);
        --toastify-color-error: hsl(354, 100%, 29%);
        --toastify-color-transparent: rgba(255, 255, 255, 0.7);
      
        --toastify-icon-color-info: var(--toastify-color-info);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-warning: var(--toastify-color-warning);
        --toastify-icon-color-error: var(--toastify-color-error);
      
        --toastify-color-progress-dark: hsl(186, 100%, 75%);
        --toastify-color-progress-info: var(--toastify-color-info);
        --toastify-color-progress-success: var(--toastify-color-success);
        --toastify-color-progress-warning: var(--toastify-color-warning);
        --toastify-color-progress-error: var(--toastify-color-error);
      }
    `}</style>

   
    </>
   
  );
}