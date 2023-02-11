import React from 'react'
import { useContext } from 'react';
import { contextapi } from '../context/contextapi';

const ErrorPopUp = () => {
    const {authError,setAuthError}= useContext(contextapi)
  return (
<div>
      {authError && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  OOPS !
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    {authError}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setAuthError(null)}
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>  )
}

export default ErrorPopUp