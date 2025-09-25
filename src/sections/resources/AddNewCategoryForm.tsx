import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

// --- TYPE DEFINITIONS ---
// Define the shape of the main form data state
interface CategoryFormDataState {
  categoryName: string;
  // thumbnailFile: File | null; // The file object would be stored separately
}

// Define the props for the reusable FileDropzone component
interface DropzoneProps {
  mimeType: 'JPG';
  maxFileSize: string;
}

// --- FILE DROPZONE COMPONENT ---
// Reusing the dropzone, but simplified for JPG only
const CategoryImageDropzone: FC<DropzoneProps> = ({ mimeType, maxFileSize }) => {
  return (
    // Dropzone Container styling: similar to before, but slightly cleaner text
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
        accept={'.jpg,.jpeg'} 
      />
    </div>
  );
};

// --- MAIN FORM COMPONENT ---
const AddNewCategoryForm: FC = () => {
  const [formData, setFormData] = useState<CategoryFormDataState>({
    categoryName: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Category Data Submitted:', formData);
    // This is where you'd send the category name and the uploaded image to your Node/Express API.
    alert(`Category "${formData.categoryName}" submitted!`);
  };

  return (
    // Page Container styling: slightly smaller max width to match the simple form layout
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Add New Category</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Category Name Input */}
        <div className="space-y-2">
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
            Category Name*
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Enter the name"
            value={formData.categoryName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          />
        </div>

        {/* Thumbnail Dropzone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail*
          </label>
          <CategoryImageDropzone mimeType="JPG" maxFileSize="1MB" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center pt-2 space-x-4">
          
          {/* Publish Button */}
          <button 
            type="submit" 
            // The deep blue color looks like #0F4C81 or similar. We use a darker shade of blue-800/900.
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-900/50 transition duration-150"
          >
            Publish
          </button>

          {/* Cancel Link/Button */}
          <button
            type="button"
            // Simple text button with the primary accent color (red/orange from the original logo, but here we use a simple text red/blue for modern UI contrast).
            // Based on the image, the Cancel text is a shade of red/pink. We'll use a more standard red.
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

export default AddNewCategoryForm;