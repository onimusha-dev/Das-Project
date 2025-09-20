import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
            <p className="text-lg text-gray-500 mt-2">
                The page you're looking for doesn't exist.
            </p>
            <NavLink to="/overview" className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-md text-lg hover:bg-blue-950 transition-colors duration-300">
                Go to Homepage
            </NavLink>
        </div>
    )
}

export default Error404