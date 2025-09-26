import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

// --- TYPE DEFINITIONS ---
// Define the shape of the main form data state
interface BannerFormDataState {
  name: string;
  priority: number | ''; // Use number or empty string for initial state/validation
  // bannerImageFile: File | null; // The actual file object would be stored separately
}

// Define the props for the reusable Image Dropzone component
interface DropzoneProps {
  mimeType: 'JPG';
  maxFileSize: string;
}

// --- IMAGE DROPZONE COMPONENT ---
// Reusing the image dropzone component, specifically for JPGs
const BannerImageDropzone: FC<DropzoneProps> = ({ mimeType, maxFileSize }) => {
  return (
    // Dropzone Container styling
    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 cursor-pointer hover:border-gray-400 transition-colors duration-200 min-h-[180px]">
      
      <FiUploadCloud className="w-10 h-10 text-gray-500 mb-4" />
      
      <p className="text-base text-gray-600 mb-1">
        <span className="font-semibold text-blue-600 hover:text-blue-700">
          Click to upload
        </span> or drag and drop {mimeType}
      </p>
      
      <small className="text-xs text-gray-500">
        Max File size - {maxFileSize}
      </small>
      
      <input 
        type="file" 
        className="hidden" 
        accept={'.jpg,.jpeg,.png'} // Allowing PNGs as well for banners, common practice
      />
    </div>
  );
};

// --- MAIN FORM COMPONENT ---
const AddNewBannerForm: FC = () => {
  const [formData, setFormData] = useState<BannerFormDataState>({
    name: '',
    priority: 1, // Default priority set to 1
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Special handling for priority to ensure it's a number
    if (name === 'priority') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value === '' ? '' : Number(value) 
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Banner Data Submitted:', formData);
    // Here, you would send the banner name, priority, and the uploaded image
    // to your Node/Express API.
    alert(`Banner "${formData.name}" with priority ${formData.priority} submitted!`);
  };

  return (
    // Page Container styling
    <div className="my-12 p-8 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Add New Banner</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300  rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          />
        </div>

        {/* Image Dropzone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image*
          </label>
          <BannerImageDropzone mimeType="JPG" maxFileSize="1MB" />
        </div>

        {/* Priority Input */}
        <div className="space-y-2">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Priority*
          </label>
          <input
            type="number" // Use type="number" for priority
            id="priority"
            name="priority"
            placeholder="1"
            value={formData.priority}
            onChange={handleChange}
            required
            min="1" // Banners usually have a minimum priority of 1
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center pt-2 space-x-4">
          
          {/* Publish Button (deep blue) */}
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-900/50 transition duration-150"
          >
            Publish
          </button>

          {/* Cancel Link/Button (red) */}
          <button
            type="button"
            className="text-red-500 font-semibold px-4 py-3 hover:text-red-700 transition duration-150"
            onClick={() => { console.log('Cancel action triggered'); }} 
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddNewBannerForm;