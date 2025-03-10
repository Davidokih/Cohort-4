export default function Spinner() {
    return (
      <div className='w-full flex justify-center items-center'>
        <div className='spinner'>
          <style>{`
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border-left-color: white;
            animation: spin 1s ease infinite;
          }
  
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
        </div>
      </div>
    )
  }