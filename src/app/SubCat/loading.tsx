import React from 'react'

export default function loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
                    Loading ...
                </p>
            </div>
        </div>
    )
}
