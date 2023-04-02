import { XCircleIcon } from '@heroicons/react/solid';

const Alert = ({ alert, handleClose }) => {

  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 5000);
  }
  const bgColor = alert.type=== 'success' ? 'green-100' : 'red-100';

  return (
    <>
      {alert?.active && (
        <div x-data x-init="setTimeout(() => show = false, 3000)" className={`flex items-center mt-6 bg-${bgColor} p-5 w-full h-16 rounded mb-4`}>
          <div className="flex justify-between w-full">
            <div className="ml-4 flex-1 leading-tight text-lg text-black font-medium">{alert.message}</div>
            <div>
              <button className='mr-2' type="button">
                <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
