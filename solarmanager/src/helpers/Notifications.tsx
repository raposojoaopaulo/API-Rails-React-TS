import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaults: any = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Flip,
};

export const success = (message: any, options = {}) => {
  toast.success(message, Object.assign(defaults, options));
};

export const error = (message: any, options = {}) => {
  toast.error(message, Object.assign(defaults, options));
};