import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';
import { FiUploadCloud, FiChevronDown } from 'react-icons/fi';

interface DropzoneProps {
    mimeType: 'PDF' | 'JPG';
    maxFileSize: string;
    ratio?: string;
}

// Define the shape of the main form data state
interface FormDataState {
    title: string;
    category: string;
    featured: 'No' | 'Yes';
}

const FileDropzone: FC<DropzoneProps> = ({ mimeType, maxFileSize, ratio }) => {
    // In a real app, you would add state here to handle file selection/drag events
    return (
        // Dropzone Container styling
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 cursor-pointer hover:border-gray-400 transition-colors duration-200 min-h-[180px]">

            {/* Upload Icon from React Icons */}
            <FiUploadCloud className="w-10 h-10 text-gray-500 mb-4" />

            {/* Text Description */}
            <p className="text-base text-gray-600 mb-1">
                <span className="font-semibold text-blue-600 hover:text-blue-700">
                    Click to upload
                </span> or drag and drop {mimeType}
            </p>

            {/* File Specs */}
            <small className="text-xs text-gray-500">
                Max File size - {maxFileSize}
                {ratio && ` | ${ratio} Ratio`}
            </small>

            {/* Actual hidden file input */}
            <input
                type="file"
                className="hidden"
                accept={mimeType === 'PDF' ? '.pdf' : '.jpg,.jpeg'}
            />
        </div>
    );
};

// --- MAIN FORM COMPONENT ---
const AddNewFileForm: FC = () => {
    // Use the defined interface for useState
    const [formData, setFormData] = useState<FormDataState>({
        title: '',
        category: '',
        featured: 'No',
    });

    // Type the event for the change handler
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as 'No' | 'Yes' | string })); // Type assertion for the featured field
    };

    // Type the event for the submit handler
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // You would integrate your Node/Express API call here (e.g., using fetch or axios)
        alert('Form submitted! Check console for data.');
    };

    return (
        // Page Container styling
        <div className="max-w-xl mb-5 p-8 bg-white rounded-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Add New File</h1>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Title Input */}
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title*</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter the name"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category*</label>
                    <div className="relative">
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        >
                            <option value="" disabled>Select the Category Name</option>
                            <option value="education">Education</option>
                            <option value="finance">Finance</option>
                            <option value="technology">Technology</option>
                        </select>
                        {/* Custom Arrow using React Icons */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <FiChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                </div>

                {/* File Dropzone */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">File*</label>
                    <FileDropzone mimeType="PDF" maxFileSize="25MB" />
                </div>

                {/* Thumbnail Dropzone */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Thumbnail*</label>
                    <FileDropzone mimeType="JPG" maxFileSize="1MB" ratio="16:9" />
                </div>

                {/* Featured Dropdown */}
                <div className="space-y-2">
                    <label htmlFor="featured" className="block text-sm font-medium text-gray-700">Featured*</label>
                    <div className="relative w-32">
                        <select
                            id="featured"
                            name="featured"
                            value={formData.featured}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        {/* Custom Arrow using React Icons */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <FiChevronDown className="h-5 w-5" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150"
                >
                    Save File
                </button>

            </form>
        </div>
    );
};

export default AddNewFileForm;