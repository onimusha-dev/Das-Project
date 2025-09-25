import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';
import { FiUploadCloud, FiChevronDown, FiCalendar, FiClock } from 'react-icons/fi';

// --- TYPE DEFINITIONS ---
// Define the shape of the main form data state
interface NotificationFormDataState {
  title: string;
  body: string;
  audience: string; // Could be a specific type like 'All' | 'GroupA' | 'UserIDs[]'
  target: string; // The Resource/PDF name or ID
  scheduleDate: string; // e.g., '2025-07-12'
  scheduleTime: string; // e.g., '10:00am IST'
  // thumbnailFile: File | null; // File handling would be separate
}

// --- REUSABLE COMPONENTS ---

// 1. Image Dropzone (reused and slightly modified)
interface DropzoneProps {
  mimeType: 'JPG';
  maxFileSize: string;
  ratio: string;
}

const ThumbnailDropzone: FC<DropzoneProps> = ({ mimeType, maxFileSize, ratio }) => (
  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 cursor-pointer hover:border-gray-400 transition-colors duration-200 min-h-[180px]">
    <FiUploadCloud className="w-10 h-10 text-gray-500 mb-4" />
    <p className="text-base text-gray-600 mb-1">
      <span className="font-semibold text-blue-600 hover:text-blue-700">
        Click to upload
      </span> or drag and drop {mimeType}
    </p>
    <small className="text-xs text-gray-500">
      Max File size - {maxFileSize} | {ratio} Ratio
    </small>
    <input type="file" className="hidden" accept={'.jpg,.jpeg'} />
  </div>
);

// 2. Schedule Input Block (combines date and time)
interface ScheduleInputProps {
  icon: FC<{ className: string }>;
  value: string;
  placeholder: string;
}

const ScheduleInput: FC<ScheduleInputProps> = ({ icon: Icon, value, placeholder }) => (
    <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm w-full transition duration-150">
        <Icon className="w-5 h-5 text-gray-600 mr-3" />
        <span className="text-gray-700 font-medium">
            {value || placeholder}
        </span>
        {/* Hidden input for actual data binding in a real scenario */}
        <input 
            type="hidden" 
            value={value} 
            name={placeholder.includes('Date') ? 'scheduleDate' : 'scheduleTime'} 
        />
    </div>
);


// --- MAIN FORM COMPONENT ---
const NewNotificationForm: FC = () => {
  const [formData, setFormData] = useState<NotificationFormDataState>({
    title: '',
    body: '',
    audience: 'All', // Default value
    target: '',
    scheduleDate: 'Wednesday, Jul 12', // Placeholder/Example data
    scheduleTime: '10.00am IST',      // Placeholder/Example data
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Notification Payload:', formData);
    // In a production app, this would be an API call to a service 
    // that handles scheduling the notification (e.g., using a cron job or a specialized scheduler).
    alert(`Notification scheduled for ${formData.scheduleDate} at ${formData.scheduleTime}!`);
  };

  return (
    // Page Container styling
    <div className="max-w-3xl  mb-10 py-8 pl-8 bg-white rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">New Notification</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title Placeholder */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title Placeholder*</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the text here"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        {/* Body Label (Textarea) */}
        <div className="space-y-2">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body Label*</label>
          <textarea
            id="body"
            name="body"
            placeholder="Enter the text here"
            value={formData.body}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 resize-y"
          />
        </div>

        {/* Audience Dropdown */}
        <div className="space-y-2">
          <label htmlFor="audience" className="block text-sm font-medium text-gray-700">Audience*</label>
          <div className="relative">
            <select
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              required
              className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            >
              <option value="All">All</option>
              <option value="RegisteredUsers">Registered Users</option>
              <option value="Guests">Guests</option>
            </select>
            {/* Custom Arrow using React Icons */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <FiChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
        
        {/* Thumbnail Dropzone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Thumbnail*</label>
          <ThumbnailDropzone mimeType="JPG" maxFileSize="1MB" ratio="16:9" />
        </div>

        {/* Target Input */}
        <div className="space-y-2">
          <label htmlFor="target" className="block text-sm font-medium text-gray-700">Target*</label>
          <input
            type="text"
            id="target"
            name="target"
            placeholder="Resource/PDFname"
            value={formData.target}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        {/* Schedule Inputs (Date & Time) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Schedule*</label>
          <div className="flex space-x-4">
            {/* Date Input */}
            <ScheduleInput 
                icon={FiCalendar} 
                value={formData.scheduleDate} 
                placeholder="Select Date" 
            />
            {/* Time Input */}
            <ScheduleInput 
                icon={FiClock} 
                value={formData.scheduleTime} 
                placeholder="Select Time" 
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center pt-4 space-x-4">
          
          {/* Schedule Now Button (using the deep blue color) */}
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-900/50 transition duration-150"
          >
            Schedule Now
          </button>

          {/* Cancel Link/Button */}
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

export default NewNotificationForm;